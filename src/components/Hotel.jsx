import React, { useState, useEffect } from "react";

export default function Hotel(props) {
    const [clicked, setClicked] = useState(false);

    if (props.data !== "") {
        return (
            <div className="hotels-container">
                {props.data.map((hotel) => (
                    <div className="hotel-container" key={hotel.id}>
                        <h2>{hotel.name}</h2>
                        <div className="hotel-details">
                            {clicked === hotel.id
                                ? `${hotel.city}, ${hotel.stars} stars`
                                : ""}
                        </div>
                        <button
                            onClick={() =>
                                setClicked(clicked === false ? hotel.id : false)
                            }
                        >
                            {clicked ? "Show less" : "Show more"}
                        </button>
                    </div>
                ))}
            </div>
        );
    }
}
