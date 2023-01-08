import { Box } from '@chakra-ui/react';
import react from 'react';
import Hero from '../../components/Hero/Hero';
import Scheduling from '../../components/Section/Scheduling';
import HowToHire from '../../components/Section/HowToHire';
import SupportBoard from '../../components/Section/SupportBoard';

export default function Home() {
  return (
    <Box>
      <Hero />
      <SupportBoard />
      <Scheduling />
      <HowToHire />
    </Box>
  );
}
