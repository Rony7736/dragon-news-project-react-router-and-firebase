import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)
    // console.log(user);
    
    return (
        <div className="flex justify-between items-center">

            <div className="">{user && user.email}</div>

            <div className="nav space-x-5">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/career">Career</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>

            <div className="login flex items-center gap-3">
                <div>
                    {/* update profile er jonno */}

                    {
                        user && user?.email ? <div>
                            <img className="rounded-full w-10 object-cover" src={user?.photoURL} alt="" />

                            <p>{user?.displayName}</p>
                        </div> : <img src={userIcon} alt=""/>
                    }

                    {/* <img src={userIcon} alt="" /> */}
                </div>
                {
                    user && user?.email ? 
                    <button onClick={logOut} className="btn btn-neutral rounded-none">Logout</button> 
                    : 
                    <Link to='/auth/login' className="btn btn-neutral rounded-none">Login</Link>
                }
                
            </div>

        </div>
    );
};

export default Navbar;