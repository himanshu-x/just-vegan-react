import React from "react";


export default function Cerousel() {

    return (
        <div id="carouselExampleIndicators" className="carousel slide relative lg:max-w-[1370px] mx-auto " data-bs-ride="carousel">
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div className="carousel-inner relative w-full overflow-hidden  h-[400px] mb-8 rounded-3xl ">
                <div className="carousel-item active float-left w-full">
                    <img
                        src="https://images.moneycontrol.com/static-mcnews/2021/10/the-matter-of-food-MAcTXz4-qH8-unsplash-1.jpg?impolicy=website&width=770&height=431"
                        className="block w-full object-center object-cover bg-cover"
                        alt="Wild Landscape"
                    />
                </div>
                <div className="carousel-item float-left w-full">
                    <img
                        src="https://www.peruforless.com/blog/wp-content/uploads/2021/03/vegetarian-food-1.jpg"
                        className="block w-full object-center object-cover bg-cover"
                        alt="Camera"
                    />
                </div>
                <div className="carousel-item float-left w-full">
                    <img
                        src="https://insideretail.asia/wp-content/uploads/2020/09/bigstock-Buddha-Bowl-With-Tofu-Avocado-327710371.jpg"
                        className="block w-full  object-center object-cover bg-cover"
                        alt="Exotic Fruits"
                    />
                </div>
            </div>
            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}