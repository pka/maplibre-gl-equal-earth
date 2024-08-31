import '../style.css'
import { Map } from 'maplibre-gl';
import { MapboxOverlay } from '@deck.gl/mapbox';
import { ScatterplotLayer } from '@deck.gl/layers';
import { EqualEarthCoordTransform } from '../lib/maplibre-gl-equal-earth.js';

var map = new Map({
  container: 'map',
  maxZoom: 6,
  style: 'https://equal.bbox.earth/natural-earth-countries-style-eq2merc.json'
});

// Mercator tiles >= z3
const transform = new EqualEarthCoordTransform(map, 3);

map.on('style.load', () => {
  const deckOverlay = new MapboxOverlay({
    interleaved: true,
    layers: [
      new ScatterplotLayer({
        data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/airports.json',
        // TODO: Reload coords after projection switch!
        getPosition: d => transform.geogLonLat_to_mapLonLat(d.coordinates),
        getRadius: 100,
        getColor: [155, 40, 0],
        radiusMinPixels: 2
      })
    ]
  });

  map.addControl(deckOverlay);
});
