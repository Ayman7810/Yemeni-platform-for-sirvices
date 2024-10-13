import Shkl from "../../../Component/-Shkl/Shkl";
import TitelSection from "../../../Component/-TitelSection/TitelSection";
import "./Statistics.css";


const statistics = () => {
  return (
    <div className="Statistics">
      <div className="ContStat">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 Contshkl">
              <Shkl cls="shkl-1" tai="خدمة" num="536+" />
              <Shkl cls="shkl-2" tai="جهة حكومية" num="345+" />
              <Shkl cls="shkl-3" tai="مستخدم" num="2000+" />
            </div>
            <div className="col-12 col-md-6 info  " >
                <TitelSection main='تعرف على منصتنا بالارقام' sub='نحن نسعى جاهدين لجعل الحصول على الخدمات الحكومية أكثر سهولة ويسرًا من خلال منصتنا الإلكترونية المبتكرة نحن ملتزمون بتقديم خدمات عالية الجودة وتوفير تجربة مستخدم مريحة وفعالة لجميع المواطنين'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default statistics;
