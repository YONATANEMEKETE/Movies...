import Cta from './components/Cta';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import VideosRecomendation from './components/VideosRecomendation';

function App() {
  return (
    <div className="pb-24">
      <Navigation />
      <Hero />
      <VideosRecomendation />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
