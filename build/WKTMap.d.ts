import View from 'ol/View';
import WKT from 'ol/format/WKT';
import { OSM } from 'ol/source';
import { Tile as TileLayer } from 'ol/layer';
export declare class WKTMap {
    private format;
    private target;
    private view;
    private raster;
    constructor(target: HTMLElement, view: View, raster?: TileLayer<OSM>);
    render(wkt: string): void;
    getFormat(): WKT;
    getTarget(): HTMLElement;
    getView(): View;
    getRaster(): TileLayer<OSM>;
}
