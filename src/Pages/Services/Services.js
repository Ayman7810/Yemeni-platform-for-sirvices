import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Services.css";
import SectionWapper from "../../Component/-SectionWapper/SectionWapper";
import TitelSection from "../../Component/-TitelSection/TitelSection";
import ItemService from "../../Component/-ItemService/ItemService";

const Services = () => {
  const urlId = useParams();
  const [result, setResult] = useState([]);
  const [error, setError] = useState(null);
  const [isListVisible, setListVisible] = useState(false); // حالة لرؤية القائمة

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Ayman7810/db.json/refs/heads/main/db.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        const services = data.DataServices;

        if (Array.isArray(services)) {
          const filteredResults = services.filter(el => 
            urlId.id === undefined || urlId.id === el.type
          );
          setResult(
            filteredResults.map((el) => (
              <ItemService key={el.id} id1={el.id1} tai={el.tai} dis={el.dis} gah={el.gah} />
            ))
          );
        } else {
          throw new Error('DataServices is not an array');
        }
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        setError(error.message);
      });
  }, [urlId.id]);

  function showEvryServices() {
    fetch("https://raw.githubusercontent.com/Ayman7810/db.json/refs/heads/main/db.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        const services = data.DataServices;

        if (Array.isArray(services)) {
          setResult(
            services.map((el) => (
              <ItemService key={el.id} id1={el.id1} tai={el.tai} dis={el.dis} gah={el.gah} />
            ))
          );
        } else {
          throw new Error('DataServices is not an array');
        }
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        setError(error.message);
      });
  }

  function ay(n) {
    fetch("https://raw.githubusercontent.com/Ayman7810/db.json/refs/heads/main/db.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        const services = data.DataServices;

        if (Array.isArray(services)) {
          const filteredResults = services.filter(el => el.type === n);
          setResult(
            filteredResults.map((el) => (
              <ItemService key={el.id} tai={el.tai} dis={el.dis} gah={el.gah} id1={el.id1} />
            ))
          );
        } else {
          throw new Error('DataServices is not an array');
        }
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        setError(error.message);
      });
  }

  function ShowAndHoddenList() {
    setListVisible(!isListVisible); // عكس حالة رؤية القائمة
  }

  return (
    <SectionWapper>
      <div className="service-page">
        <TitelSection
          main="نظرة على الخدمات الحكومية"
          sub="جميع الخدمات بين يديك"
        />
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="row marginSection">{result}</div>

      <div className="dropdown">
        <button className="listBtn" onClick={ShowAndHoddenList}>
          قائمة الخدمات
        </button>
        <div className={`list ${isListVisible ? '' : 'hidden'}`}>
          <div className="menu">
            <button onClick={showEvryServices}>جميع الخدمات</button>
            <button onClick={() => ay("legal")}>الشؤون القانونية</button>
            <button onClick={() => ay("educational")}>التعليم والتدريب</button>
            <button onClick={() => ay("job")}>العمل والتوظيف</button>
            <button onClick={() => ay("personal")}>الوثائق الشخصية</button>
            <button onClick={() => ay("health")}>الخدمات الصحية</button>
            <button onClick={() => ay("travel")}>السياحة والترفيه</button>
          </div>
        </div>
      </div>
    </SectionWapper>
  );
};

export default Services;
