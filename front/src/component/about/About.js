import React, { useEffect, useState } from "react";
import "./bout.css";
import "../who/are.css";
import ParticleComponent from "../particle/ParticleComponent";
import sanity from "../Sanity/sanity";
import { PortableText } from "@portabletext/react";
import { BlockContent } from "@sanity/block-content-to-react";
import Headershop from "../headershop/Headershop";

const About = ({ isScrolled }) => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const aboutQuery = `*[_type == "about"]
    {
      title,
      mainimage{
        asset->{
          _id,
          url
        }
      },
      abouttitle,
      body1,
      abouttitle2,
      body2,
      mainimage2{
        asset->{
          _id,
          url
        }
      },

      mainimage3{
        asset->{
          _id,
          url
        }
      },
      body
      
    }`;

        const res = await sanity.fetch(aboutQuery);

        setAbout(res);
        console.log(res);
      } catch (error) {
        console.log("fetching data error", error);
      }
    };
    fetchAbout();
  }, []);

  return (
    <div className="are_container about">
      {about.map((about, index) => (
        <div key={index}>
          <div className="are_grid">
            <div className="are_sub">
              <img className="bus" src={about?.mainimage?.asset?.url} alt="" />
            </div>

            <div className="are_sub">
              <div className="are_detail">
                <h2 className="detail_title">{about?.abouttitle}</h2>
                <p className="detail_para">
                  <PortableText value={about?.body1} />
                </p>
              </div>
            </div>

            <div className="are_sub">
              <div className="are_detail">
                <h2 className="detail_title">{about?.abouttitle2}</h2>
                <p className="detail_para">
                  <PortableText value={about?.body2} />
                </p>
              </div>
            </div>
            <div className="are_sub">
              <img className="dus" src={about?.mainimage2?.asset?.url} alt="" />
            </div>
          </div>

          <div className="second_image">
            <img
              className="triple"
              src={about?.mainimage3?.asset?.url}
              alt=""
            />
            <p className="detail_para">
              <PortableText value={about?.body} />
            </p>
          </div>
          <Headershop />
        </div>
      ))}
    </div>
  );
};

export default About;
