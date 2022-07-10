import { Box, Text } from '@chakra-ui/react';
import PagesHero from 'lib/components/sections/PagesHero';
import React from 'react';

type Props = {};

const Mypost = (props: Props) => {
  return (
    <Box>
      <Box pb="40px">
        <PagesHero
          title="Beginner guide to UI/UX"
          subtitle="In this article, you will learn “What is UI?”, “What is UX?”, and the Difference between UI and UX design."
        />

        <Text w="90%" mx="auto" py="30px">
          Often times, the term UI and UX Design are being used mutually in the
          industry and outside the design industry. Incase you don’t know, UI
          and UX are two different words but work together. UI means User
          Interface while UX means User Experience. As a product designer when
          being ask by friends or people outside the tech industry what UI and
          UX Design is, i personally tell them that UI refers to how your design
          (Web, Mobile,…) looks while UX refers to how your applications works
          and how it feels.
        </Text>
      </Box>
    </Box>
  );
};

export default Mypost;
