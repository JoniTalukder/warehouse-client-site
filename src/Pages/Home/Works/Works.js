import React, { useEffect, useState } from 'react';
import Work from '../Work/Work';

const Works = () => {
    const [works, setWorks] = useState([]);
    useEffect(() => {
        fetch('works.json')
            .then(res => res.json())
            .then(data => setWorks(data));
    }, [])

    return (
        <div id='works' className='container'>
            <h2 className='text-info text-center text-uppercase mt-5'>Our Works Gallery</h2>
            <div className='row'>
                {
                    works.map(work => <Work
                        key={work.id}
                        work={work}
                    ></Work>)
                }
            </div>
        </div>
    );
};

export default Works;