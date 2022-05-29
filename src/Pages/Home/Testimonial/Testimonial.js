import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
    return (
        <div className='mt-5'>
            <section className="home-testimonial">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center testimonial-pos">
                        <div className="col-md-12 pt-4 d-flex justify-content-center">
                            <h3>Testimonials</h3>
                        </div>
                        <div className="col-md-12 d-flex justify-content-center">
                            <h2>Buy experience</h2>
                        </div>
                    </div>
                    <section className="home-testimonial-bottom">
                        <div className="container testimonial-inner">
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-4 style-3">
                                    <div className="tour-item ">
                                        <div className="tour-desc bg-white">
                                            <div className="tour-text color-grey-3 text-center">&ldquo;Buy every product,I am happy to say all are fresh and testy.&rdquo;</div>
                                            <div className="d-flex justify-content-center pt-2 pb-2"><img className="tm-people" src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg" alt="" /></div>
                                            <div className="link-name d-flex justify-content-center">Balbir Kaur</div>
                                            <div className="link-position d-flex justify-content-center">Buyer</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 style-3">
                                    <div className="tour-item ">
                                        <div className="tour-desc bg-white">
                                            <div className="tour-text color-grey-3 text-center">&ldquo;Buy every product,I am happy to say all are fresh and testy.Recommended this product.Any one can buy and enjoy!!&rdquo;</div>
                                            <div className="d-flex justify-content-center pt-2 pb-2"><img className="tm-people" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></div>
                                            <div className="link-name d-flex justify-content-center">Balbir Kaur</div>
                                            <div className="link-position d-flex justify-content-center">Buyer</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 style-3">
                                    <div className="tour-item ">
                                        <div className="tour-desc bg-white">
                                            <div className="tour-text color-grey-3 text-center">&ldquo;I am happy to say all are fresh and testy.Yammuy joosy.Buy again.&rdquo;</div>
                                            <div className="d-flex justify-content-center pt-2 pb-2"><img className="tm-people" src="https://images.pexels.com/photos/4946604/pexels-photo-4946604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></div>
                                            <div className="link-name d-flex justify-content-center">Balbir Kaur</div>
                                            <div className="link-position d-flex justify-content-center">Buyer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;