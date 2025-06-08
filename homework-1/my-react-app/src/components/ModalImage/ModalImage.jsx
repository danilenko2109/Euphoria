import Modal from '../Modal/Modal.jsx';
import ModalHeader from '../ModalHeader/ModalHeader.jsx';
import ModalBody from '../ModalBody/ModalBody.jsx';
import ModalFooter from '../ModalFooter/ModalFooter.jsx';
import ModalClose from '../ModalClose/ModalClose.jsx';
import ExampleImg from '../../assets/OIP.jpeg';


const ModalImage = ({ onClose }) => (
  <Modal onClose={onClose}>
    <ModalHeader>Image Modal</ModalHeader>
    <ModalClose onClick={onClose} />
    <ModalBody>
      <img src={ExampleImg} className="example-img" alt="Example" />
      <p className="texttt">dnasjknsjn</p>
    </ModalBody>
    <ModalFooter firstText="Add to favorite" firstClick={onClose} />
  </Modal>
);

export default ModalImage;
