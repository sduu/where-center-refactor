export interface Coordinate {
  lat: number;
  lng: number;
}

export const getAddress = async (address: string) => {
  const { kakao } = window;
  const geocoder = new kakao.maps.services.Geocoder();

  const coordinate = await new Promise<Coordinate>((resolve, reject) => {
    geocoder.addressSearch(address, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const { x, y } = result[0];
        resolve({ lat: +y, lng: +x });
      } else {
        reject(status);
      }
    });
  });

  return coordinate;
};
