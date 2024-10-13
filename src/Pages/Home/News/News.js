import CardNews from '../../../Component/-CardNews/CardNews'
import SectionWapper from '../../../Component/-SectionWapper/SectionWapper'
import TitelSection from '../../../Component/-TitelSection/TitelSection'
import dataNews from '../../../Data/DataNews'
import './News.css'

const NewsPage = () => {
   
  const result=dataNews.map(function(el){
      return <CardNews key={el.tai}  tai={el.tai} img={el.img} dis={el.dis}/>
  })

return (
  <div className='NewsPage'>
     <SectionWapper bg="#fff">
  <section id="News" className="info-int">
  <TitelSection 
         main='معلومات تهمك'
         sub='اطّلع على أبرز ما يحدث الآن'
         />
      <div className="container pr-0">
            <div className="row">
             {result}
        </div>
      </div>
    </section>
    <section className="info-int-color"></section>
 </SectionWapper>
  </div>
 
)
}

const News = () => {
   
    const result=dataNews.map(function(el){
        return <CardNews key={el.tai}  tai={el.tai} img={el.img} dis={el.dis}/>
    })

  return (
   <SectionWapper bg="#fff">
    <section id="News" className="info-int">
    <TitelSection 
           main='معلومات تهمك'
           sub='اطّلع على أبرز ما يحدث الآن'
           />
        <div className="container pr-0">
              <div className="row">
               {result}
          </div>
        </div>
      </section>
      <section className="info-int-color"></section>
   </SectionWapper>
   
  )
}

export default News
export {NewsPage}