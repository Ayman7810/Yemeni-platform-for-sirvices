import "./ItemContactInfo.css";

const ItemContactInfo = (props) => {
  return (
  
  <>
    <div className="text pl-3 mr-1">
      <p>
        <span>
        
          {props.tai}
        </span>
        <a href="">{props.sub}</a>
      </p>
    </div>
     <div className="icon d-flex align-items-center justify-content-center">  {props.icon}</div>
  </>
  );
};

export default ItemContactInfo;
