import { useState } from "react";
import TitelSection from "../../Component/-TitelSection/TitelSection";
import SectionWapper from "../../Component/-SectionWapper/SectionWapper";

const InsertData = () => {
   

  const [tai, setTitle] = useState("");
  const [dis, setDis] = useState("");
  const [id1, setId1] = useState("");
  const [type, setType] = useState("");
  const [gah, setGeh] = useState("");
  const [state, setPrice] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [step1, setStep1] = useState("");
  const [step2, setStep2] = useState("");
  const [step3, setStep3] = useState("");
  const [step4, setStep4] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    const service = {
      tai,
      dis,
      id1,
      type,
      gah,
      state,
      phone,
      email,
      step1,
      step2,
      step3,
      step4,
    };
    fetch("https://raw.githubusercontent.com/Ayman7810/db.json/refs/heads/main/db.json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(service),
    }).then(() => {
      console.log("post adde");
      window.location.reload()
    });
    console.log(tai);
  };
  return (
    <SectionWapper>
      <section id="concat" className="ftco-section">
        <div className="container">
          <TitelSection main="اضافة خدمة جديدة" sub="اضافة" />
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-md-12">
                    <div className="contact-wrap w-100 p-lg-5 p-4">
                      <h3 className="mb-4">ادخل بيانات الخدمة </h3>
                      <form
                        method="POST"
                        onSubmit={handleForm}
                        className="contactForm"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                value={dis}
                                onChange={(e) => setDis(e.target.value)}
                                placeholder="وصف الخدمة"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="اسم الخدمة"
                                required
                                value={tai}
                                onChange={(e) => setTitle(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                placeholder="  نوع الخدمة"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                value={id1}
                                onChange={(e) => setId1(e.target.value)}
                                placeholder="المعرف الفريد للخدمة"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                value={state}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="  سعر الخدمة"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                value={gah}
                                onChange={(e) => setGeh(e.target.value)}
                                placeholder="  جهه الخدمة"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder=" الايميل"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder=" الهاتف"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                value={step2}
                                onChange={(e) => setStep2(e.target.value)}
                                placeholder=" الخطوة الثانية"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                value={step1}
                                onChange={(e) => setStep1(e.target.value)}
                                placeholder=" الخطوة الاولئ"
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                value={step4}
                                onChange={(e) => setStep4(e.target.value)}
                                placeholder=" الخطوة الرابعة"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                value={step3}
                                onChange={(e) => setStep3(e.target.value)}
                                placeholder=" الخطوة الثالثة"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="center form-group">
                            <input
                              type="submit"
                              value="إضافة"
                              className="btn btn-primary"
                            />
                            <div className="submitting"></div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionWapper>
  );
};

export default InsertData;
