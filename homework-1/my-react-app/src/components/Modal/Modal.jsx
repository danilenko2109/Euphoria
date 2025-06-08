import ModalWrapper from '../ModalWrapper/ModalWrapper.jsx';
import './Modal.scss';

const Modal = ({ children, onClose, className }) => (
  <ModalWrapper onClose={onClose} className={className}>
    <div>
      {children}
    </div>
  </ModalWrapper>
);

export default Modal;
