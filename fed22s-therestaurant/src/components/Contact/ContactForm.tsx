import { ChangeEvent, useState } from "react";
import "./contactForm.scss";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        message: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className="styled-form">
            <section>
                <label htmlFor="name">Namn:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="full-width-input" />
            </section>

            <section>
                <label htmlFor="number">Telefonnummer:</label>
                <input type="text" id="number" name="number" value={formData.number} onChange={handleChange} className="full-width-input" />
            </section>

            <section>
                <label htmlFor="email">E-post:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="full-width-input" />
            </section>

            <section>
                <label htmlFor="message">Meddelande:</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="full-width-input" />
            </section>

            <button type="submit">Skicka</button>
        </form>
    );
}
