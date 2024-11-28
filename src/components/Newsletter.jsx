import './Newsletter.css';

function Newsletter() {
    return (
        <section className="newsletter-section">
            <div className="newsletter">
                <h2>Subscribe to our Newsletter</h2>
                <p>Subscribe to our newsletter to get the latest news and offers</p>
                <form>
                    <label htmlFor="email" hidden>Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        autoComplete="email"
                        required
                    />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </section>
    );
}

export default Newsletter;
