import React from "react";


class Login extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

            loginDetailsModel: {
                email: "",
                password: "",
            }

        }
    }


    onInputChange = (event) => {
        const { loginDetailsModel } = this.state;
        const { value, name } = event.target
        loginDetailsModel[name] = value;
        this.setState({

            loginDetailsModel: loginDetailsModel

        })
    }




    // handleSubmit = (event) => {
    //     event.preventDefault();


    // }



    render() {
        return (

            <div className="container my-4 p-8 rounded-lg shadow-lg mx-auto flex w-1/2  gap-4   ">
                <div className=" basis-1/2  relative"><img className=" rounded-lg "
                    src="https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVnYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="new" ></img>

                    <h2 className="absolute left-4 top-6 text-white font-medium text-2xl">Login</h2>
                    <p className="absolute left-4 top-14 text-white ">Connect with friends ,grow your business and more</p>
                </div>
                <form className="flex flex-col gap-6 justify-start items-center pt-10 basis-1/2 " onSubmit={this.handleSubmit}>
                    <div className="flex flex-col gap-2 w-72">

                        <label htmlFor="email" className="text-sm text-slate-600">Email*</label>

                        <input type="email" className="form-control block border w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="email" name="email"
                            placeholder="Email" onInput={this.onInputChange} />
                    </div>
                    <div className="flex flex-col gap-2 w-72">

                        <label htmlFor="password" className="text-sm text-slate-600">Password*</label>

                        <input type="password" className="form-control block border w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="password" name="password"
                            placeholder="Password" onInput={this.onInputChange} />
                    </div>

                    <button type="submit" className=" px-6 py-2.5 bg-teal-600 text-white font-medium text-xs 
                    leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg 
                    focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">Login</button>



                </form>
            </div>

        )
    }

}

export default Login