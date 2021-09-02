import Map from 'ol/Map';
import View from 'ol/View';
import WKT from 'ol/format/WKT';
import Geometry from 'ol/geom/Geometry';
import Feature from 'ol/Feature';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';

export class WKTMap
{

    private format: WKT;
    private target: HTMLElement;
    private view: View;
    private raster: TileLayer<OSM>;
    private feature: Feature<Geometry>;

    constructor(target: HTMLElement, view: View, raster?: TileLayer<OSM>)
    {
        this.format = new WKT();
        this.target = target;
        this.view = view;
        this.raster = raster !== undefined ? raster : new TileLayer({ source: new OSM() });
        this.feature = null;
    }

    public render(wkt: string)
    {
        this.feature = this.getFormat().readFeature(wkt, {
          dataProjection: 'EPSG:4326',
          featureProjection: 'EPSG:3857',
        });

        var vector = new VectorLayer({
          source: new VectorSource({
            features: [this.feature],
          }),
        });

        var map = new Map({
          layers: [this.getRaster(), vector],
          target: this.getTarget(),
          view: this.getView()
        });
    }

    public getFormat(): WKT
    {
        return this.format;
    }

    public getTarget(): HTMLElement
    {
        return this.target;
    }

    public getView(): View
    {
        return this.view;
    }

    public getRaster(): TileLayer<OSM>
    {
        return this.raster;
    }

    public getFeature(): Feature<Geometry>
    {
        return this.feature;
    }

}
