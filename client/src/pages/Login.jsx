import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
const URL = "http://localhost:5000/api/auth/login";
export const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);

        // connecting backend
        try {
            const response = await fetch(URL,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                });
            console.log(response);
            if (response.ok) {
                const res_data = await response.json();
                storeTokenInLS(res_data.token);
                alert("Login Successful");
                setUser({ email: "", password: "" });
                navigate("/");
            } else {
                alert("Invalid Credentials");
            }

        } catch (error) {
            console.log(error);
        }


    }

    return <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="login-image">
                            <img src="./images/login.png" alt="lets login" width="450" height="400" />
                        </div>
                        <div className="section-form">
                            <h1 className="main-heading">Login Form</h1>
                            <br />
                            <form onSubmit={handleSubmit}>
                                <br />
                                <br />
                                <div>
                                    <label htmlFor="email">Email  </label>
                                    <br />
                                    <input
                                        type="email" name="email" id="email" required autoComplete="off" value={user.email} onChange={handleInput}
                                    />
                                </div>
                                <br />
                                <br />
                                <div>
                                    <label htmlFor="password">Password  </label>
                                    <br />
                                    <input
                                        type="password" name="password" id="password" required autoComplete="off" value={user.password} onChange={handleInput}
                                    />
                                </div>
                                <br />
                                <br />
                                <button type="submit">Login Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    </>
}