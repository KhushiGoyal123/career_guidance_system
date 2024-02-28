import { Analytics } from "../components/Analytics"
import {NavLink} from "react-router-dom"

export const Home = () => {
    return <>

        <section>
        <main>
                <section className="home-section">
                    <div className="container grid grid-two-cols">
                        <div className="home-content">
                            <p>Hii, User!!</p>
                            <h2>Welcome to CareerGuru </h2>
                            <p>Unlock Your Potential, Navigate Your Career Journey. 
                                Discover the Path to Success with Our Expert Career Guidance.</p>
                            <button className="common-btn home-btn">Explore More!</button>
                            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>

                            <div className="social-icons">
                                <a href="#"><i class='bx bxl-instagram'></i></a>
                                <a href="#"><i class='bx bxl-facebook'></i></a>
                                <a href="#"><i class='bx bxl-twitter'></i></a>
                                <a href="#"><i class='bx bxl-github'></i></a>
                            </div>
                        </div>
                        <div className="home-img about-img">
                            <img src="./images/virtual__.webp" alt="home-image" height="500" width="500" />
                        </div>
                    </div>
                </section>
        </main>
        </section>

        {/* 2nd section */}
        {/* <Analytics /> */}

        {/* 3rd section  */}
        {/* <section>
        
            <div className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-image">
                        <img src="./images/register.png" alt="coding together"
                            width="500" height="500"
                        />
                    </div>
                    <div className="hero-content">
                        <p>Welcome</p>
                        <h1>Welcome to my channel</h1>
                        <p>dksjdjakmlhcdxkzc dxmklz cmkzcdjkszxjchdbxjzkxc nkc xzjkasdsjxzkmldcjxnzkmdksjdjakmlhcdxkzc dxmklz cmkzcdjkszxjchdbxjzkxc nkc xzjkasdsjxzkmldcjxnzkmdksjdjakmlhcdxkzc dxmklz cmkzcdjkszxjchdbxjzkxc nkc xzjkasdsjxzkmldcjxnzkm</p>

                        <div className="btn btn-group">
                            <NavLink to="/contact">
                                <button className="btn">Connect Now</button>
                            </NavLink>
                            <NavLink to="/services">
                                <button className="btn">Learn more</button>
                            </NavLink>
                            
                        </div>
                    </div>
                    
                </div>

            </div>
        
        </section> */}
    </>
}