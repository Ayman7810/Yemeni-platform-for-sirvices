import TitelSection from "../-TitelSection/TitelSection";
import "./SectionWapper.css";

const SectionWapper = (props) => {
  return <div className="SectionWapper" style={{background:props.bg,position:props.p,top:props.top}}>{props.children}</div>;
};

export default SectionWapper;
