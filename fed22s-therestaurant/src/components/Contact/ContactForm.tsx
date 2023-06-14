import { ChangeEvent, useState } from "react";
/* import validator from "validator"; */

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: "", number: "", email: "", message: "" });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (e.target.type === 'text') {
            setFormData({ ...formData, [name]: value })
        } else if (e.target.type === 'email') {
            setFormData({ ...formData, [name]: value })
        } else if (e.target.type === 'message') {
            setFormData({ ...formData, [name]: value })
        }

        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //implementera mail

    };

    /*     const validateEmail = (email) => {
            if (validator.isEmail(email)) {
                postMessage("Tack för ditt mail!");
            } else {
                postMessage("Lägg till en befientlig mailadress");
            }
        }; */

    return (
        //skapa div att styla
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Namn:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

            <label htmlFor="number">Telefonnummer:</label>
            <input type="text" id="number" name="number" value={formData.number} onChange={handleChange} />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.mail} onChange={handleChange} />

            <label htmlFor="message">Meddelande:</label>
            <textarea id="message" name="message" value={formData.meddelande} onChange={handleChange} />

            <button type="submit">Skicka</button>
        </form>
    );
}