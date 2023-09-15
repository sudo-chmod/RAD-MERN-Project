import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const HomeAuto = () => {
    return (
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src="https://media.istockphoto.com/id/173598452/photo/university-in-autumn.jpg?s=612x612&w=0&k=20&c=jQqpZuTZ6qXIfWqnCW5nqlExJZO0PO47L-ZiaE8jIk0=" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5 style={{ fontSize: "100px", color: "white" }}>No. 1 University In Sri Lanka</h5>

                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="https://blogs.deakin.edu.au/deakinlife/wp-content/uploads/sites/63/2023/08/Learning-activities.png" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5 style={{ fontSize: "100px", color: "white" }}>Best and Cetified Teachers</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5 style={{ fontSize: "100px", color: "white" }}>Perfect Environment for Learning</h5>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>


    );
};

export default HomeAuto;

