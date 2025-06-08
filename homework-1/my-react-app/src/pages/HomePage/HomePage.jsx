
// import banner from "../../assets/hero-banner.png";
import {NavLink} from "react-router";
import "./HomePage.scss";



const HomePage = () => {
  

  return (
    <div className="hero">
  <div className="hero__content">
    <h1 className="hero__title">
      Summer Value Pack
    </h1>
    <p className="hero__describe">
      cool / colorful / comfy
    </p>
    <NavLink className="hero__btn" to='/products'>Shop Now</NavLink>
  </div>
</div>
  );
};

export default HomePage;
