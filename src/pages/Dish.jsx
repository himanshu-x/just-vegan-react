import React from "react";
import { Link } from "react-router-dom";


export default class newDish extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            newDish: {},
            // headerToDo: 'Todo Information',
            // todoList: []
        }
    }



    componentDidMount() {

        fetch('https://b59b-2405-201-401a-dd3e-40f0-f1d9-c63e-76c9.ngrok.io/dishes')
            .then(res => res.json())
            .then((response) => {
                this.setState({
                    // todoList: response
                    newDish: response
                })
            }, (error) => {
                console.log(error)

            })
    }


    componentDidUpdate() {
        console.log('component did updated called');
    }

    componentWillUnmount() {
        console.log('component will unmount called');
    }

    render() {

        const { newDish } = this.state;


        return (


            <div className="container mx-auto">
                <Link to="dish">Dish</Link>

            </div>

        )
    }
}