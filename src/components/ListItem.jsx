import React, { useState } from "react";
import ListItemDetails from "./ListItemDetails";

export default function ListItem(props) {
   
    let hotel = props.hotel;

    const [clicked, setClicked] = useState(false);

    const showMoreOrLessText = clicked === false ? "Show more" : "Show less";

    function setShowDetails() {
        clicked === true ? setClicked(false) : setClicked(true);
    }

    function showDetails(hotel) {
        if (clicked === true) {
            return <ListItemDetails hotel={hotel} />;
        } else {
            return "";
        }
    }

    return (
        <ul>
            <li>{hotel.name}</li>
            <button onClick={setShowDetails}>{showMoreOrLessText}</button>
            {showDetails(hotel)}
        </ul>
    );
}
