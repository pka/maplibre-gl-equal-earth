import '../style.css'
import { Map } from 'maplibre-gl';
import { EqualEarthCoordTransform } from '../lib/maplibre-gl-equal-earth.js';

var map = new Map({
  container: 'map',
  style: 'https://equal.bbox.earth/natural-earth-countries-style-eq2merc.json'
});
// Mercator tiles >= z3
const transform = new EqualEarthCoordTransform(map, 3);
