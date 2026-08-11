import Hero from '../components/Hero';
import Motto from '../components/Motto';
import ShapingFutures from '../components/ShapingFutures';
import Visionaries from '../components/Visionaries';
import Ecosystem from '../components/Ecosystem';
import ExploreGallery from '../components/ExploreGallery';
import Excellence from '../components/Excellence';
import Stats from '../components/Stats';
import FAQ from '../components/FAQ';
import News from '../components/News';
import Blog from '../components/Blog';
import QuoteBanner from '../components/QuoteBanner';
import Testimonials from '../components/Testimonials';
import InstitutionLogos from '../components/InstitutionLogos';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <InstitutionLogos />
      <Motto />
      <ShapingFutures />
      <Visionaries />
      <Ecosystem />
      <ExploreGallery />
      <Excellence />
      <Stats />
      <FAQ />
      <QuoteBanner />
      <Testimonials />
      <News />
      <Blog />
    </div>
  );
}
