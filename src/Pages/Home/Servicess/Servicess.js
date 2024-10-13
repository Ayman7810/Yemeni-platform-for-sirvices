import SectionWapper from "../../../Component/-SectionWapper/SectionWapper";
import TitelSection from "../../../Component/-TitelSection/TitelSection";
import CardServices from "../../../Component/-CardServices/CardServices";
import { FaHeartPulse } from "react-icons/fa6";
import {  FaMedrt    } from "react-icons/fa6";
import {FaBookBookmark} from "react-icons/fa6";
import {FaBriefcase} from "react-icons/fa6";
import {FaChartColumn} from "react-icons/fa6";
import {FaPeopleRoof} from "react-icons/fa6";
import {FaRegIdCard} from "react-icons/fa6";
import {FaPlaneDeparture} from "react-icons/fa6";
import {FaPersonSkiing} from "react-icons/fa6";
import {FaTreeCity} from "react-icons/fa6";
import {FaUserTie} from "react-icons/fa6";
import {FaTowerCell} from "react-icons/fa6";

import "./Servicess.css";

const Servicess = () => {
  return (
    <div id='Servicess'>
 <SectionWapper bg="rgba(102, 226, 233, 0.06);">
      <TitelSection
        main="الخدمات الحكومية  اليمنية"
        sub="جميع خدماتك الحكومية في منصة إلكترونية موحدة"
      />
  <div className="container">
  <div className="row">
    <div className=" col-md-4">
      <CardServices href='Services/health'>
        <span className="IconServices">
          <FaHeartPulse />
        </span>
        <h2>الخدمات الصحية</h2>
      </CardServices>
    </div>
    
    <div className="col-md-4">
      <CardServices href='Services/educational'>
        <span className="IconServices">
          <FaBookBookmark />
        </span>
        <h2>التعليم والتدريب</h2>
      </CardServices>
    </div>
    
    <div className="col-md-4">
      <CardServices href='Services/job'>
        <span className="IconServices">
          <FaBriefcase />
        </span>
        <h2>العمل والتوظيف</h2>
      </CardServices>
    </div>
  </div>

  <div className="row">
    <div className="col-md-4">
      <CardServices href='Services/legal'>
        <span className="IconServices">
          <FaUserTie />
        </span>
        <h2>الشؤون القانونية</h2>
      </CardServices>
    </div>
    
    <div className="col-md-4">
      <CardServices href='Services/travel'>
        <span className="IconServices">
          <FaPersonSkiing />
        </span>
        <h2>السياحة والترفيه</h2>
      </CardServices>
    </div>
    
    <div className="col-md-4">
      <CardServices href='Services/personal'>
        <span className="IconServices">
          <FaRegIdCard />
        </span>
        <h2>الوثائق الشخصية</h2>
      </CardServices>
    </div>
  </div>
</div>

    </SectionWapper>
    </div>
   
  );
};

export default Servicess;
