/* eslint-disable import/no-unresolved */
import Gist from 'lib/components/sections/Gist';
import News from 'lib/components/sections/News';
import PagesHero from 'lib/components/sections/PagesHero';
// import ThoughtsHero from 'lib/components/sections/ThoughtsHero';

const Thought = () => (
  <>
    <PagesHero />
    <Gist />
    <News />
  </>
);
export default Thought;
