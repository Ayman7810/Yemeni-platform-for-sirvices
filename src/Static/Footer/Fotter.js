import ItemListFooter from "../../Component/-ItemListFooter/ItemListFooter";
import TitelFooter from "../../Component/-TitelFooter/TitelFooter";
import "./Footer.css";
import img from "../../asset/images/Footer/20231028_162350.png";
import { FaTelegram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pg-footer">
      <footer className="footer">
        <svg
          className="footer-wave-svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            className="footer-wave-path"
            d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
          ></path>
        </svg>
        <div className="footer-content container pb-3">
          <div className="row text-right">
            <div className="col-md-3 col-sm-6 col-6">
              <img src={img} alt="Logo" className="footer-logo" />
              <ItemListFooter text="الرئيسية" href="#" />
              <ItemListFooter text="عن المنصة اليمنية الموحدة" href="#" />
              <ItemListFooter text="إحصائيات المنصة اليمنية الموحدة" href="#" />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <TitelFooter tai="روابط مهمة" />
              <ItemListFooter text="الوثائق الشخصية" href="#" />
              <ItemListFooter text="الخدمات الصحية" href="#" />
              <ItemListFooter text="الخدمات القانونية" href="#" />
              <ItemListFooter text="السلامة والبيئة" href="#" />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <TitelFooter tai="نظرة عامة" />
              <ItemListFooter text="حقوق الانسان" href="#" />
              <ItemListFooter text="تمكين المرأة" href="#" />
              <ItemListFooter text="حقوق الشباب" href="#" />
              <ItemListFooter text="التمكين الرقمي" href="#" />
            </div>
            <div className="col-md-3 col-sm-6 col-6">
              <TitelFooter tai="تواصل معنا" />
              <ItemListFooter text="هل لديك أي سؤال؟" href="#" />
              <TitelFooter tai="اتصل بنا على" />
              <ItemListFooter text="777777777" href="#" />
              <ItemListFooter text="yemen.pgs@gmail.com" href="#" />
              <TitelFooter tai="تابعنا على" />
              <div className="social-icons">
                <FaTelegram />
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center">
          <p className="footer-copyright-text">
            <a className="footer-copyright-link" href="#" target="_self">
              جميع الحقوق محفوظة لـ المنصة اليمنية الموحدة بواسطة <span>أيمن الأوزري</span> © 2023
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
