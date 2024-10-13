import "./AboutUs.css";
import SectionWapper from "../../../Component/-SectionWapper/SectionWapper";
import TitelSection from "../../../Component/-TitelSection/TitelSection";
import img from "../../../asset/images/AboutUs/about us.jpg";


const AboutUs = () => {
  return (
    <div id="AboutUs">
      <SectionWapper bg="#fff">
        <section id="about-us" className="AboutUs">
          <div className="container">
            <TitelSection main="من نحن" sub="إعرفنا أكثر" />
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="allText">
                  <p className="text-blk description">
                    نحن نسعى جاهدين لجعل الحصول على الخدمات الحكومية أكثر سهولة
                    ويسرًا من خلال منصتنا الإلكترونية المبتكرة. توفر المنصة
                    اليمنية الموحدة خدمات متنوعة تشمل تقديم طلبات المستندات
                    الرسمية، وإصدار التراخيص، وتسهيل الدفع الإلكتروني وغيرها من
                    الخدمات الحكومية الأساسية. نحن ملتزمون بتقديم خدمات عالية
                    الجودة وتوفير تجربة مستخدم مريحة وفعالة لجميع المواطنين. نثق
                    أن منصتنا ستعزز الشفافية والكفاءة في تقديم الخدمات الحكومية في
                    اليمن.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-6 mt-3">
                <img className="mainImg" src={img} alt="من نحن" />
              </div>
            </div>
          </div>
        </section>
      </SectionWapper>
    </div>
  );
};
const AboutUsPage = () => {
//  const AboutUsPageLink= document.getElementById("AboutUsPageLink")
//  AboutUsPageLink.classList.add('active')
// if(window.location.pathname==="/AboutUsPage"){
  
//   console.log("yas")
// }
  return (
 
     <div id="AboutUsPage">
      <SectionWapper bg="#f4fdfd">
        <section id="AboutUsPage" className="AboutUsPage">
          <div className="container">
            <TitelSection main="من نحن" sub="إعرفنا أكثر" />
          </div>
          <div className="responsive-container-block bigContainer">
            <div className="responsive-container-block Container">
              <div className="allText aboveText">
                <p className="text-blk description">
                  نحن نسعى جاهدين لجعل الحصول على الخدمات الحكومية أكثر سهولة
                  ويسرًا من خلال منصتنا الإلكترونية المبتكرة. توفر المنصة
                  اليمنية الموحدة خدمات متنوعة تشمل تقديم طلبات المستندات
                  الرسمية، وإصدار التراخيص، وتسهيل الدفع الإلكتروني وغيرها من
                  الخدمات الحكومية الأساسية. نحن ملتزمون بتقديم خدمات عالية
                  الجودة وتوفير تجربة مستخدم مريحة وفعالة لجميع المواطنين. نثق
                  أن منصتنا ستعزز الشفافية والكفاءة في تقديم الخدمات الحكومية في
                  اليمن.
                </p>
              </div>
              <img className="mainImg" src={img} />
            </div>
          </div>
        </section>
      </SectionWapper>
    </div>

   
  );
};

export default AboutUs;
export {AboutUsPage}
