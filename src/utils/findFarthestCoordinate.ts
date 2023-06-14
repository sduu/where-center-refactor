import { Coordinate } from './getAddress';

const findFarthestCoordinate = (centerCoordinate: Coordinate, coordinates: Coordinate[]): Coordinate => {
  if (coordinates.length === 0) {
    throw new Error('좌표 배열이 비어있습니다.');
  }

  let maxDistance = 0;
  let farthestCoordinate: Coordinate | undefined = undefined;

  for (const coordinate of coordinates) {
    const distance = getDistance(centerCoordinate, coordinate);
    if (distance > maxDistance) {
      maxDistance = distance;
      farthestCoordinate = coordinate;
    }
  }

  if (!farthestCoordinate) {
    throw new Error('가장 먼 좌표를 찾을 수 없습니다.');
  }

  return farthestCoordinate;
};

const getDistance = (coord1: Coordinate, coord2: Coordinate): number => {
  const latDiff = Math.abs(coord1.lat - coord2.lat);
  const lngDiff = Math.abs(coord1.lng - coord2.lng);
  const distance = Math.sqrt(latDiff ** 2 + lngDiff ** 2);
  return distance;
};

export default findFarthestCoordinate;
