import { useAuth } from "../store/auth"

export const Service = () => {
    const { services } = useAuth();

    return (
        <main>
            <section className="portfolio-section">
                <div className="grid grid-three-cols">
                    <div className="service-card-container">
                        <div className="service-card">
                            <div className="service-card-front service-card-face">
                                <h1 className="degree-heading">Bachelor of Technology (B.Tech)</h1>
                            </div>
                            <div className="service-card-back service-card-face">
                                <div className="back-btn">
                                    <button className="service-btn"><a href="../images/Roadmaps/CSE.png">Computer Science</a></button>
                                    <button className="service-btn"><a href="../images/Roadmaps/CSE.png">Information Technology</a></button>
                                    <button className="service-btn"><a href="../images/Roadmaps/CSE.png">Electrical</a></button>
                                    <button className="service-btn"><a href="../images/Roadmaps/CSE.png">Electronics & Communication</a></button>
                                    <button className="service-btn"><a href="../images/Roadmaps/CSE.png">Mechanical</a></button>
                                    <button className="service-btn"><a href="../images/Roadmaps/CSE.png">Civil</a></button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-card-container">
                        <div className="service-card">
                            <div className="service-card-front service-card-face">
                                <h1 className="degree-heading">Master of Technology (M.Tech)</h1>
                            </div>
                            <div className="service-card-back service-card-face">CSE</div>
                        </div>
                    </div>
                    <div className="service-card-container">
                        <div className="service-card">
                            <div className="service-card-front service-card-face">
                                <h1 className="degree-heading">Bachelor in Computer Applications (BCA)</h1>
                            </div>
                            <div className="service-card-back service-card-face">CSE</div>
                        </div>
                    </div>
                    <div className="service-card-container">
                        <div className="service-card">
                            <div className="service-card-front service-card-face">
                                <h1 className="degree-heading">Bachelor in Computer Applications (BCA)</h1>
                            </div>
                            <div className="service-card-back service-card-face">CSE</div>
                        </div>
                    </div>
                    <div className="service-card-container">
                        <div className="service-card">
                            <div className="service-card-front service-card-face">
                                <h1 className="degree-heading">Bachelor in Computer Applications (BCA)</h1>
                            </div>
                            <div className="service-card-back service-card-face">CSE</div>
                        </div>
                    </div>
                    <div className="service-card-container">
                        <div className="service-card">
                            <div className="service-card-front service-card-face">
                                <h1 className="degree-heading">Bachelor in Computer Applications (BCA)</h1>
                            </div>
                            <div className="service-card-back service-card-face">CSE</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}