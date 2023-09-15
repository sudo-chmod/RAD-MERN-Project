import React from "react";
import * as Icon from 'react-bootstrap-icons';

const ContactUs = () => {
    const ContactInfoData = [
        {
            image: <Icon.GeoAlt />,
            title: "Visit Us",
            text: "No.2, RAD Building Complex, Colombo7",
        },
        {
            image: <Icon.TelephoneFill />,
            title: "Call Us",
            text: "+94-11-123-1234",
        },
        {
            image: <Icon.EnvelopeFill />,
            title: "Email Us",
            text: "radinstitute@gmail.com",
        },
    ];

    return (
        <div id="contactUs" className="work-section-wrapper">
            <div className="work-section-top">
                <h1 className="primary-heading">Contact Us</h1>
            </div>
            <div className="work-section-bottom">
                {ContactInfoData.map((data) => (
                    <div className="work-section-info" key={data.title}>
                        <div className="info-boxes-img-container" style={{ fontSize: "50px" }}>{data.image}</div>
                        <h2>{data.title}</h2>
                        <p style={{ fontSize: "18px" }}>{data.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactUs;