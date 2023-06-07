import ReactDOM from 'react-dom';
import { PortalProps } from './Portal.type';

const Portal = ({ children }: PortalProps) => {
  return ReactDOM.createPortal(children, document.getElementById('_portal') as HTMLElement);
};

export default Portal;
