import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondary text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>
          <p className="pb-5">
          I'm baby farm-to-table plaid wayfarers, bodega boys +1 tilde squid. Viral la croix fashion axe roof party. Hoodie air plant next level, yes plz gastropub gorpcore keffiyeh blackbird spyplane cray DIY. 
          </p>
          <p className="pb-5">
           Hoodie air plant next level, yes plz gastropub gorpcore keffiyeh blackbird spyplane cray DIY. 
          </p>
          <p>React Java CSS TS</p>
          <p>
          I'm baby farm-to-table plaid wayfarers, bodega boys +1 tilde squid. Viral la croix fashion axe roof party. Hoodie air plant next level, yes plz gastropub gorpcore keffiyeh blackbird spyplane cray DIY. 
          </p>
        </div>

        <div className="about-img">
          <img src={AboutImg} alt="coding illustration" className="lgw-[80%] md:ml-auto"/>
        </div>
      </div>
    </section>
  );
};

export default About;