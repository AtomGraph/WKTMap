import Map from 'ol/Map';
import View from 'ol/View';
import WKT from 'ol/format/WKT';
import {OSM, Vector as VectorSource} from 'ol/source';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';

export class WKTMap
{

    private format: WKT;
    private raster: TileLayer;
    private target: HTMLElement;
    private view: View;

    constructor(raster: TileLayer, target: HTMLElement, view: View)
    {
        this.format = new WKT();
        this.raster = raster;
        this.target = target;
        this.view = view;
    }

    public render(wkt: string)
    {
        var feature = getFormat().readFeature(wkt, {
          dataProjection: 'EPSG:4326',
          featureProjection: 'EPSG:3857',
        });

        var vector = new VectorLayer({
          source: new VectorSource({
            features: [feature],
          }),
        });

        var map = new Map({
          layers: [getRaster(), vector],
          target: getTarget(),
          view: getView()
        });
    }

    public getFormat(): WKT
    {
        return this.format;
    }

    public getRaster(): TileLayer
    {
        return this.raster;
    }

    public getTarget(): HTMLElement
    {
        return this.target;
    }

    public getView(): View
    {
        return this.view;
    }

}