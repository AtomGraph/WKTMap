import Map from 'ol/Map';
import WKT from 'ol/format/WKT';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
export class WKTMap {
    constructor(target, view, raster) {
        this.format = new WKT();
        this.target = target;
        this.view = view;
        this.raster = raster !== undefined ? raster : new TileLayer({ source: new OSM() });
    }
    render(wkt) {
        var feature = this.getFormat().readFeature(wkt, {
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:3857',
        });
        var vector = new VectorLayer({
            source: new VectorSource({
                features: [feature],
            }),
        });
        var map = new Map({
            layers: [this.getRaster(), vector],
            target: this.getTarget(),
            view: this.getView()
        });
    }
    getFormat() {
        return this.format;
    }
    getTarget() {
        return this.target;
    }
    getView() {
        return this.view;
    }
    getRaster() {
        return this.raster;
    }
}
//# sourceMappingURL=WKTMap.js.map