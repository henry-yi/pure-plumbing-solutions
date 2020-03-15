import Layout from '../components/Layout';

const Contact = () => (
    <Layout>
        <div className="email__form_container">
            <div className="email__welcome">Contact Us</div>
            <div className="email__form_inner_container">
                <form className="email__form" action="https://formspree.io/Pureplumbingsolutionsca@gmail.com" method="POST">
                    <input type="text" name="name" placeholder="Name" />
                    <input type="text" name="phone" placeholder="Phone number" />
                    <input type="email" name="email" placeholder="Email address" />
                    <textarea name="message" placeholder="Message"></textarea>
                    <button className="send-button" type="submit">Send</button>
                </form>
            </div>
        </div>
        <style jsx>{`
            .email__form_container {
                width: 100%;
                height: calc(100vh - 125px);
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
            }

            .email__welcome {
                font-size: 24px;
                width: 100%;
                text-align: center;
                margin-top: 108px;
            }

            .email__form_inner_container {
                overflow-y: auto;
                overflow-x: hidden;
            }

            .email__form {
                width: 100%;
            }

            .email__form input,
            .email__form textarea
            {
                width: 95%;
                margin-top: 5px;
                font-size: 16px;
                border-radius: 5px;
                border: 1px solid silver;
                padding: 5px;
                margin-bottom: 5px;
            }

            .email__form textarea {
                height: 200px;
                font-family: 'Arial';
            }

            .email__form button {
                margin-bottom: 10px;
            }

            .send-button {
                cursor: pointer;
                width: 84px;
                height: 35px;
                background-color: #0D8AF5;
                color: #FFFFFF;
                font-family: "Helvetica";
                font-size: 20px;
                font-weight: 500;
                line-height: 22px;
                text-align: center;
                border-radius: 4px;
                padding: 6px 18px;
                margin-bottom: 10px;
                border-style: none;
            }
        `}
        </style>
    </Layout>
)

export default Contact;