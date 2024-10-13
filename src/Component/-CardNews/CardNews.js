import './CardNews.css'

const CardNews = (props) => {
  return (
    <div className="col-lg-3 col-md-6 d-flex align-items-center">
    <div className="CardNews">
      <img src={props.img} width="100%"/>
      <h4> {props.tai}</h4>
      <p>{props.dis}</p>
    </div>
</div>
  )
}

export default CardNews