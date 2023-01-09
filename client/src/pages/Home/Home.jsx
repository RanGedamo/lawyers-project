import react from 'react';
import Hero from '../../component/';
import Scheduling from '../../components/Section/Scheduling';
import HowToHire from '../../components/Section/HowToHire';
import SupportBoard from '../../components/Section/SupportBoard';
import Category from '../../components/Cards/Category';
import ContactUs from '../../components/Section/ContactUs';
import { SimpleGrid, Box, VStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <VStack spacing={4} align="center">
      <Box>
        <Hero />
      </Box>
      <Box bg={'blue.700'} borderRadius="70px">
        <SupportBoard />
      </Box>
      <Box>
        <Category />
      </Box>
      <Box>
        <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
          <Box height="80px">
            <ContactUs bg={'blue.400'} />
          </Box>
          <Box height="80px">
            <Scheduling bg={'blue.400'} />
          </Box>
        </SimpleGrid>
      </Box>
      <Box>
        <HowToHire />
      </Box>
    </VStack>
  );
}
