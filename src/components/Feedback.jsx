import React from "react";

export default function Feedback(props) {
    if (props.message === "hiba") {
        return <div>An error occurred</div>;
    } else if (props.message === "already") {
        return <div>Already subscribed</div>;
    } else {
        return (
            <div>
                Successfully subscribed about <strong>{props.hotelName}</strong>{" "}
                with email <strong>{props.email}</strong>.
            </div>
        );
    }
}
