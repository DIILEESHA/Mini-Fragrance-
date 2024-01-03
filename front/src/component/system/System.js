import React, { useEffect, useState } from "react";
import "./sys.css";
import About from "../about/About";
import sanity from "../Sanity/sanity";

const System = () => {
  const [system, setSystem] = useState([]);

  useEffect(() => {
    const fetchSystem = async () => {
      try {
        const fetchQuery = `*[_type == "system"]{

        videoFile{
            asset->{
                _id,
                url
            },
        },
        systtitle

    }`;

        const res = await sanity.fetch(fetchQuery);
        setSystem(res);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSystem();
  }, []);

  return (
    <div className="sys_container">
      {system.map((sys, index) => (
        <div key={index}>
          <video
            style={{ width: "100%", height: "auto" }}
            src={sys.videoFile?.asset.url}
            autoPlay
          ></video>

          <h2
            className="system_title"
            style={{ border: "1px solid #333", color: "#000" }}
          >
            {sys?.systtitle}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default System;
