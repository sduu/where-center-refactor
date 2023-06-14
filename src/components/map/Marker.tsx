import React from 'react';
import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk';
import markerImage from '../../assets/icon/ico_picker_active.png';
import { CustomOverlayStyle } from './Marker.styled';
import { MarkerProps } from './Marker.type';

const Marker = ({ position, name }: MarkerProps) => {
  return (
    <>
      <MapMarker position={position} image={{ src: markerImage, size: { width: 30, height: 30 } }} />
      <CustomOverlayMap position={position} yAnchor={2.5}>
        <CustomOverlayStyle>{name}</CustomOverlayStyle>
      </CustomOverlayMap>
    </>
  );
};

export default Marker;
