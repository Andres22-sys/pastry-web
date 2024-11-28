import Header from './navigation/Header';
import Footer from './navigation/Footer';
import Banner from './components/Banner';
import Values from './components/Values';
import About from './components/About';
import Menu from './components/Menu';
import Blog from './components/Blog';
import Team from './components/Team';
import Newsletter from './components/Newsletter';

function App() {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <Values />
                <About />
                <Menu />
                <Blog />
                <Team />
                <Newsletter />
            </main>
            <Footer />
        </>
    );
}

export default App;
