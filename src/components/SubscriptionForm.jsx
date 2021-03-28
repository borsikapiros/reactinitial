import React, { useState } from "react";
import Feedback from "./Feedback";

export default function SubscriptionForm(props) {
    const [email, setEmail] = useState("");

    const [message, setMessage] = useState("");

    const hotelName = props.hotel.name;

    function sendSubscribe(e) {
        e.preventDefault();

        const successMsg = email + hotelName;

        fetch("api/hotels/subscribe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email, hotel: hotelName }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    setMessage(successMsg);
                } else {
                    setMessage("hiba");
                }
            })
            
    }

    const feedBack = <Feedback message={message} email={email} hotelName={hotelName} />;

    const form = (
        <div>
            <h6>Would you like know more? Subscribe!</h6>
            <form onSubmit={(e) => sendSubscribe(e)}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                    type="submit"
                    value="Subscribe"
                    disabled={!(email.includes("@") && email.includes("."))}
                />
            </form>
        </div>
    );

    return message ? feedBack : form;

}
