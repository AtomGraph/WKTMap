import { Tile } from 'ol/layer';

export class WKTMap
{

    private raster: Tile;

    constructor(raster: Tile)
    {
        this.raster = raster;
    }

}
