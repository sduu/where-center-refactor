import { useState } from 'react';
import { Address } from 'react-daum-postcode';

const usePostCode = (completeCallback?: () => void) => {
  const [addrValue, setAddrValue] = useState('');

  const handleComplete = (data: Address) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setAddrValue(fullAddress);
    completeCallback && completeCallback();
  };

  return { addrValue, handleComplete };
};

export default usePostCode;
