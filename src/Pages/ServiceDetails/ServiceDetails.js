/** @format */

import { useEffect, useState } from "react";
import ItemInfoDetailsService, {
  ItemInfoDetailsServiceTitel,
} from "../../Component/-ItemInfoDetailsService/ItemInfoDetailsService";
import { useParams } from "react-router-dom";
import SectionWapper from "../../Component/-SectionWapper/SectionWapper";
import { BiDollar, BiPhone } from "react-icons/bi";
import { FaBuildingColumns } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { id } = useParams();
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Ayman7810/db.json/refs/heads/main/db.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const service = Array.isArray(data.DataServices)
          ? data.DataServices.find((el) => el.id1 === id)
          : null;
        if (service) {
          setServiceData(service);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!serviceData) {
    return <div className="loading">جاري التحميل...</div>;
  }

  const {
    tai,
    dis,
    state,
    phone,
    email,
    step1,
    step2,
    step3,
    step4,
    step5,
    gah,
  } = serviceData;

  const steps = [step1, step2, step3, step4, step5].filter(Boolean);

  return (
    <div className="container">
      <SectionWapper>
        <section className="ServiceDetails">
          <div className="details-container">
            <div className="info-section">
              <ItemInfoDetailsServiceTitel tai="معلومات عن الخدمة" />
              <ItemInfoDetailsService
                icon={<BiDollar />}
                text={`رسوم الخدمة: ${state}`}
              />
              <ItemInfoDetailsServiceTitel tai="جهة الخدمة" />
              <ItemInfoDetailsService
                icon={<FaBuildingColumns />}
                text={gah}
              />
              <ItemInfoDetailsServiceTitel tai="خدمة العملاء" />
              <ItemInfoDetailsService
                icon={<MdOutlineAlternateEmail />}
                text={email}
              />
              <ItemInfoDetailsService icon={<BiPhone />} text={phone} />
            </div>

            <div className="service-content">
              <h1 className="service-title">{tai}</h1>
              <p className="service-description">{dis}</p>
              <div className="steps-section">
                <h3 className="steps-title">خطوات الخدمة</h3>
                <ol>
                  {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
              <a href="#" className="action-btn">
                إبداء الخدمة
              </a>
            </div>
          </div>
        </section>
      </SectionWapper>
    </div>
  );
};

export default ServiceDetails;
