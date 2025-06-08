import './Button.scss'

const Button = ({ type = "button", onClick, children }) => {
    return (
      <button type={type} className="btn1" onClick={onClick}>
        {children}
      </button>
    );
  };
  
  export default Button;
  