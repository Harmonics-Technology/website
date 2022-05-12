import { Grid } from '@chakra-ui/react';
import PagesHero from '../../components/sections/PagesHero';
import Work from '../../components/sections/Work';

const Works = () => (
  <>
    <PagesHero />
    <Grid
      templateColumns="repeat(2,1fr)"
      w={['full', '95%']}
      mx="auto"
      mt="2rem"
      gap={[4, 20]}
      p={['1rem', '2rem']}
    >
      <Work bg="#f8c8ff" />
      <Work bg="#CFAFFF" />
      <Work bg="#f8c8ff" />
      <Work bg="#CFAFFF" />
      <Work bg="#f8c8ff" />
      <Work bg="#CFAFFF" />
    </Grid>
  </>
);

export default Works;
