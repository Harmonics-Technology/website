import { Grid } from '@chakra-ui/react';
import Work from '../../components/sections/Work';
import PagesHero from '../../components/sections/PagesHero';

const Works = () => (
  <>
    <PagesHero/>
    <Grid
      templateColumns="repeat(2,1fr)"
      w="90%"
      mx="auto"
      gap={[3,10]}
      p={['2rem', '5rem']}
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
