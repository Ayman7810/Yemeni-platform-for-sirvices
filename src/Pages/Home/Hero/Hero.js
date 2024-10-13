import './Hero.css'

const Hero = () => {
  return (
    
   <div className='hero'>
        <div id="stripes" >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span> 
        </div>
            <h1 >المنصة اليمنية الموحدة</h1>
            <h5  > دليلك للوصول الى الخدمات الحكومية </h5>
            {/* <SecBtn cls='btn-1' text='تصفح الخدمات'/>
            <SecBtn cls='btn-2' text='تواصل معنا'/> */}
            <div className='clops-1'></div>
            <div className='clops-2'></div>
            <div className='clops-3'></div>
            
     </div>
  )
}

export default Hero