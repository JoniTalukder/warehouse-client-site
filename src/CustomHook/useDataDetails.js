import { useEffect, useState } from "react";

const useDataDetails = serviceId => {
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `https://pure-ravine-17489.herokuapp.com/service/${serviceId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));

    }, [serviceId]);
    return [service]
}
export default useDataDetails;