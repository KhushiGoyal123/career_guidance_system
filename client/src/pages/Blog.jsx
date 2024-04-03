import { useAuth } from "../store/auth"

export const Blog = () => {
    const { services } = useAuth();

    return (
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading">Articles that can help.....</h1>
            </div>

            <div className="container grid grid-three-cols">

                {
                    services.map((curElem, index) => {
                        const { title, description, url, img_url } = curElem;

                        return (
<>
                            <div className="box" key={index}>
                                <a href={url}>
                                <div className="card">
                                    <div className="imgBx">
                                        {/* <img src="./images/register.png" alt="our service image" height="300" width="300" /> */}
                                        <img src={img_url} alt="our service image" />
                                    </div>
                                        <div className="details">
                                            <h3>{title}</h3>
                                            <br />
                                            <p>{description}</p>
                                        </div>
                                </div>
                                    </a>
                            
                            </div>
                            {/* <div className="details">
                                        <div className="grid grid-two-cols">
                                            <a href={url}> LINK</a>
                                            {/* <p>{price}</p> 
                                        </div>
                                        <h2>{title}</h2>
                                        <p>{description}</p> 
                            </div> */}
                            </>
                        );
                    })}
            </div>
        </section>
    )
}