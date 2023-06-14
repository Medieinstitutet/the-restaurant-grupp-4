import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({ namn: "", telefonnr: "", mail: "", meddelande: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //implementera mail

    };

    return (
        //skapa div att styla
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Namn:</label>
            <input type="text" id="name" name="name" value={formData.namn} onChange={handleChange} />

            <label htmlFor="number">Telefonnummer:</label>
            <input type="text" id="telefonnr" name="number" value={formData.telefonnr} onChange={handleChange} />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.mail} onChange={handleChange} />

            <label htmlFor="message">Meddelande:</label>
            <textarea id="message" name="message" value={formData.meddelande} onChange={handleChange} />

            <button type="submit">Skicka</button>
        </form>
    );
}