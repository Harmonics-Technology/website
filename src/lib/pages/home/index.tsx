/* eslint-disable import/no-unresolved */
import About from 'lib/components/sections/About';
import Courses from 'lib/components/sections/Courses';
import Hero from 'lib/components/sections/Hero';
import Projects from 'lib/components/sections/Projects';
import Services from 'lib/components/sections/Services';
import Testimonials from 'lib/components/sections/Testimonial';
import Thoughts from 'lib/components/sections/Thoughts';

const Home = () => (
  <>
    <Hero />
    <About />
    {/* <Courses /> */}
    <Services />
    <Projects />
    <Testimonials />
    <Thoughts />
  </>
);
export default Home;
