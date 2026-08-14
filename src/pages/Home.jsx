import Hero from '../components/Hero';
import ShapingFutures from '../components/ShapingFutures';
import Visionaries from '../components/Visionaries';
import Motto from '../components/Motto';
import Ecosystem from '../components/Ecosystem';
import ExploreGallery from '../components/ExploreGallery';
import Excellence from '../components/Excellence';
import Stats from '../components/Stats';
import Blog from '../components/Blog';
import FAQ from '../components/FAQ';
import GalleryRow from '../components/GalleryRow';
import ContactMap from '../components/ContactMap';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ShapingFutures />
      <Visionaries />
      <Motto />
      <Ecosystem />
      <ExploreGallery />
      <Excellence />
      <Stats />
      <FAQ />
      <GalleryRow />
      <Blog />
      <ContactMap />
    </div>
  );
}
