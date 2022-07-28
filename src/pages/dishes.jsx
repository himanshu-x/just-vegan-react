import React from "react";
import { Link } from "react-router-dom";
import DishCard from "../components/page-components/DishCard";
import Counter from "../components/page-components/Counter";

export default class Dishes extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            dishList: [],
            quantity: {

            },

        }
    }


    getDishes() {

        fetch('http://cf8a-2405-201-401a-dd3e-4d2d-28b9-2bc3-722f.ngrok.io/dishes')
            .then(res => res.json())
            .then((response) => {
                // console.log(response)
                this.setState({
                    dishList: response.payload

                })
            }, (error) => {
                console.log(error)

            })
    }

    // addQuantity= (index, dishQuantity) => {

    //     dishList[index].quantity = dishQuantity + 1

    //     this.setState({
    //         dishList: dishList
    //     })

    // }

    componentDidMount() {
        this.getDishes();
    }


    componentDidUpdate() {
        console.log('component did updated called');
    }

    componentWillUnmount() {
        console.log('component will unmount called');
    }

    render() {

        const { dishList } = this.state;


        return (
            <div className="m-6">

                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Dishes</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
                    {

                        dishList.map((dish, index) => {
                            // console.log(dish)
                            return (<DishCard dish={dish} ></DishCard>)
                        })
                    }

                </div>
            </div>

        )
    }
}