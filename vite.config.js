import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'lib/maplibre-gl-equal-earth.js'),
      name: 'maplibregleqearth',
      fileName: format => { return format == 'es' ? 'maplibre-gl-equal-earth.js' : `maplibre-gl-equal-earth.${format}.js` }
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['maplibre-gl'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          'maplibre-gl': 'maplibregl'
        },
      },
    },
  },
})
