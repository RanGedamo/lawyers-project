import { Stack, Container, Box, Flex, Text, Heading, SimpleGrid } from "@chakra-ui/react";
import SubCategory from "./SubCategory";

export default function categoryedCategory({ category }) {

  return (
    <Box bg={"light.800"} position={"relative"} key={category._id} >

      <Flex
        flex={1}
        zIndex={0}
        display={{ base: "none", lg: "flex" }}
        backgroundImage={category.categoryImg}
        backgroundSize={"cover"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={"absolute"}
        width={"50%"}
        height={"90%"}
        insetY={0}
        right={0}
      >
        <Flex
          bgGradient={"linear(to-r, light.800 70%, transparent)"}
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
                {category.categoryName}
              </Heading>
            </Box>
            {category.subCategory?.map((subCategory) => (
              <SubCategory subCategory={subCategory}/>
            ))}
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}