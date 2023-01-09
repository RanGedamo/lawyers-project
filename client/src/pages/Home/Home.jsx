import { Box } from '@chakra-ui/react';
import react from 'react';
import Hero from '../../component/Hero/Hero';
import Scheduling from '../../component/Section/Scheduling';
import HowToHire from '../../component/Section/HowToHire';
import SupportBoard from '../../component/Section/SupportBoard';

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

