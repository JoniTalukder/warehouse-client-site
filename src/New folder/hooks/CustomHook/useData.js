import React, { useEffect, useState } from 'react';

const useData = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://pure-ravine-17489.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return [services, setServices];
};

export default useData;