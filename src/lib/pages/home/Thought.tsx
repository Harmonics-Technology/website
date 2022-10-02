/* eslint-disable import/no-unresolved */
import Gist from 'lib/components/sections/Gist';
import News from 'lib/components/sections/News';
import PagesHero from 'lib/components/sections/PagesHero';
// import ThoughtsHero from 'lib/components/sections/ThoughtsHero';

const Thought = ({ data }: any) => {
  return (
    <>
      <PagesHero
        title="Catch up with recent stories"
        subtitle="Get the latest trends and software inventions from time to time."
      />
      <Gist data={data} />
      <News data={data} />
    </>
  );
};
export default Thought;
