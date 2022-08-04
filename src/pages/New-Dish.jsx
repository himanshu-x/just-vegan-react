import React from "react";
import { Link } from "react-router-dom";
import dishService from '../services/dishService'


export default class NewDish extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            headerText: 'New Dish',
            dishModel: {
                dishName: '',
                price: null,
                dishCategory: null,
                imgUrl: '',
                description: "",
                isVaccumSealed: false,
                isPreservativeFree: false,
                isQualityChecks: false,
                energy: null,
                fat: null,
                carbs: null,
                protien: null,
                fiber: null,
            },
        }
    }

    onInputChange = (event) => {
        const { value: newValue, name: fieldName } = event.target
        const { dishModel } = this.state;
        let formatttedValue = '';

        if (fieldName === 'price' || fieldName === 'energy' || fieldName === 'fat' || fieldName === 'protien' || fieldName === 'fiber' || fieldName === 'carbs') {
            formatttedValue = parseFloat(newValue)
        }

        this.setState({
            dishModel: {
                ...dishModel,
                [fieldName]: formatttedValue ? formatttedValue : newValue
            }
        })
    }

    handleChange = (e) => {
        const { name: fieldName, } = e.target;
        const { value, checked } = e.target;
        const { dishModel } = this.state;
        if (checked) {
            this.setState({
                dishModel: {
                    ...dishModel,
                    [fieldName]: value,
                }

            })
        }
        else {
            this.setState({
                dishModel: {
                    ...dishModel,
                    [fieldName]: !value,
                }
            })
        };
    }
    handleSubmit = (event) => {
        event.preventDefault();

        const { dishModel } = this.state;

        dishService.createNewDish(dishModel).then((createResult) => {
            console.log(createResult)
            if (createResult && createResult._id) {
                // route the user to dish details page.

                alert('New dish with dish id ${createResult._id} has been created.')

            }

        })

        // fetch('http://cf8a-2405-201-401a-dd3e-4d2d-28b9-2bc3-722f.ngrok.io/dishes', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(dishModel),
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log('Success:', data);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });

    }

    render() {
        const { headerText } = this.state;
        return (

            <div className="container my-4 p-8 rounded-lg shadow-lg mx-auto w-2/4">
                <p className="font-medium leading-tight text-4xl mt-0 mb-2 text-slate-600 ">{headerText}</p>
                <form className="m-4" onSubmit={this.handleSubmit}>
                    <div className="form-group mb-6">
                        <div className="flex flex-col gap-2">

                            <label htmlFor="dishName" className="text-sm text-slate-600">Dish Name*</label>

                            <input type="text" className="form-control block border w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
          rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="dishName" name="dishName"
                                placeholder="Dish Name" onInput={this.onInputChange} />
                        </div>

                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="dishPrice" className="text-sm text-gray-500">Dish Price*</label>
                        <input type="text" className="form-control block border w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
        rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="dishPrice" name="price"
                            placeholder="Price" onInput={this.onInputChange} />
                    </div>

                    <div>
                        <label
                            htmlFor="dishCategory"
                            className="form-label inline-block mb-2 text-slate-600 text-sm"
                        >Dish Category*</label>
                        <select id="dishCategory" name="dishCategory" className="form-select form-select-sm appearance-none
                         block w-full px-2 py-1 text-sm font-normal text-gray-700    bg-white bg-clip-padding bg-no-repeat rounded    transition    ease-in-out    m-0
   border focus:text-gray-700 focus:bg-white focus:outline-none" aria-label=".form-select-sm example"
                            onInput={this.onInputChange} >
                            <option selected>Choose Your Option</option>
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="snacks">Snacks</option>
                            <option value="dinner">Dinner</option>
                        </select>
                    </div>

                    <div className="mt-6 flex flex-col gap-3">
                        <p className="font-medium leading-tight text-2xl mt-0 mb-2 text-slate-600"> Quality Checks*</p>
                        <div className="form-check">
                            <input onChange={this.handleChange} name="isVaccumSealed" value="true"
                                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600
                                 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="checkbox"
                                id="vaccumSealed" />
                            <label className="form-check-label inline-block text-gray-400" htmlFor="vaccumSealed">
                                Vaccum Sealed
                            </label>
                        </div>
                        <div className="form-check">
                            <input onChange={this.handleChange} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 
                            focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="checkbox" value="true" id="preservative" name="isPreservativeFree" />
                            <label className="form-check-label inline-block text-gray-400" htmlFor="preservative">
                                PreservativeFree
                            </label>
                        </div>
                        <div className="form-check">
                            <input onChange={this.handleChange} className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600
                             focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                type="checkbox" value='true' id="certified" name="isQualityChecks" />
                            <label className="form-check-label inline-block text-gray-400" htmlFor="certified">
                                Certified
                            </label>
                        </div>
                    </div>

                    <div className="mt-6 ">
                        <p className="font-medium leading-tight text-2xl mt-0 mb-2 text-slate-600">Nutrition</p>

                        <div className="grid grid-cols-4 gap-5">

                            <input type="number" onInput={this.onInputChange} name="energy" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
         border rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white  focus:outline-none" id="energy"
                                placeholder="Energy" />
                            <input type="number" onInput={this.onInputChange} name="fat" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
         border rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white  focus:outline-none" id="fat"
                                placeholder="Fat" />
                            <input type="number" onInput={this.onInputChange} name="carbs" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
         border rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="carbs"
                                placeholder="Carbs" />
                            <input type="number" onInput={this.onInputChange} name="fiber" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
         border rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="fiber"
                                placeholder="Fiber" />
                            <input type="number" onInput={this.onInputChange} name="protien" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
         border rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="protien"
                                placeholder="Protien" />

                        </div>
                    </div>
                    <div className="mt-8 flex flex-col gap-5">
                        <p className="font-medium leading-tight text-2xl mt-0 mb-2 text-slate-600">More info</p>
                        <div className=" flex  flex-col gap-2">
                            <label
                                htmlFor="description"
                                className="form-label inline-block  text-gray-400 text-sm"
                            >Description</label>
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
         border rounded transition ease-in-out  m-0 focus:text-gray-700
          focus:bg-white focus:border-blue-600 focus:outline-none" id="description" name="description"
                                placeholder="Description" onInput={this.onInputChange} />

                            <div className="flex flex-col gap-2">
                                <label htmlFor="imgUrl" className="text-sm text-gray-400">Image Url*</label>
                                <input type="text" id="imgUrl" name="imgUrl" className="form-control block border w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
          rounded transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  placeholder="imgUrl" onInput={this.onInputChange} />
                            </div>
                        </div>

                    </div>
                    <div className="mt-6">

                        <button type="submit" className="inline-block px-6 py-2.5 bg-teal-600 text-white font-medium text-xs 
                    leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg 
                    focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">Submit</button>

                    </div>

                </form>

            </div>

        )
    }
}
