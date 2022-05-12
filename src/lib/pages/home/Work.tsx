import { Grid } from '@chakra-ui/react';
import PagesHero from '../../components/sections/PagesHero';
import Work from '../../components/sections/Work';

const Works = () => (
  <>
    <PagesHero />
    <Grid
      templateColumns="repeat(2,1fr)"
<<<<<<< HEAD
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
=======
      w={["100%","90%"]}
      mx="auto"
      gap={['2','10']}
      p={['1rem', '5rem']}
    >
      <Work color="#f8c8ff" />
      <Work color="#cfafff" />
      <Work color="#f8c8ff" />
      <Work color="#cfafff" />
      <Work color="#f8c8ff" />
      <Work color="#cfafff" />
  </Grid>
>>>>>>> fb3b1acbb40e943caccfd560de4f7ce7455c3481
  </>
);

export default Works;
