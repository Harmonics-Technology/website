import {
  Box,
  Image,
  Heading,
  HStack,
  Text,
  Avatar,
  VStack,
  Button,
  Stack,
} from '@chakra-ui/react';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import {
  AiOutlineUser,
  AiOutlineCalendar,
  AiOutlineComment,
} from 'react-icons/ai';
import { PrimaryInput } from '../../components/Utils/PrimaryInput';
import { PrimaryTextArea } from 'lib/components/Utils/PrimaryTextArea';

interface FormInputProps {
  fullName: string;
  comment: string;
}

const schema = yup.object().shape({
  fullName: yup.string().email().required(),
  comment: yup.string().required(),
});

const Mypost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormInputProps>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const router = useRouter();

  const onSubmit = (data: FormInputProps) => {};
  return (
    <Box bg="#333333" pt={['.1rem', '3rem']}>
      <Box
        w={['full', '90%']}
        mx="auto"
        p={['1rem 1rem', '3rem']}
        bgColor="white"
      >
        <Box pb="40px">
          <Heading fontSize={['1.8rem', '3rem']}>
            The Differences between UI design and UX design
          </Heading>
          <HStack
            columnGap={6}
            spacing={0}
            mt=".5rem"
            fontSize={['.8rem', '.9rem']}
            flexWrap="wrap"
          >
            <HStack fontSize=".9rem" align="center" color="gray.500">
              <AiOutlineUser />
              <Text>Akinyemi Oluwabukunmi</Text>
            </HStack>
            <HStack fontSize=".9rem" align="center" color="gray.500">
              <AiOutlineCalendar />
              <Text>18th June 2022</Text>
            </HStack>
            <HStack fontSize=".9rem" align="center" color="gray.500">
              <AiOutlineComment />
              <Text>0 Comments</Text>
            </HStack>
          </HStack>

          <Box w="full" h={['300px', '500px']} my="3rem">
            <Image
              src="/img8.jpg"
              alt="placeholder"
              w="full"
              h="full"
              objectFit="cover"
            />
          </Box>

          <Text w="full" mx="auto" fontSize={['1rem', '1.2rem']}>
            In this article, you will learn “What is UI?”, “What is UX?”, and
            the Difference between UI and UX design. <br />
            <br />
            Often times, the term UI and UX Design are being used mutually in
            the industry and outside the design industry. Incase you don’t know,
            UI and UX are two different words but work together. <br />
            <br /> UI means User Interface while UX means User Experience. As a
            product designer when being ask by friends or people outside the
            tech industry what UI and UX Design is, i personally tell them that
            UI refers to how your design (Web, Mobile,…) looks while UX refers
            to how your applications works and how it feels. Great design comes
            from balance. There are a lot of things to keep in mind: different
            audiences, different devices, different abilities. You have to make
            sure there’s a balance between all of those. You also have to keep
            design principles in mind: space, colour, typography, hierarchy, the
            grid, etc. The fundamentals of design were around long before we
            were born and will stay around long after. If you can understand the
            basics — make them a part of you and be holistic with your
            approach — you will be a great designer (Dan Leon Krause, Art
            Director at Razorfish).
            <br />
            <br /> User Interface Clarified Illustration image of UI/UX Design
            The “UI” in UI design stands for “user interface.” The user
            interface is the graphical layout of an application. It consists of
            the buttons users click on, the text they read, the images, sliders,
            text entry fields, and all the rest of the items the user interacts
            with. This includes screen layout, transitions, interface animations
            and every single micro-interaction. Any sort of visual element,
            interaction, or animation must all be designed. Most of the time,
            they’re presented before an audience. It serves a variety of
            purposes, making them powerful tools for convincing and teaching.
            User Experience Clarified Graphical representation of UX “UX” stands
            for “user experience. ”UX Design is all about enhancing user
            satisfaction and designing the complete user experience. <br />
            <br /> A user’s experience of the app is determined by how they
            interact with it. Is the experience smooth and intuitive or clunky
            and confusing? Does navigating the app feel logical or does it feel
            arbitrary? Does interacting with the app give people the sense that
            they’re efficiently accomplishing the tasks they set out to achieve
            or does it feel like a struggle? User experience is determined by
            how easy or difficult it is to interact with the user interface
            elements that the UI designers have created. <br />
            <br />A brief history of the user interface Back in the 1970’s, if
            you wanted to use a computer, you had to use the command line
            interface. The graphical interfaces used today didn’t yet exist
            commercially. For a computer to work, users needed to communicate
            via programming language, requiring seemingly infinite lines of code
            to complete a simple task. By the 1980’s the first graphical user
            interface (GUI) was developed by computer scientists at Xerox PARC.
            With this groundbreaking innovation, users could now interact with
            their personal computers by visually submitting commands through
            icons, buttons, menus, and checkboxes.
            <br />
            <br /> This shift in technology meant that anyone could use a
            computer, no coding required, and the personal computer revolution
            began. By 1984 Apple Computer released the Macintosh personal
            computer which included a point and click mouse. The Macintosh was
            the first commercially successful home computer to use this type of
            interface. The accessibility and prevalence of personal — and office
            — computers meant that interfaces needed to be designed with users
            in mind. If users couldn’t interact with their computers, they
            wouldn’t sell. As a result, the UI designer was born. As with any
            growing technology, the UI designer’s role has evolved as systems,
            preferences, expectations, and accessibility has demanded more and
            more from devices. Now UI designers work not just on computer
            interfaces, but mobile phones, augmented and virtual reality, and
            even “invisible” or screen less interfaces (also referred to as zero
            UI) like voice, gesture, and light.
            <br />
            <br /> Today’s UI designer has nearly limitless opportunities to
            work on websites, mobile apps, wearable technology, and smart home
            devices, just to name a few. As long as computers continue to be a
            part of daily life, there will be the need to make the interfaces
            that enable users of all ages, backgrounds, and technical experience
            can effectively use.
            <br />
            <br /> The Difference Between User Interface and User Experience
            User interface focuses on the product looks and functions. while
            User Experience focuses on a user’s journey to solve a certain
            problem. Which involves understanding and addressing the user’s
            needs and pain points. UI design is built on more of a standardized
            process,while UX design is extremely user research and data analysis
            intensive. UI design generally requires more technical capabilities
            and graphic design knowledge, while UX design envisions the user
            journey that people must use on a daily basis. <br />
            <br />
            <blockquote>
              In conclusion “You have to make the back of the fence that people
              won’t see look just as beautiful as the front, just like a great
              carpenter would make the back of a chest of drawers … Even though
              others won’t see it, you will know it’s there, and that will make
              you more proud of your design”. …
            </blockquote>
          </Text>

          <Stack
            align="flex-start"
            columnGap={8}
            direction={['column', 'row']}
            mt="2rem"
          >
            <Box w="full">
              <Text fontSize="1.5rem" fontWeight="500" mt="2rem" mb="1rem">
                Comments
              </Text>
              <VStack w="full">
                <Box w="full" bgColor="gray.100" p="1rem">
                  <HStack>
                    <Avatar />
                    <Box>
                      <Text>Innocent Kenneth</Text>
                      <Text fontSize=".8rem" color="gray.400">
                        12th June 2022
                      </Text>
                    </Box>
                  </HStack>
                  <Text mt=".5rem">Nice read. Congratulations</Text>
                </Box>
                <Box w="full" bgColor="gray.100" p="1rem">
                  <HStack>
                    <Avatar />
                    <Box>
                      <Text>Aderibigbe John</Text>
                      <Text fontSize=".8rem" color="gray.400">
                        7th June 2022
                      </Text>
                    </Box>
                  </HStack>
                  <Text mt=".5rem">Fantastic post</Text>
                </Box>
              </VStack>
            </Box>
            <Box w="full">
              <Text fontSize="1.5rem" fontWeight="500" mt="2rem" mb="1rem">
                Post a comment
              </Text>
              <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
                <VStack w="full" spacing={4}>
                  <PrimaryInput<FormInputProps>
                    name="fullName"
                    error={errors.fullName}
                    defaultValue=""
                    register={register}
                    label="Full name"
                    placeholder="Full name"
                  />
                  <PrimaryTextArea<FormInputProps>
                    name="comment"
                    error={errors.comment}
                    defaultValue=""
                    register={register}
                    minH="150px"
                    label="Comment"
                    placeholder="Your comment"
                  />
                  <Button
                    color="#fff"
                    w="100%"
                    bg="#A03CAE"
                    borderRadius="8px"
                    border="none"
                    type="submit"
                    _hover={{
                      color: '#A03CAE',
                      bg: '#fff',
                      border: '1px solid #A03CAE',
                    }}
                  >
                    Post Comment
                  </Button>
                </VStack>
              </form>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Mypost;
