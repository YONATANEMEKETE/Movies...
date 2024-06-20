import Hero from './components/Hero';
import Navigation from './components/Navigation';
import VideosRecomendation from './components/VideosRecomendation';

function App() {
  return (
    <div className="pb-24">
      <Navigation />
      <Hero />
      <VideosRecomendation />
    </div>
  );
}

export default App;
