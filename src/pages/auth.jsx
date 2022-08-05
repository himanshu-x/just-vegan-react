import React from "react";
import { Link } from 'react-router-dom';
// import Login from "./login";
// import SignUp from "./sign-up";
// import background from "../images/vegan-food.jpg";

export default class Auth extends React.Component {

    constructor(props) {
        super(props)

        this.state = {




        }
    }




    render() {

        return (
            <div className="container my-4 p-8 rounded-lg shadow-lg mx-auto w-2/4 flex content-around  ">
                <div className=" basis-1/2  relative"><img className="max-w-full h-auto rounded-lg"
                    src="https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVnYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="new" ></img>

                    <h2 className="absolute left-4 top-6 text-white font-medium text-2xl">Login or Sign-up</h2>
                    <p className="absolute left-4 top-14 text-white ">Connect with friends ,grow your business and more</p>
                </div>

                <div className="flex flex-col justify-center items-center basis-1/2 gap-6">

                    <div>
                        <Link to='/auth/login'><button type="button" className="inline-block px-12 py-5 bg-teal-600 text-white font-medium text-xl 
                    leading-tight uppercase rounded-lg shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg 
                    focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out">Login</button></Link>
                    </div>
                    <div>
                        <p className=" font-medium text-xl">Or</p>
                    </div>

                    <div>

                        <Link to="/auth/sign-up"><button type="button" className="inline-block px-10 py-5 bg-teal-600 text-white font-medium text-xl 
                    leading-tight uppercase rounded-lg shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg 
                    focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">Sign-Up</button></Link>

                    </div>

                </div>
            </div >
        )
    }

} 