import qualityLogo from '/src/assets/values/premium-quality.png';
import convenienceLogo from '/src/assets/values/click.png';
import supportLogo from '/src/assets/values/24-hours-support.png';
import './Values.css';

function Values() {
    return (
        <section className="values-section">
            <h2>Our Values</h2>
            <div className="values-grid">
                <div className="value">
                    <img src={qualityLogo} alt="Good quality icon" />
                    <h3>Quality</h3>
                    <p>Our pastries are made with the finest ingredients</p>
                </div>
                <div className="value">
                    <img src={convenienceLogo} alt="Online click icon" />
                    <h3>Convenience</h3>
                    <p>Order online and get your pastries delivered to your door</p>
                </div>
                <div className="value">
                    <img src={supportLogo} alt="24/7 icon" />
                    <h3>Customer Service</h3>
                    <p>Our customer service team is available 24/7</p>
                </div>
            </div>
        </section>
    );
}

export default Values;
