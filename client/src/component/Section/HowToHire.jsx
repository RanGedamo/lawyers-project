import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAssistant, FcBusinessman , FcBusinessContact,FcCurrencyExchange} from 'react-icons/fc';

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
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={7}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'Have a Law problem'}
          text={
            "We will be happy to assist you. Please provide as much information as possible, and we will help you to find the most suitable lawyer for your needs."
            }
        />
        <Feature
          icon={<Icon as={FcBusinessman} w={10} h={10} />}
          title={'Find the right lawyer for you'}
          text={
            "Get qualified proposals within 24 hours, and meet the candidates you’re excited about."
          }
        />
        <Feature
          icon={<Icon as={FcBusinessContact} w={10} h={10} />}
          title={'Collaborate easily'}
          text={
            "Use Themis to chat, share files, and track suits progress right from the app."
          }
        />
        <Feature
          icon={<Icon as={FcCurrencyExchange} w={10} h={10} />}
          title={'Payment simplified'}
          text={
            "Receive invoices and make payments through Themis. Only pay for work you authorize."
          }
        />
      </SimpleGrid>
    </Box>
  );
}