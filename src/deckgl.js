import '../style.css'
import { Map } from 'maplibre-gl';
import { MapboxOverlay } from '@deck.gl/mapbox';
import { ScatterplotLayer } from '@deck.gl/layers';
import { geogLonLat_to_eqmercLonLat } from '../lib/maplibre-gl-equal-earth.js';

var map = new Map({
  container: 'map',
  maxZoom: 6,
  style: 'https://equal.bbox.earth/natural-earth-countries-style.json'
});

map.on('style.load', () => {
  const deckOverlay = new MapboxOverlay({
    interleaved: true,
    layers: [
      new ScatterplotLayer({
        data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/airports.json',
        getPosition: d => geogLonLat_to_eqmercLonLat(d.coordinates),
        getRadius: 100,
        getColor: [155, 40, 0],
        radiusMinPixels: 2
      })
    ]
  });

  map.addControl(deckOverlay);
});
