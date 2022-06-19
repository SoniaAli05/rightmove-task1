import React from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import Axios from 'axios';
import { useEffect, useState } from 'react';

const PropertyListing = () => {

    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        Axios.get(`http://localhost:3000/api/properties`)
            .then(res => {
                setProperties(res.data)
                setLoading(false);
            }).catch(err => setError(err));
    }, [])

    return (
        <div className="PropertyListing">
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}

            {!error &&
                !loading &&
                properties.map((property, index) => <PropertyCard key={index} {...property} />)}
        </div>
    )
};

export default PropertyListing;
