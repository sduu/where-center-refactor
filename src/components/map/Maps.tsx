import React from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { MapsWrapper } from './Maps.styled';

const Maps = () => {
  return (
    <MapsWrapper>
      <Map center={{ lat: 33.5563, lng: 126.79581 }} style={{ width: '100%', height: '100%' }} />
    </MapsWrapper>
  );
};

export default Maps;
