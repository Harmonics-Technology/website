import { Grid } from '@chakra-ui/react';
import Work from '../../components/sections/Work';
import PagesHero from '../../components/sections/PagesHero';

const Works = () => (
  <>
    <PagesHero/>
    <Grid
      templateColumns="repeat(2,1fr)"
      w={["100%","90%"]}
      mx="auto"
      gap={['2','10']}
      p={['1rem', '5rem']}
    >
      <Work />
      <Work />
      <Work />
      <Work />
      <Work />
      <Work />
  </Grid>
  </>
);

export default Works;
