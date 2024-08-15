# maplibre-gl-equal-earth

maplibre-gl-equal-earth is a MapLibre GL JS plugin for basic Equal Earth projection support.

## Usage

```
npm install maplibre-gl-equal-earth
```

## Examples

Transforming between Equal Earth and Mercator tile coordinates for
tileset with combined Equal Earth and Web Mercator coordinates:


```
import { Map } from 'maplibre-gl';
import { EqualEarthCoordTransform } from 'maplibre-gl-equal-earth';

var map = new Map({
  container: 'map',
  style: 'https://equal.bbox.earth/natural-earth-countries-style-eq2merc.json'
});
// Mercator tiles >= z3
const transform = new EqualEarthCoordTransform(map, 3);
```

Overlay GeoJSON data with DeckGL on Equal Earth base map:

```
import { Map } from 'maplibre-gl';
import { MapboxOverlay, ScatterplotLayer } from 'deck.gl';
import { geogLonLat_to_eqmercLonLat } from 'maplibre-gl-equal-earth';

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
```
