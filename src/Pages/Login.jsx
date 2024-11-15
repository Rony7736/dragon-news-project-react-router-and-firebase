import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

    const {loginUser, setUser} = useContext(AuthContext)

    // error validation
    const [error, setError] = useState({})

    // login korar pore onno page a niye jaoar jonno --> 2nd step
    const location = useLocation()
    const navigate = useNavigate()

    const handleSubmit = (e)=> {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        // console.log({email, password});
        
        loginUser(email, password)
        .then(result => {
            const user = result.user
            setUser(user)
            navigate(location?.state ? location.state : "/") 
        })
        .catch((err) => {
            setError({...error, login: err.code})
          });
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center pt-5">Login to your Account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />

                        {
                            error.login && (
                            <label className="label text-sm text-red-600">
                                {error.login}
                                {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                            </label>
                            )
                        }

                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Login</button>
                    </div>
                </form>
                <p className="text-center font-semibold">Dont't Have An Account ? <Link to="/auth/register" className="underline text-red-500">Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;