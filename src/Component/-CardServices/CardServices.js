import { Link } from "react-router-dom";
import "./CardServices.css";
const CardServices = (props) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
      <center>
        {/* health */}
       <Link to={props.href}> <div className="CardServicess">{props.children} </div></Link>
      </center>
    </div>
  );
};

export default CardServices;
