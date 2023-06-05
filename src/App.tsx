import CTA from './components/CTA';
import Hero from './components/Hero';
import Features from './components/Features';
import { Products } from './components/Products';
import './App.css';

const App = () => (
  <div className="App container mx-auto">
    <Hero/>
    <Features/>
    <Products/>
    <CTA/>
  </div>
);

export default App;
