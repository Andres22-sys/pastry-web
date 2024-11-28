import cupcakes from '/src/assets/menu-items/cupcakes.jpg';
import cookies from '/src/assets/menu-items/cookies.jpg';
import cakes from '/src/assets/menu-items/cakes.jpg';
import './Menu.css';

function Menu() {
    return (
        <section className="menu-section" id="shop">
            <h2>Menu</h2>
            <div className="menu-grid">
                <div className="menu-item">
                    <img src={cupcakes} alt="Cupcakes" />
                    <h3>Cupcakes</h3>
                    <p>Our cupcakes are made with the finest ingredients</p>
                    <button>Order Now</button>
                </div>
                <div className="menu-item">
                    <img src={cookies} alt="Cookies" />
                    <h3>Cookies</h3>
                    <p>Our cookies are made with the finest ingredients</p>
                    <button>Order Now</button>
                </div>
                <div className="menu-item">
                    <img src={cakes} alt="Cakes" />
                    <h3>Cakes</h3>
                    <p>Our cakes are made with the finest ingredients</p>
                    <button>Order Now</button>
                </div>
            </div>
        </section>
    );
}

export default Menu;
