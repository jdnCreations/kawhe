import './App.css';
import Content from './components/Content';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
