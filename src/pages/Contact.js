import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css'
// THE CODE FROM THIS PAGE WAS TAKEN FROM : https://github.com/chaoocharles/react-email.js
// might not be true, since I modified some stuff as it wasn't working properly

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "replace with service id",
                "replace with template id",
                form.current,
                "replace with user id"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    const [selectedDate, setSelectedDate] = useState(null)
    return (
        <div>
            <h1 class="center">Contact me</h1>
            <div class="red-line"></div>
            <br /><br /><br />

            <form class="center-form" ref={form} onSubmit={sendEmail} >
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <div class="">
                    <br />
                    <label for="meetingTimeInAugustOptional">Meeting time in August (Optional)</label>
                    <select class="form-select" id="meetingTimeInAugustOptional" aria-label="Meeting time in August (Optional)">
                        <option value="None">None</option>
                        <option value="15th : 16pm EST">15th : 16pm EST</option>
                        <option value="16th : 17pm EST">16th : 17pm EST</option>
                        <option value="17th : 20pm EST">17th : 20pm EST</option>
                        <option value="18th : 13pm EST">18th : 13pm EST</option>
                        <option value="19th : 10am EST">19th : 10am EST</option>
                        <option value="19th : 17pm EST">19th : 17pm EST</option>
                    </select>

                </div>
                <label>Message</label>

                <textarea name="message" />
                <input type="submit" value="Send" onClick={sendEmail} class="btn" />
            </form>
            <Link to="/" class="left-arrow"><img class="button-continue" src="https://flawnpiece.github.io/portfolio-website/assets/down-arrow.png" alt="" width="25%" /></Link>

        </div>
    );
};

export default Contact;

;