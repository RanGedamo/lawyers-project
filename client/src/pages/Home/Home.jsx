import Hero from "../../component/Hero/Hero";
import Scheduling from "../../component/Section/Scheduling";
import HowToHire from "../../component/Section/HowToHire";
import SupportBoard from "../../component/Section/SupportBoard";
// import Category from '../../component/cards/Category';
import { GridItem, Box, Grid, Container } from "@chakra-ui/react";
import ContactUs from "../../component/Section/ContactUs";

export default function Home() {
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
        {/* <GridItem colSpan={5} bg="papayawhip"> */}
        {/* <Category /> */}
        {/* </GridItem> */}
        <GridItem colSpan={2}>
          <ContactUs bg={"blue.400"} />
        </GridItem>
        <GridItem colSpan={2}>
          <Scheduling bg={"blue.400"} />
        </GridItem>
        <GridItem colSpan={4}>
          <HowToHire />
        </GridItem>
      </Grid>
    </>
  );
}
