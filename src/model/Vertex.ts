import Coordinate from "./Coordinate";
import { Edge } from "./Edge";

/**
 * A vertex in a graph with an id and a location
 */
export class Vertex {

	
    /**
     * identifier of the vertex (debug purpose)
     */
    id: string;
    /**
     * location of the vertex
     */
    coordinate: Coordinate;

    constructor(coordinate: Coordinate, id: String) {
        this.coordinate = coordinate;
        this.id = id.toString();
    }	
	setCoordinate(coordinate: Coordinate) {
		this.coordinate = coordinate;
	}
	
	setId(id: string) {
		this.id = id;
	}	

	/**
	 * dijkstra - cost to reach a vertex (Number.POSITIVE_INFINITY if the vertex is not reached)
	 */
	cost: number;
	/**
	 * dijkstra - incoming edge with the best cost
	 */
	reachingEdge: Edge|null;
	/**
	 * dijkstra - indicates if the vertex is visited
	 */
    visited: boolean;


}
