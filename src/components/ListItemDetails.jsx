import React, { useState } from "react";
import SubscriptionForm from "./SubscriptionForm";

export default function ListItemDetails(props) {
    return (
        <div>
            <p>
                {props.hotel.city} ({props.hotel.stars})
            </p>
            <SubscriptionForm hotel={props.hotel} />
        </div>
    );
}
