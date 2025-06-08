import Button from '../Button/Button.jsx';


const ModalFooter = ({ firstText, secondaryText, firstClick, secondaryClick }) => (
    <div className="modal-footer">
      {firstText && <Button onClick={firstClick}>{firstText}</Button>}
      {secondaryText && <Button onClick={secondaryClick}>{secondaryText}</Button>}
    </div>
  );

  export default ModalFooter;