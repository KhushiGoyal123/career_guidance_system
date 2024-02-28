import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics";
import {useAuth} from "../store/auth";

export const About = () => {

  const {user} = useAuth();

  return (
    <>
      <section>
        <main>
          <div className="section-hero about-section">
            <div className="container grid grid-two-cols">
              <div className="hero-content">

                <p>Welcome,{user ? user.username : "User"}</p>
                <h1>Why choose us?</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni repellat quaerat deserunt impedit cumque itaque excepturi hic placeat necessitatibus explicabo.
                </p>
                
                <div className="nav-btn-group about-btns">
                  <NavLink to="/contact">
                    <button className="common-btn ">Assistance</button>
                  </NavLink>
                  <NavLink to="/">
                    <button className="common-btn">Counselling</button>
                  </NavLink>
                  <NavLink to="/">
                    <button className="common-btn">Roadmaps</button>
                  </NavLink>
                </div>
              </div>
              <div className="hero-image about-img">
                <img
                  src="./images/virtual__.webp"
                  alt="coding together"
                  width="500"
                  height="500"
                />
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* 2nd section */}
      <Analytics />
    </>
  );
};
