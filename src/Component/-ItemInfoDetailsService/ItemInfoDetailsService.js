import "./ItemInfoDetailsService.css";

const ItemInfoDetailsServiceTitel = (prpos) => {
    return (
      <div className=" ItemInfoDetailsService">
      
        <h5 className="ItemInfoDetailsServiceTitel">{prpos.tai}</h5>
      </div>
    );
  };

const ItemInfoDetailsService = (prpos) => {
  return (
    <div className="row ItemInfoDetailsService">
      <span>{prpos.icon}</span>
      <h6>{prpos.text}</h6>
    </div>
  );
};

export default ItemInfoDetailsService;
export {ItemInfoDetailsServiceTitel}
