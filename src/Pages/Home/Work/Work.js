import React from 'react';

const Work = ({ work }) => {
    const { img } = work;
    return (
        <div className='g-3 col-sm-12 col-md-6 col-lg-4'>
            <img src={img} className="img-fluid" alt="..."/>
        </div>
    );
};

export default Work;