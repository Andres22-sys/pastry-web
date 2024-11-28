import cupcakeBlog from '/src/assets/blog/cupcake-blog.jpg';
import cookieBlog from '/src/assets/blog/cookie-blog.jpg';
import cakeBlog from '/src/assets/blog/cake-blog.jpg';
import './Blog.css';

function Blog() {
    return (
        <section className="blog-section" id="blog">
            <h2>Blog Posts</h2>
            <div className="blog-grid">
                <div className="blog-item">
                    <img src={cupcakeBlog} alt="Cupcake Blog" />
                    <h3>How to make the perfect cupcake</h3>
                    <p>Want to learn the secrets to delicious cupcakes...</p>
                    <button>Read More</button>
                </div>
                <div className="blog-item">
                    <img src={cookieBlog} alt="Cookie Blog" />
                    <h3>How to make the perfect cookie</h3>
                    <p>Want to learn the secrets to delicious cookies...</p>
                    <button>Read More</button>
                </div>
                <div className="blog-item">
                    <img src={cakeBlog} alt="Cake Blog" />
                    <h3>How to make the perfect cake</h3>
                    <p>Want to learn the secrets to delicious cakes...</p>
                    <button>Read More</button>
                </div>
            </div>
        </section>
    );
}

export default Blog;
