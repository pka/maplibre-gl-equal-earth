import proj4 from 'proj4';

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

// Convert LonLat derived from Mercator projection to LonLat for Equal Earth projection on Merctor grid 
export function mercLonLat_to_eqmercLonLat(ll) {
  // ll -> Mercator -> Equal Earth -> ll
  const coord = proj4(pwgs84, pmerc, ll);
  const eq = [coord[0] / grid_fact, coord[1] / grid_fact];
  const shifted = eq_to_LonLat(eq);
  return shifted;
}