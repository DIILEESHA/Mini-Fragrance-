import { lazy, useEffect } from "react";
import "./are.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const ParticleComponent = lazy(() => import("../particle/ParticleComponent"));

gsap.registerPlugin(ScrollTrigger);

const weAre = () => {
  const showParticles = true;

  return (
    <div className="are_container">
      <ParticleComponent isVisible={showParticles} />
      <div className="are_grid">
        <div className="are_sub">
          <div className="are_detail">
            <h2 className="detail_title">WHO WE ARE</h2>
            <p className="detail_para">
              Nullpunkt is a subtle and sophisticated support system to achieve
              a balanced state of mind. We combine the charm of exquisite
              fragrances with the benefits of aromatherapy. Each of our four
              grades comes with a captivating scent to create instant moments of
              clarity.
              <br />
              <br />
              We use only 100% natural, high-quality ingredients, each of which
              has its own history and character and contributes to the
              effectiveness in a unique way.
              <br />
              <br />
              We believe in a more mindful society. We believe that our
              collective well­being is built on the peace of mind of each
              individual. And that great achievements come from the balance of
              body and mind.
            </p>

            <h3 className="detail_bottom_detail">
              <div className="arrower" />
              Learn more about us
            </h3>
          </div>
        </div>
        <div className="are_sub mer">
          <img
            className="bus mg"
            src="https://nullpunkt.co/cdn/shop/files/01_Stills_110.jpg?v=1669921261"
            loading="lazy"
            alt=""
          />
        </div>
        <div className="are_sub mer">
          <img
            className="dus fg"
            src="https://nullpunkt.co/cdn/shop/files/04_Couple_64.jpg?v=1671625376&width=1500"
            loading="lazy"
            alt=""
          />
        </div>
        <div className="are_sub">
          <div className="are_detail">
            <h2 className="detail_title">what we do</h2>
            <p className="detail_para">
              Our Functional Fragrance system consists of four unisex roll-ons
              with two blends specifically designed to calm and ground the mind
              and uplift and energize the mood.
              <br />
              <br />
              Fragrance follows function: We are a functional tool. Our highest
              priority is the intended positive impact on our customers’ mind.
              Our composed scents help to turn this routine into an olfactory
              sensation.
              <br />
              <br />
              Each fragrance is specifically formulated to balance the most
              common symptoms society experiences: anxiety, stress, distraction,
              and fatigue. All of them are formulated to provide you with the
              feeling of inner balance.
              <br />
              <br />
              With experts in Grasse, the birth place of fragrance sensations,
              an olfactory lab in Berlin and a creative studio in Hamburg, we
              had the perfect soil to bring a new generation of aromachology
              products to life.
            </p>
            <h3 className="detail_bottom_detail">
              <div className="arrower" />
              Learn more about our system
            </h3>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: "40px" }}></div>
      <div className="second_image">
        <img
          className="triple"
          src="https://nullpunkt.co/cdn/shop/files/04_Couple_157-2.jpg?v=1669923474&width=1500"
          loading="lazy"
          alt=""
        />
      </div>
    </div>
  );
};

export default weAre;
