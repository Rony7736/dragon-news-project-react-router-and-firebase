import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

    const {createNewUser, setUser} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        // get form data
        // const name = e.target.name.value
        // const photo = e.target.photo.value
        // const email = e.target.email.value
        // const password = e.target.password.value

        // console.log(name, photo, email, password);

        // same jinis build in method a kora jay -->
    

        const  form = new FormData(e.target)

        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        // console.log({name, photo, email, password});


        createNewUser(email, password)
        .then(result => {
            const user = result.user
            setUser(user)
            console.log(user)            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            
          });
        
    }


    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center pt-5">Register to your Account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="photo url" name="photo" className="input input-bordered" required />
                    </div>
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
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Register</button>
                    </div>
                </form>
                <p className="text-center font-semibold">Have An Account ? Please <Link to="/auth/login" className="underline text-red-500">Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;