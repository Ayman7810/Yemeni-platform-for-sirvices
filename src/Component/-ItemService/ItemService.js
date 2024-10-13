import React from "react";
import { Link } from "react-router-dom";
const ItemService = (prpos) => {

  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <Link to={`/ServiceDetails/${prpos.id1}`} >
       
      <div  className="services-box">
        <h4>{prpos.tai}</h4>
        <p>{prpos.dis}</p>
        <a className="link-box">
          {prpos.gah}
        </a>
      </div>
      </Link>
      
    </div>
  );
};

export default ItemService;
