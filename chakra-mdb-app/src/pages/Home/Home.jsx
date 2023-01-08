import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Scheduiling from "../../components/Section/Scheduling"

export default function Home() {
  return (
    <Box>
        <Navbar/>
        <Hero/>
        <Scheduiling/>
    </Box>
  )
};