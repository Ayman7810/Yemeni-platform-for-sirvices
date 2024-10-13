import "./Shkl.css";

const Shkl = (props) => {
  return (
    <div className={props.cls}>
      <h2>{props.num}</h2>
      <h3>{props.tai}</h3>
    </div>
  );
};

export default Shkl;
