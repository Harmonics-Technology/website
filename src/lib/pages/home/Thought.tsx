/* eslint-disable import/no-unresolved */
import Gist from 'lib/components/sections/Gist';
import News from 'lib/components/sections/News';
import ThoughtsHero from 'lib/components/sections/ThoughtsHero';

const Thought = () => (
  <>
    <ThoughtsHero />
    <Gist />
    <News />
  </>
);
export default Thought;
