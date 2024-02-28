import { NavLink } from "react-router-dom"

export const Error = ()=>{
    return <>
        <section id="error-page">
            <div className="content">
                <h2 className="header">404</h2>
                <h4>Sorry! page not found</h4>
                <p>
                    oops!  oops!  oops!  oops!  oops!  oops!  oops!  oops!  oops!  oops! 
                </p>
                <div className="btns">
                    <NavLink to="/">Return Home</NavLink>
                    <NavLink to="/contact">Report Problem</NavLink>
                </div>
                
            </div>
        </section>
    </>
}