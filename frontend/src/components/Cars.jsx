import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom'
const Cars = () => {

    const [cars, seteCars] = useState([])
    const history = useHistory()

    const getCars = async () => {
        const response = await axios.get('http://0.0.0.0:8000/list/')
        seteCars(response.data)
        console.log(response.data)


    }
    useEffect(() => {
        getCars();

    })


  

    return (

        <div class="container"  >

            <h1 className='title'> Cars List</h1>


            {
                cars.map((car, index) => (


                       <div key={index}  style={{ float: 'left',padding: '35px', width: '288px' }} >
                        <div class="card" style={{ float: 'left',padding: '35px', width: '288px' }}>
                            <img class="card-img-top" src={car.image} alt="Card image cap" />
                            <div class="card-body">
                                <p class="card-text"><h2>{car.model}</h2>
                                    <h4> {car.serie}</h4>
                                    <p className="card-text ">Year: {car.year}</p>
                                    <p className="card-text">Date creation Pub: {car.date}</p>
                                    <p className="card-text">Dscription: {car.description}</p>
                                    
                                    <Link type="button" class="btn btn-secondary" to={`${car.id}/`}>Detail</Link>

                                </p>
                            </div>
                        </div>


                    </div>


                ))
            }
        </div>



    );

};
export default Cars;