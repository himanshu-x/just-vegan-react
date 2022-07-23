import React from "react";
import { Link } from "react-router-dom";


export default class newDish extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            headerText: 'New Dish',

        }
    }

    render() {
        const { headerText } = this.state;
        return (

            <div className="container p-8  rounded-none mx-auto w-3/4">
                <p className="font-medium leading-tight text-4xl mt-0 mb-2 text-slate-600 ">{headerText}</p>
                <form className="m-4">
                    <div className="form-group mb-6">
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
         border-b-2 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="exampleInput90"
                            placeholder="Name" />
                    </div>
                    <div className="form-group mb-6">
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
       border-b-2 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="exampleInput90"
                            placeholder="Price" />
                    </div>

                    <div>
                        <label
                            for="exampleFormControlInput4"
                            className="form-label inline-block mb-2 text-gray-400 text-sm"
                        >Dish Category</label>
                        <select className="form-select form-select-sm  appearance-none   border-b-2  block   w-full    px-2    py-1  text-sm    font-normal    text-gray-700    bg-white bg-clip-padding bg-no-repeat rounded    transition    ease-in-out    m-0
    focus:text-gray-700 focus:bg-white focus:outline-none" aria-label=".form-select-sm example">
                            <option selected>Choose Your Option</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className="mt-6 flex flex-col gap-3">
                        <p className="font-medium leading-tight text-2xl mt-0 mb-2 text-slate-600"> Quality Checks</p>
                        <div className="form-check">
                            <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600
                                 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label inline-block text-gray-400" for="flexCheckDefault">
                                Vaccum Sealed
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="checkbox" value="" id="flexCheckChecked" />
                            <label className="form-check-label inline-block text-gray-400" for="flexCheckChecked">
                                Preservative
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="checkbox" value="" id="flexCheckChecked" />
                            <label className="form-check-label inline-block text-gray-400" for="flexCheckChecked">
                                Certified
                            </label>
                        </div>
                    </div>

                    <div className="mt-6">
                        <p className="font-medium leading-tight text-2xl mt-0 mb-2 text-slate-600">Nutrition</p>

                        <div className="flex gap-5">
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
         border-b-2 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white  focus:outline-none" id="exampleInput90"
                                placeholder="Energy" />
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
         border-b-2 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white  focus:outline-none" id="exampleInput90"
                                placeholder="Fat" />
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
         border-b-2 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="exampleInput90"
                                placeholder="Carbs" />
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
         border-b-2 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="exampleInput90"
                                placeholder="Fiber" />
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
         border-b-2 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="exampleInput90"
                                placeholder="Protien" />

                        </div>
                    </div>
                    <div className="mt-8 flex flex-col gap-5">
                        <p className="font-medium leading-tight text-2xl mt-0 mb-2 text-slate-600">More info</p>
                        <div className=" flex  flex-col gap-7">
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
         border-b-2 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput90"
                                placeholder="Description" />
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
         border-b-2 rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput90"
                                placeholder="imgUrl" />
                        </div>

                    </div>
                    <div className="mt-6">

                        <button type="button" class="inline-block px-6 py-2.5 bg-teal-600 text-white font-medium text-xs 
                    leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg 
                    focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">Submit</button>

                    </div>

                </form>

            </div>

        )
    }
}