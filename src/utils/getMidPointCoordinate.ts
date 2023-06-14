import { Coordinate } from './getAddress';

const getMidpointCoordinate = (coordinates: Coordinate[]): Coordinate => {
  if (coordinates.length === 0) {
    throw new Error('좌표 배열이 비어있습니다.');
  }

  let sumLat = 0;
  let sumLng = 0;

  for (const coordinate of coordinates) {
    sumLat += coordinate.lat;
    sumLng += coordinate.lng;
  }

  const averageLat = sumLat / coordinates.length;
  const averageLng = sumLng / coordinates.length;

  return {
    lat: averageLat,
    lng: averageLng,
  };
};

export default getMidpointCoordinate;
