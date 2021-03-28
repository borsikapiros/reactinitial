import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import LoadingMask from "./LoadingMask.jsx";

export default function List() {
    const [data, setData] = useState([
        { name: "hotel1", city: "SF", stars: 5 },
        { name: "hotel2", city: "NY", stars: 3 },
        { name: "hotel3", city: "VA", stars: 4 },
    ]);

    const [loading, setLoading] = useState(true);

    const fetchReq = () => {
        fetch("/api/hotels")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    };

    const fetchData = () => {
        setTimeout(fetchReq, 2000);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderedHotelList = data.map((hotel) => {
        return <ListItem hotel={hotel} />;
    });

    if (loading === true) {
        return <LoadingMask />;
    } else {
        return (
            <div>
                <h2>Hotels</h2>
                {renderedHotelList}
            </div>
        );
    }
}
