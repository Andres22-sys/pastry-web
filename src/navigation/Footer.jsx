import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="logo">
                <img src="/src/assets/hberry.png" alt="Huckleberry Pastry" />
                <p>&copy; 2023 Huckleberry Pastry</p>
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about-us">About Us</a></li>
                    <li><a href="#shop">Shop</a></li>
                    <li><a href="#blog">Blog</a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
