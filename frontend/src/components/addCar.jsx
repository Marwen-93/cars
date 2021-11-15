import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from 'react-router';

const addCar = () => {
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    var csrftoken = getCookie('csrftoken');    


    const history = useHistory()
    const [model, setModel] = useState('')
    const [serie, setSerie] = useState('')
    const [price, setPrice] = useState('')
    const [mileage, setMileage] = useState('')
    const [year, setYear] = useState('')
    const [fuel_type, setFuel_type] = useState('')
    const [Transmission, setTransmission] = useState('')
    const [body_type, setBody_type] = useState('')
    const [colou, setColou] = useState('')
    const [doors_number, setDoors_number] = useState('')
    const [engine_size, setEngine_size] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)



    const AddCar = async () => {


        let formfield = new FormData()
        formfield.append('model', model)
        formfield.append('serie', serie)
        formfield.append('price', price)
        formfield.append('mileage', mileage)
        formfield.append('year', year)
        formfield.append('fuel_type', fuel_type)
        formfield.append('Transmission', Transmission)
        formfield.append('body_type', body_type)
        formfield.append('colou', colou)
        formfield.append('doors_number', doors_number)
        formfield.append('engine_size', engine_size)
        formfield.append('description', description)

        formfield.append('image', image)

        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/list/',
            data:formfield,
            headers: {
                'Content-Type': 'application/json',
                "X-CSRFToken": csrftoken},
                
                
               



        }).then((response) => {
            console.log(response.data)
            history.push('/')
        }).catch(error => {
            console.log(error.response)
            
        });






    }


    return (
        <div>
            <h1 > Add car for sale</h1>
            <div className='form-group'>
                <div className="form-group" style={{ flex: 7 }}>
                    <label htmlFor="exampleFormControlInput1">Model</label>
                    <input onChange={(e) => setModel(e.target.value)} value={model} type="first_name" name="first_name" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="form-group" style={{ flex: 7 }}>
                    <label htmlFor="exampleFormControlInput1">Serie</label>
                    <input onChange={(e) => setSerie(e.target.value)} value={serie} type="first_name" name="first_name" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="form-group" style={{ flex: 7 }}>
                    <label htmlFor="exampleFormControlInput1">Price </label>
                    <input onChange={(e) => setPrice(e.target.value)} value={price} type="first_name" name="first_name" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="form-group" style={{ flex: 7 }}>
                    <label htmlFor="exampleFormControlInput1">Kilomterage</label>
                    <input onChange={(e) => setMileage(e.target.value)} value={mileage} type="first_name" name="first_name" className="form-control" id="exampleFormControlInput1" />
                </div>

                <div className="form-group" style={{ flex: 7 }}>
                    <label htmlFor="exampleFormControlInput1">Year</label>
                    <input onChange={(e) => setYear(e.target.value)} value={year} type="first_name" name="first_name" className="form-control" id="exampleFormControlInput1" />
                </div>
                <label htmlFor="exampleFormControlInput1">  Transmission  </label>

                <select value={Transmission} onChange={(e) => setTransmission(e.target.value)}>
                <input value={Transmission} onChange={(e) => setTransmission(e.target.value)} type="first_name" name="first_name" className="form-control" id="exampleFormControlInput1" />

                    <option value="Manual">Manual</option>
                    <option value="Automatic">Automatic</option>
                    <option value="CVT">CVT</option>
                </select>
                <label htmlFor="exampleFormControlInput1"> Fuel Type </label>

                <select value={fuel_type} onChange={(e) => setFuel_type(e.target.value)}>
                <input value={fuel_type} onChange={(e) => setFuel_type(e.target.value)} type="first_name" name="first_name" className="form-control" id="exampleFormControlInput1" />

                    <option value="Gasoline">Gasoline</option>
                    <option value="Diesel Fuel">Diesel Fuel</option>
                    <option value="Bio-diesel">Bio-diesel</option>
                    <option value="Ethanol">Ethanol</option>
                    <option value="Electric">Electric</option>
                </select>
                <label htmlFor="exampleFormControlInput1"> Body Type </label>

                <select value={body_type} onChange={(e) => setBody_type(e.target.value)}>
                <input  value={body_type} onChange={(e) => setBody_type(e.target.value)} type="body_type" name="first_name" className="form-control" id="exampleFormControlInput1" />

                    <option value="COUPE">COUPE</option>
                    <option value="SPORTS CAR">SPORTS CAR</option>
                    <option value="STATION WAGON">STATION WAGON</option>
                    <option value="HATCHBACK">HATCHBACK</option>
                    <option value="CONVERTIBLE">CONVERTIBLE</option>
                    <option value="SPORT-UTILITY VEHICLE">SPORT-UTILITY VEHICLE</option>
                    <option value="MINIVAN">MINIVAN</option>
                    <option value="PICKUP TRUCK">PICKUP TRUCK</option>
                </select>
                <div className="form-group" style={{ flex: 7 }}>
                    <label htmlFor="exampleFormControlInput1">Color</label>
                    <input onChange={(e) => setColou(e.target.value)} value={colou} type="first_name" name="first_name" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="form-group" style={{ flex: 7 }}>
                    <label htmlFor="exampleFormControlInput1">Doors Number</label>
                    <input onChange={(e) => setDoors_number(e.target.value)} value={doors_number} type="first_name" name="first_name" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="form-group" style={{ flex: 7 }}>
                    <label htmlFor="exampleFormControlInput1">Engine Size</label>
                    <input onChange={(e) => setEngine_size(e.target.value)} value={engine_size} type="first_name" name="first_name" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="form-group" style={{ flex: 7 }}>
                    <label htmlFor="exampleFormControlInput1">Description</label>
                    <input onChange={(e) => setDescription(e.target.value)} value={description} type="first_name" name="first_name" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="form-group" >

                    <label htmlFor="exampleFormControlInput1">Image</label>
                    <img src={image}  alt="car" />
                    <input onChange={(e) => setImage(e.target.files[0])}  type="file" name="image" className="form-control" id="exampleFormControlInput1" />
                </div>
                <button className="btn btn-success" onClick={AddCar} >Add Car</button>

            </div>




        </div>
    );

};
export default addCar;