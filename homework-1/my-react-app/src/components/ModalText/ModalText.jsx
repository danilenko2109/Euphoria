import Modal from '../Modal/Modal';
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalBody from '../ModalBody/ModalBody';
import ModalFooter from '../ModalFooter/ModalFooter';
import ModalClose from '../ModalClose/ModalClose';

const ModalText = ({ onClose }) => (
  <Modal onClose={onClose}>
    <ModalHeader>
      <p className="texttt">Text Modal</p>
    </ModalHeader>
    <ModalClose onClick={onClose} />
    <ModalBody>
      <p className="texttt">This is a text-based modal example.</p>
    </ModalBody>
    <ModalFooter firstText="No" firstClick={onClose} secondaryText="Yes" secondaryClick={onClose} />
  </Modal>
);

export default ModalText;
