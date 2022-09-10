import React from "react";
import { Link, Outlet } from 'react-router-dom';


export default class Auth extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {

        return (
            <div className="container my-4 p-8 rounded-lg shadow-lg mx-auto w-2/4 grid lg:grid-cols-2 sm:grid-cols-1 content-around  ">
                <div className=" relative"><img className="max-w-full h-auto rounded-lg"
                    src="https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVnYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="new" ></img>

                    <h2 className="absolute left-4 top-6 text-white font-medium text-2xl">Login or Sign-up</h2>
                    <p className="absolute left-4 top-14 text-white ">Connect with friends ,grow your business and more</p>
                </div>

                <div className="flex flex-col justify-center items-center gap-6">



                    <Outlet>


                    </Outlet>
                </div>
            </div >
        )
    }

} 