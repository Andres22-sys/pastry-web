import './Banner.css';

function Banner() {
    return (
        <section className="banner" id="home">
            <div className="banner-cta">
                <h1>Huckleberry Pastries</h1>
                <p>Order online and get your pastries delivered to your door</p>
                <a href="#shop">
                    <button>Order Now</button>
                </a>
            </div>
        </section>
    );
}

export default Banner;
