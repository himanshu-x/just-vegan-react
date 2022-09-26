import React from "react";
import BaseButton from "../components/base-components/base-button/BaseButton";
import signUpService from '../services/signUpService'

class signUp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            signUpModel: {
                name: "",
                emailId: "",
                phone: "",
                password: "",
            }


        }
    }

    onInputChange = (event) => {
        const { signUpModel } = this.state;
        const { name, value } = event.target;
        signUpModel[name] = value
        this.setState({
            signUpModel: signUpModel
        })

    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { signUpModel } = this.state;

        signUpService.newAccountService(signUpModel).then((data) => {
            console.log(data)
        })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    render() {

        return (
            <div className="  p-8 rounded-lg shadow-md " >
                <form className="flex flex-col gap-4 items-center  " onSubmit={this.handleSubmit}>
                    <div className="flex flex-col gap-2 w-72">
                        <label htmlFor="email" className="text-sm text-slate-600">Email*</label>
                        <input type="email" className="form-control block border w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="email" name="emailId"
                            placeholder="Email" onInput={this.onInputChange} required />
                    </div> <div className="flex flex-col gap-2 w-72">
                        <label htmlFor="name" className="text-sm text-slate-600"> Name*</label>
                        <input type="text" className="form-control block border w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="name" name="name"
                            placeholder=" Name" onInput={this.onInputChange} required />
                    </div> <div className="flex flex-col gap-2 w-72">
                        <label htmlFor="phone" className="text-sm text-slate-600">Phone*</label>
                        <input type="text" className="form-control block border w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="phone" name="phone"
                            placeholder="Phone" onInput={this.onInputChange} required />
                    </div> <div className="flex flex-col gap-2 w-72">
                        <label htmlFor="password" className="text-sm text-slate-600">Password*</label>
                        <input type="password" className="form-control block border w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="password" name="password"
                            placeholder="Password" onInput={this.onInputChange} required />
                    </div>
                    <BaseButton type="submit" variant="secondary">
                        Sign-up
                    </BaseButton>
                </form>
            </div >
        )
    }

}
export default signUp


