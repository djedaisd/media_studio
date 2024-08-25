import React, { useState } from 'react';
import '../index.css';

const Contact = () => {


    const [formData, setFormData] = useState({
        name: '',
        number: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            name: document.querySelector("#name").value,
            number: document.querySelector("#number").value,
            message: document.querySelector("#message").value,
        };

        try {
            const response = await fetch('api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert('Form submitted successfully!');
            } else {
                const errorData = await response.json();
                alert(`Failed to submit form: ${errorData.message}`);
            }
        } catch (error) {
            alert(`An error occurred: ${error.message}`);
        }
    };


    return (
        <section className="contact-section" id='contacts'>
            <div className="container">
            <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="name">Ваше имя</label>
                        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">Номер телефона</label>
                        <input type="text" id="number" name="number" required value={formData.number} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Сообщение</label>
                        <input type="text" id="message" name="message" required value={formData.message} onChange={handleChange} />
                    </div>
                </div>
                <button type="submit">Отправить</button>
            </form>
        </div>
                <div className="contact-info">
                    <div>
                        <h2>Наши Контакты</h2>
                        <p>studio@media.com <br /> +7 707 778 00 00</p>
                    </div>
                    <div>
                        <h2>Наш Адрес</h2>
                        <p>ул. Мангилик ел, EXPO <br /> блок С1, Astana IT University</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
