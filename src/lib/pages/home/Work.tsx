import { Grid } from '@chakra-ui/react';
import PagesHero from '../../components/sections/PagesHero';
import Work from '../../components/sections/Work';

const Works = () => (
  <>
    <PagesHero
      title="Few Projects Done By Harmonics Technology"
      subtitle="We've brainstormed using the most recent code base standard to provide a problem solving platform to all our clients"
    />
    <Grid
      templateColumns="repeat(2,1fr)"
      w={['full', '95%']}
      mx="auto"
      mt="2rem"
      gap={[4, 20]}
      p={['1rem', '2rem']}
    >
      <Work
        bg="#f8c8ff"
        title="Property Mataaz"
        img="img4.jpg"
        content="Property Mataaz is an Estate Management agency located in Lagos
              Nigeria whose main drive is to provide solutions to property sale,
              rent, loans and other related services"
        link="https://propertymataaz.com"
      />
      <Work
        bg="#CFAFFF"
        title="Liquede"
        img="img3.jpg"
        content="Liquede is a product of Liquede Limited, a subsidiary of Oxygen
              Holdings. Banking services on Liquede are provided by Bank
              Limited, which is registered with the Central Bank of Nigeria.
              Payments on Liquede are made via Interswitch; a PCI DSS certified
              payment platform with bank-level security to ensure your
              transactions and financial information are kept safe at all times."
        link="https://liquede.com"
      />
    </Grid>
  </>
);

export default Works;
