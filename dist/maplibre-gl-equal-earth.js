import proj4 from"proj4";import{LngLat}from"maplibre-gl";proj4.defs("EPSG:8857","+proj=eqearth +lon_0=0 +x_0=0 +y_0=0 +R=6371008.7714 +units=m +no_defs +type=crs");const pwgs84=proj4("EPSG:4326");const pmerc=proj4("EPSG:3857");const peq=proj4("EPSG:8857");const grid_fact=20037508.3427892/17243959.06;export function lonLat_to_eq(ll){return proj4(pwgs84,peq,ll)}export function eq_to_LonLat(coord){return proj4(peq,pwgs84,coord)}export function geogLonLat_to_eqmercLonLat(ll){const coord=lonLat_to_eq(ll);const scaled=[coord[0]*grid_fact,coord[1]*grid_fact];const shifted=proj4(pmerc,pwgs84,scaled);return shifted}export function mercLonLat_to_eqmercLonLat(ll){const coord=proj4(pwgs84,pmerc,ll);const eq=[coord[0]/grid_fact,coord[1]/grid_fact];const shifted=eq_to_LonLat(eq);return shifted}export class EqualEarthCoordTransform{constructor(map,zoomswitch){this._map=map;this._zoomswitch=zoomswitch;map.on("zoomstart",(()=>{this._zoomstart=this._map.getZoom()}));map.on("zoomend",(()=>{this._zoomstart=this._map.getZoom()}));map.transformCameraUpdate=this.cameraTransform.bind(this)}cameraTransform(next){if(this._zoomstart<this._zoomswitch&&next.zoom>=this._zoomswitch){let ll=mercLonLat_to_eqmercLonLat([next.center.lng,next.center.lat]);next.center=new LngLat(ll[0],ll[1])}else if(this._zoomstart>=this._zoomswitch&&next.zoom<this._zoomswitch){let ll=geogLonLat_to_eqmercLonLat([next.center.lng,next.center.lat]);next.center=new LngLat(ll[0],ll[1])}return next}}