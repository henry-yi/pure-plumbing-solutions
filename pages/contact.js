import Layout from '../components/Layout';

const Contact = () => (
    <Layout>
        <div className="email__form_container">
            <div className="email__welcome">Contact Us</div>
            <form className="email__form" action="https://formspree.io/Pureplumbingsolutionsca@gmail.com" method="POST">
                <input type="text" name="name" placeholder="Name"/>
                <input type="text" name="phone" placeholder="Phone number"/>
                <input type="email" name="email" placeholder="Email address"/>
                <textarea name="message" placeholder="Message"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
        <style jsx>{`
            .email__form_container {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: center;
                flex-wrap: wrap;
            }

            .email__welcome {
                font-size: 24px;
                width: 100%;
                text-align: center;
                margin-top: 10px;
            }

            .email__form {
                width: 40%;
            }

            .email__form input,
            .email__form textarea
            {
                width: 100%;
                margin-top: 5px;
                font-size: 16px;
            }

            .email__form textarea {
                height: 200px;
            }

            .email__form button {
                margin-bottom: 10px;
            }
        `}
        </style>
    </Layout>
)
  
export default Contact;