const ModalWrapper = ({ children, onClose }) => {
  return (
    <div className="modal-overlay" data-testid="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        data-testid="modal-inner"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
