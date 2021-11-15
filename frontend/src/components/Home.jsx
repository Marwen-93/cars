import React from "react";

const Home = () => {
    return (
        <div >
                    <div className="container">

            <h1> About</h1>
            <h3>These simple CRUD applications with Django and Django rest framework and react js</h3>
            <h2>Marwen Weslati</h2>
            <h3> Python and Django Full Stack Developer </h3>

        
            <div class="card">
                <div class="card-header">
                    Contact me
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><h2>54 665 680 </h2></li>
                    <li class="list-group-item"><h2>  marwenweslati@yahoo.com </h2></li>

                    <li class="list-group-item"><h2><a href="http://marwenweslati.herokuapp.com/" className="fab fa-internet-explorer card-text" target="_blank">  <p>      Portfilio</p>   </a></h2>
 </li>
                    <li class="list-group-item"><h2><a href="https://www.linkedin.com/in/marwen-weslati/" className="fa fa-linkedin" target="_blank">  <p>    Linkedin</p></a></h2>
                    </li>
                </ul>
            </div>

        </div>
        </div>
    );

};
export default Home;