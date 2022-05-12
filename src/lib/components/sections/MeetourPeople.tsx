import { Box, Grid, Heading, Text } from '@chakra-ui/react';

interface EmployeeInfo {
  name: string;
  title: string;
}

const MeetourPeople = () => {
  const employeeInfo: EmployeeInfo[] = [
    {
      name: 'john doe',
      title: 'product designer',
    },

    {
      name: 'john doe',
      title: 'product designer',
    },

    {
      name: 'john doe',
      title: 'product designer',
    },

    {
      name: 'john doe',
      title: 'product designer',
    },

    {
      name: 'john doe',
      title: 'product designer',
    },

    {
      name: 'john doe',
      title: 'product designer',
    },

    {
      name: 'john doe',
      title: 'product designer',
    },

    {
      name: 'john doe',
      title: 'product designer',
    },
  ];

  return (
    <Box mt="30px">
      <Box
        w="95%"
        margin="auto"
        sx={{
          '@media(min-width: 800px)': {
            width: '90%',
          },
        }}
      >
        <Heading
          fontSize="24"
          lineHeight={1.5}
          sx={{
            '::first-letter': {
              textTransform: 'uppercase',
            },

            '@media(min-width: 800px)': {
              fontSize: '48px',
            },
          }}
          textAlign={['center', 'left']}
        >
          meet our people
        </Heading>

        <Grid
          templateColumns={[
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
            'repeat(4, 1fr)',
          ]}
          columnGap={4}
          mt="20px"
        >
          {employeeInfo.map((details, index) => (
            <Box key={index} mb="20px">
              <Box
                w="100%"
                h={['193px', '400px']}
                bg="brand.700"
                borderRadius="10px"
              />

              <Box margin="10px auto">
                <Text fontWeight={700} textTransform="capitalize">
                  {details.name}
                </Text>
                <Text textTransform="capitalize">{details.title}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MeetourPeople;
