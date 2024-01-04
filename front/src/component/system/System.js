import React, { useEffect, useState } from "react";
import "./sys.css";
import "../who/are.css";
import sanity from "../Sanity/sanity";
import { PortableText } from "@portabletext/react";
import Headershop from "../headershop/Headershop";

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
        systtitle,
        sysbody,
        systitle2,
        sysimage1{
            asset->{
                _id,
                url
            }
        },
        sysimage2{
                asset->{
                    _id,
                    url
                }
        },
        systitle3,
        sysbody2,
        sysimage4{
                asset->{
                    _id,
                    url
                }
        },
        sysimage5{
                asset->{_id,url}
        }
        ,
        apply,
        sysimage6{
            asset->{
                _id,
                url
            }
        },
        systitle4,
        sysbody3,
        sysimage7{
            asset->{
                _id,
                url
            }
        }, sysimage8{
            asset->{
                _id,
                url
            }
        }, sysimage9{
            asset->{
                _id,
                url
            }
        },


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
            src={sys?.videoFile?.asset?.url}
            autoPlay
          ></video>

          <h2 className="system_title">{sys?.systtitle}</h2>

          <p className="detail_para u">
            <PortableText value={sys?.sysbody} />
          </p>

          <h2 className="system_title w">{sys?.systitle2}</h2>

          <div className="are_grid">
            <div className="are_sub">
              <img className="bus" src={sys?.sysimage1?.asset?.url} alt="" />
            </div>

            <div className="are_sub">
              <img className="dus" src={sys?.sysimage2?.asset?.url} alt="" />
            </div>

            <div className="are_sub">
              <div className="are_detail">
                <h2 className="detail_title">{sys?.systitle3}</h2>
                <p className="detail_para">
                  <PortableText value={sys?.sysbody2} />
                </p>
              </div>
            </div>

            <div className="are_sub">
              <img className="dus" src={sys?.sysimage4?.asset?.url} alt="" />
            </div>
          </div>

          <div className="second_image">
            <img className="triple" src={sys?.sysimage5?.asset?.url} alt="" />
          </div>

          <h2 className="apply">{sys?.apply}</h2>

          <div className="are_grid">
            <div className="are_sub">
              <img className="bus" src={sys?.sysimage6?.asset?.url} alt="" />
            </div>

            <div className="are_sub"></div>

            <div className="are_sub">
              <div className="are_detail">
                <h2 className="detail_title">{sys?.systitle4}</h2>
                <p className="detail_para">
                  <PortableText value={sys?.sysbody3} />
                </p>
              </div>
            </div>

            <div className="are_sub">
              <img className="dus" src={sys?.sysimage7?.asset?.url} alt="" />
            </div>

            <div className="are_sub">
              <img className="dus" src={sys?.sysimage8?.asset?.url} alt="" />
            </div>

            <div className="are_sub"></div>

            <div className="are_sub"></div>

            <div className="are_sub">
              <img className="dus" src={sys?.sysimage9?.asset?.url} alt="" />
            </div>
          </div>
          <Headershop />
        </div>
      ))}
    </div>
  );
};

export default System;
