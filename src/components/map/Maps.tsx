import React, { useState } from 'react';
import { Circle, Map, MapMarker, Polyline } from 'react-kakao-maps-sdk';
import { usePickerStateContext } from '../../context/pickerContext';
import findFarthestCoordinate from '../../utils/findFarthestCoordinate';
import getMidpointCoordinate from '../../utils/getMidPointCoordinate';
import { MapsWrapper } from './Maps.styled';

const Maps = () => {
  const [longLine, setLongLine] = useState<kakao.maps.Polyline>();

  const { pickerList } = usePickerStateContext();

  const coordinates = pickerList.map(picker => picker.coordinate);
  const centerCoordinate = getMidpointCoordinate(coordinates);
  const farthestCoordinate = findFarthestCoordinate(centerCoordinate, coordinates);

  return (
    <MapsWrapper>
      <Map center={centerCoordinate} style={{ width: '100%', height: '100%' }}>
        {pickerList.map(picker => (
          <>
            <MapMarker key={picker.id + '_marker'} position={picker.coordinate}>
              <div style={{ color: '#000' }}>Hello World!</div>
            </MapMarker>

            <Polyline
              key={picker.id + '_poly'}
              path={[[picker.coordinate, centerCoordinate]]}
              strokeWeight={3}
              strokeColor='#FFAE00'
              strokeOpacity={0.7}
              strokeStyle='solid'
              onCreate={el => {
                picker.coordinate === farthestCoordinate && setLongLine(el);
              }}
            />
          </>
        ))}

        <Circle
          center={centerCoordinate}
          radius={longLine?.getLength() || 0}
          strokeWeight={2}
          strokeColor='#75B8FA'
          strokeOpacity={1}
          strokeStyle='dash'
          fillColor='#CFE7FF'
          fillOpacity={0.7}
        />
      </Map>
    </MapsWrapper>
  );
};

export default Maps;
