import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router';


const CarDetail = () => {
    const [car, setCar] = useState('')
    const { id } = useParams();
    const getSingleCar = async () => {
        const { data } = await axios.get(`http://0.0.0.0:8000/${id}`)
        console.log(data)
        setCar(data)
    }
    useEffect(() => {
        getSingleCar();
    }
        , [])
        const history = useHistory()

        //delete car
        const deleteCar= async (id)=>{
            await axios.delete(`http://0.0.0.0:8000/${id}`)
            history.push('/')
        }
    return (
        <div>
            <h1 > car detail
            </h1>
            <div>
            </div>
            <div class="card" style={{ float: 'left', padding: '35px', width: '50%' }}>
                <img class="card-img-top" src={`http://0.0.0.0:8000${car.image}`} alt="Card image cap" />
                <div class="card-body" style={{ float: 'left', padding: '35px' }}>
                    <h1 className="card-text display-1">{car.model}</h1>
                    <h2 className="card-text display-2"> {car.serie}</h2>
                    <p className="card-text ">Year: {car.year}</p>
                    <p className="card-text">Date creation Pub: {car.date}</p></div>
            </div>
            <div className="container" style={{ float: 'right', padding: '5px', width: '50%' }}>
                <div class="card" >
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><h3>Price :</h3>
                            <p className="card-text lead"><strong>{car.price}</strong></p></li>
                        <li class="list-group-item lead">  <h3 >Kilometrage: </h3>
                            <p className="card-text lead"><strong>{car.mileage}</strong></p></li>
                        <li class="list-group-item lead"><h3>Date :</h3>
                            <p className="card-text lead"><strong>{car.date}</strong></p></li>
                        <li class="list-group-item lead" >  <h3 >Color :</h3>
                            <p className="card-text lead"><strong>{car.colou}</strong></p></li><li class="list-group-item">   <h3 >Doors Number :</h3>
                            <p className="card-text lead"><strong>{car.doors_number}</strong></p></li>

                    </ul>
                </div>
                <div class="card" >
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"> <h3>Fuel Type :</h3>
                            <p className="card-text lead"><strong>{car.fuel_type}</strong></p></li>
                        <li class="list-group-item lead"><h3>Transmission :</h3>
                            <p className="card-text lead"><strong>{car.Transmission}</strong></p></li>
                        <li class="list-group-item"><h3>Body Type :</h3>
                            <p className="card-text lead"><strong>{car.body_type}</strong></p></li>

                        <li class="list-group-item"><h3>Engine Size :</h3>
                            <p className="card-text lead"> <strong>{car.engine_size}</strong></p></li>

                        <li class="list-group-item lead"><h3>Description: </h3>
                            <p className="card-text lead"><strong>{car.description}</strong></p></li>
                    </ul>
                </div>
                <Link type="button" class="btn btn-success" to={`Update/`} >Update</Link>
<button type="button" class="btn btn-danger" onClick={()=>deleteCar(car.id)}>Delete</button>
                </div>














        </div>



    )
}
export default CarDetail;