import { useState } from "react";
import { Stack, Container, Box, Flex, Text, Heading, SimpleGrid } from "@chakra-ui/react";
import SubCategory from "./SubCategory";

export default function SelectedCategory({ select }) {

  return (
    <Box bg={"gray.800"} position={"relative"} key={select._id}>
      {/* {console.log(select)} */}
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: "none", lg: "flex" }}
        backgroundImage={select.categoryImg}
        backgroundSize={"cover"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={"absolute"}
        width={"50%"}
        insetY={0}
        right={0}
      >
        <Flex
          bgGradient={"linear(to-r, gray.800 10%, transparent)"}
          w={"full"}
          h={"full"}
        />
      </Flex>
      <Container maxW={"7xl"} zIndex={10} position={"relative"}>
        <Stack direction={{ base: "column", lg: "row" }}>
          <Stack
            flex={1}
            color={"gray.400"}
            justify={{ lg: "center" }}
            py={{ base: 4, md: 20, xl: 60 }}
          >
            <Box mb={{ base: 8, md: 20 }}>
              <Heading
                color={"gray.500"}
                mb={5}
                fontFamily={"heading"}
                textTransform={"uppercase"}
                fontSize={{ base: "3xl", md: "5xl" }}
              >
                {select.categoryName}
              </Heading>
            </Box>
            {select.subCategory.map((subCategory) => (
              <SubCategory subCategory={subCategory}/>
              // <SimpleGrid
              //   columns={{ base: 1, md: 2 }}
              //   spacing={10}
              //   key={subCategory._id}
              // >
              //   <Box>
              //     <Text fontSize={"xl"} color={"gray.400"}>
              //       <Text as={"span"} fontWeight={700} color={"white"}>
              //         {subCategory.name}
              //       </Text>
              //     </Text>
              //   </Box>
              // </SimpleGrid>
            ))}
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}