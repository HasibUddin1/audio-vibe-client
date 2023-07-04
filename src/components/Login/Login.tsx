import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "../../providers/AuthProviders";


const Login = () => {

    const { signIn } = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="px-5 mt-5">
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Your Password" />
                    <Link className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" to='/signUp'>New to this site?</Link>
                </div>
                <input className="btn btn-primary" type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;