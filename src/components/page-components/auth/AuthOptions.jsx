import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function AuthOptions() {

    return (
        <Fragment>
            < div >
                <Link to='/auth/login'><button type="button" className="inline-block px-12 py-5 bg-teal-600 text-white font-medium text-xl 
    leading-tight uppercase rounded-lg shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg 
    focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out">Login</button></Link>
            </div >
            <div>
                <p className=" font-medium text-xl">Or</p>
            </div>

            <div>

                <Link to="/auth/sign-up"><button type="button" className="inline-block px-10 py-5 bg-teal-600 text-white font-medium text-xl 
    leading-tight uppercase rounded-lg shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg 
    focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">Sign-Up</button></Link>

            </div>
        </Fragment>
    )
}