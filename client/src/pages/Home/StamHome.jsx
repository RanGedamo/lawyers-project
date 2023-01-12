import { useState } from "react";
import { GridItem, Box, Grid, Container } from "@chakra-ui/react";
import { Hero, HowToHire, SupportBoard, Category, ContactUs, HomeLawyer} from "../../AppRoute/featuresRoute/home"
import { Lawyers } from "../../sidder";
import {Categories} from "../../sidder";


export default function Home() {
  const [lawyers,setLawyers] = useState(Lawyers)
  const [categories,setCategories] = useState(Categories)
  return (
    <>
      <Container>
        <Hero />
      </Container>
      <Grid
        templateRows="repeat(5)"
        templateColumns="repeat(6)"
        gap={4}
      >
        <GridItem colSpan={4}>
          <Box bg={"blue.700"} borderRadius="70px">
            <SupportBoard />
          </Box>
        </GridItem>
        <GridItem colSpan={5} bg="papayawhip">
        <Category categories={categories}/>
        </GridItem>
        <GridItem colSpan={5} bg="papayawhip">
        <HomeLawyer lawyers={lawyers} />
        </GridItem>
        <GridItem colSpan={2}>
          <ContactUs bg={"blue.400"} />
        </GridItem>
        <GridItem colSpan={4}>
          <HowToHire />
        </GridItem>
      </Grid>
    </>
  );
}