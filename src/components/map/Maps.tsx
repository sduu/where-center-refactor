import React from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { usePickerStateContext } from '../../context/pickerContext';
import getMidpointCoordinate from '../../utils/getMidPointCoordinate';
import { MapsWrapper } from './Maps.styled';

const Maps = () => {
  const { pickerList } = usePickerStateContext();

  const coordinates = pickerList.map(picker => picker.coordinate);
  const centerCoordinate = getMidpointCoordinate(coordinates);

  return (
    <MapsWrapper>
      <Map center={centerCoordinate} style={{ width: '100%', height: '100%' }} />
    </MapsWrapper>
  );
};

export default Maps;
