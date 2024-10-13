import './TitelSection.css'

const TitelSection = (props) => {
  return (
    <div className="TitelSection">
    <h2>{props.main}</h2>
    <p>{props.sub}</p>
  </div>
  )
}

export default TitelSection