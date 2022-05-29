import React from 'react';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Testimonial></Testimonial>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;