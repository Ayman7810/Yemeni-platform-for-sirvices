import ItemContactInfo from "../../../Component/-ItemContactInfo/ItemContactInfo";
import SectionWapper from "../../../Component/-SectionWapper/SectionWapper";
import { BsPhone } from "react-icons/bs";
import { BsMap } from "react-icons/bs";
import "./Contact.css";
import TitelSection from "../../../Component/-TitelSection/TitelSection";

const Contact = () => {
  return (
    <SectionWapper>
      <section id="concat" className="ftco-section">
        <div className="container">
          <TitelSection main="تواصل معنا" sub="إتصل بنا" />
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div
                      style={{ background: "#fff" }}
                      className=" info-wrap w-100 p-lg-5 p-4 img"
                    >
                      <h3>إتصل بنا</h3>
                      <p className="mb-4">
                        نحن منفتحون على أي اقتراح أو لمجرد الدردشة
                      </p>

                      <div className="dbox w-100 d-flex align-items-center">
                        <ItemContactInfo
                          icon={<BsMap />}
                          tai="العنوان:"
                          sub="الجراف - خط المطار"
                        />
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <ItemContactInfo
                          icon={<BsPhone />}
                          tai="الهاتف:"
                          sub="771234567"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-wrap w-100 p-lg-5 p-4">
                      <h3 className="mb-4">أرسل لنا رسالة</h3>
                      <form
                        method="POST"
                        id="contactForm"
                        name="contactForm"
                        className="contactForm"
                      >
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="الإسم"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="الإيميل"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="subject"
                                placeholder="الموضوع"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                cols="30"
                                rows="6"
                                placeholder="الرسالة"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="center form-group">
                              <input
                                type="submit"
                                value="إرسال"
                                className="btn btn-primary"
                              />
                              <div className="submitting"></div>
                            </div>
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
const ContactPage = () => {
  return (
    <SectionWapper>
      <section id="concat" className="ftco-section">
        <div className="container">
          <TitelSection main="تواصل معنا" sub="إتصل بنا" />
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div
                      style={{ background: "#fff" }}
                      className=" info-wrap w-100 p-lg-5 p-4 img"
                    >
                      <h3>إتصل بنا</h3>
                      <p className="mb-4">
                        نحن منفتحون على أي اقتراح أو لمجرد الدردشة
                      </p>

                      <div className="dbox w-100 d-flex align-items-center">
                        <ItemContactInfo
                          icon={<BsMap />}
                          tai="العنوان:"
                          sub="الجراف - خط المطار"
                        />
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <ItemContactInfo
                          icon={<BsPhone />}
                          tai="الهاتف:"
                          sub="771234567"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-wrap w-100 p-lg-5 p-4">
                      <h3 className="mb-4">أرسل لنا رسالة</h3>
                      <form
                        method="POST"
                        id="contactForm"
                        name="contactForm"
                        className="contactForm"
                      >
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="الإسم"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="الإيميل"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="subject"
                                placeholder="الموضوع"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                cols="30"
                                rows="6"
                                placeholder="الرسالة"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="center form-group">
                              <input
                                type="submit"
                                value="إرسال"
                                className="btn btn-primary"
                              />
                              <div className="submitting"></div>
                            </div>
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

export default Contact;
export {ContactPage}
