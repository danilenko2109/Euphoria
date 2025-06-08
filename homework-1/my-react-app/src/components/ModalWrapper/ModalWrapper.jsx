const ModalWrapper = ({ children, onClose }) => {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );
  };
  
  export default ModalWrapper;
  