import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";


const SignUp = () => {

    const { createUser, updateUsersProfile } = useContext(AuthContext)

    const handleSignUp = (event: Record<string, any>) => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
        .then((result: Record<string, any>) => {
            const registeredUser = result.user
            updateUsersProfile(registeredUser, name)
            .then(() => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  })
            })
            .catch((error: Record<string, any>) => {
                console.log(error)
            })
        })
        .catch((error: Record<string, any>) => {
            console.log(error)
        })
    }

    return (
        <div className="px-5 mt-5">
            <form onSubmit={handleSignUp}>
                <div className="mb-3">
                    <label htmlFor="exampleInputName1" className="form-label">Name</label>
                    <input type="name" name="name" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Your Password" />
                    <Link className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" to='/login'>Already have an account?</Link>
                </div>
                <input className="btn btn-primary" type="submit" value="Sign Up" />
            </form>
        </div>
    );
};

export default SignUp;