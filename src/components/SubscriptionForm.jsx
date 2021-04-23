import React, { useState } from "react";
import Feedback from "./Feedback";

export default function SubscriptionForm(props) {
    const [email, setEmail] = useState("");

    const [message, setMessage] = useState("");

    const hotelName = props.hotel.name;

    const subscribedEmails = [];

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
                if (data.success && !subscribedEmails.includes(email)) {
                    setMessage(successMsg);
                } else if (subscribedEmails.includes(email)) {
                    setMessage("already");
                } else {
                    setMessage("hiba");
                }
            });
        subscribedEmails.push(email);
    }

    const feedBack = (
        <Feedback message={message} email={email} hotelName={hotelName} />
    );

    const form = (
        <div>
            <h6>Request more info about {hotelName}</h6>
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
