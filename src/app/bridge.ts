/**
 * To describe how a bridge looks like:
 * Example:
 * {
 *    "id": "bridge-41S-138-C",
 *    "name": "MCKENZIE CREEK CULVERT,   Hwy. 17",
 *    "lat": 49.686,
 *    "lng": -92.4925,
 *    "year": 1899,
 *    "length": 54,
 *    "width": null
 * }
 */

export interface Bridge{
  id: string,
  name: string,
  lat: number,
  lng: number,
  year: number,
  length: number | null,
  width: number | null
}
