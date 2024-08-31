import proj4 from 'proj4';
import { LngLat } from 'maplibre-gl';


// https://equal.bbox.earth/

proj4.defs('EPSG:8857', '+proj=eqearth +lon_0=0 +x_0=0 +y_0=0 +R=6371008.7714 +units=m +no_defs +type=crs');
const pwgs84 = proj4('EPSG:4326');
const pmerc = proj4('EPSG:3857');
const peq = proj4('EPSG:8857');
// Scale factor from Equal Earth to Web Mercator grid
const grid_fact = 20037508.3427892 / 17243959.06;

// Convert geographic coordinate to Equal Earth projection
export function lonLat_to_eq(ll) {
  return proj4(pwgs84, peq, ll);
}

// Convert coordinate in Equal Earth projection to geographic coordinate
export function eq_to_LonLat(coord) {
  return proj4(peq, pwgs84, coord);
}

// Convert geographic coordinate to LonLat for Equal Earth projection on Merctor grid 
export function geogLonLat_to_eqmercLonLat(ll) {
  // ll -> Equal Earth -> Mercator -> ll
  const coord = lonLat_to_eq(ll);
  const scaled = [coord[0] * grid_fact, coord[1] * grid_fact];
  const shifted = proj4(pmerc, pwgs84, scaled);
  return shifted;
}

// Convert LonLat derived from Equal Earth projection on Merctor grid to geographic coordinate
export function eqmercLonLat_to_geogLonLat(ll) {
  // ll -> Mercator -> Equal Earth -> ll
  const coord = proj4(pwgs84, pmerc, ll);
  const eq = [coord[0] / grid_fact, coord[1] / grid_fact];
  const shifted = eq_to_LonLat(eq);
  return shifted;
}

// transformCameraUpdate handler class transforming between Equal Earth and Mercator tile coordinates
export class EqualEarthCoordTransform {
  constructor(map, zoomswitch) {
    this._map = map;
    this._zoomswitch = zoomswitch;
    // We are effectively interested in zoomsart/zoomend, but zoom events seem always be combinded
    // with move events and in case of a pinch zoom, we have to transform lat/lon until mooveend.
    map.on('movestart', () => {
      // console.log(`movestart ${this._map.getZoom()}`);
      this._zoomstart = this._map.getZoom();
    });
    map.on('moveend', () => {
      // console.log(`moveend ${this._map.getZoom()}`);
      this._zoomstart = this._map.getZoom();
    });
    // other flyTo events:
    // for (const ev of ['zoomstart', 'zoomend', 'boxzoomstart', 'boxzoomend', 'pitchstart', 'pitchend', 'rotatestart', 'rotateend']) {
    //   map.on(ev, (e) => {
    //     console.log(`${ev} event: `, e);
    //   });
    // }
    map.transformCameraUpdate = this.cameraTransform.bind(this);
  }

  geogLonLat_to_mapLonLat(ll) {
    if (this._map.getZoom() >= this._zoomswitch) {
      return ll;
    } else {
      return geogLonLat_to_eqmercLonLat(ll);
    }
  }

  cameraTransform(next) {
    if (this._zoomstart < this._zoomswitch && next.zoom >= this._zoomswitch) {
      // convert center coord from Equal Earth zoom level to geographic coord
      let ll = eqmercLonLat_to_geogLonLat([next.center.lng, next.center.lat]);
      if (!isNaN(ll[0]) && !isNaN(ll[1])) {
        next.center = new LngLat(ll[0], ll[1]);
      }
      // console.log(`${this._zoomstart} -> ${next.zoom}: `, next.center);
    } else if (this._zoomstart >= this._zoomswitch && next.zoom < this._zoomswitch) {
      // convert center coord from Mercator zoom level to shifted Equal Earth LonLat
      let ll = geogLonLat_to_eqmercLonLat([next.center.lng, next.center.lat]);
      if (!isNaN(ll[0]) && !isNaN(ll[1])) {
        next.center = new LngLat(ll[0], ll[1]);
      }
      // console.log(`${this._zoomstart} -> ${next.zoom}: `, next.center);
    }
    return next;
  }
}
