import React from "react";
import "./Contact.css";
import TitleSection from "../TitleSection/TitleSection";
import { FaMap, FaEnvelopeOpenText } from "react-icons/fa";
import { CircleIconFa } from "../CircleIcon/CircleIcon";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className="contact__container">
          <TitleSection title="Contact" subtitle="Contact me now! 👇" />
          <div className="contact__icons">
            <ul>
              <li>
                <CircleIconFa Image={FaMap} />
                <div className="contact__info">
                  <strong>Location</strong>
                  <p>Tacna, Perú</p>
                </div>
              </li>
              <li>
                <CircleIconFa Image={FaEnvelopeOpenText} />
                <div className="contact__info">
                  <strong>Mail</strong>
                  <p>carloshuichi@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
