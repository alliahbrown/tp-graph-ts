import { LineString } from "geojson";
import { Vertex } from "./Vertex";
import length from "@turf/length";
import { lineString } from "@turf/turf";

/**
 * An edge with its source and target
 */
export class Edge {
    id: string;
    
    private source: Vertex;
    private target: Vertex;

    geometry? : LineString;

    constructor(source : Vertex, target: Vertex) {
        this.source = source;
        this.target = target;
    }
    setGeometry(geometry: LineString) {
        this.geometry = geometry;
    }
    
    getSource(){
        return this.source}

    getTarget(){
        return this.target}

    getLength(): number {
        return length(lineString(this.getGeometry().coordinates));
    }

    getGeometry(): LineString {
        if (this.geometry) {
            return this.geometry;
        }
        return {
            type: "LineString",
            coordinates: [
                this.source.coordinate,
                this.target.coordinate
            ]
        }
    }

}
