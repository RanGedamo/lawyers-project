import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function HowToHire() {
  return (
    <Box p={4} className="text-start" >
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={7}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'Post a job (it’s free)'}
          text={
            'Tell us what you need. Provide as many details as possible, but don’t worry about getting it perfect'
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Talent comes to you'}
          text={ 
            'Get qualified proposals within 24 hours, and meet the candidates you’re excited about.'
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Collaborate easily'}
          text={
            'Use Upwork to chat or video call, share files, and track project progress right from the app.'
          }
        />
        <Feature 
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Payment simplified'}
          text={
            'Receive invoices and make payments through Upwork. Only pay for work you authorize.'
          }
        />
      </SimpleGrid>
    </Box>
  );
}