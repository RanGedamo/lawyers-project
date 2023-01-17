
import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import Blob from "../Shape/Blob";

export default function SubCategory({ subCategory }) {

  return (
    <Box
      marginTop={{ base: "1", sm: "5" }}
      display="flex"
      flexDirection={{ base: "column", sm: "row" }}
      justifyContent="space-between"
      key={subCategory._id}
    >
      <Box
        display="flex"
        flex="1"
        marginRight="3"
        position="relative"
        alignItems="center"
        my='10'
      >
        <Box
          width={{ base: "100%", sm: "85%" }}
          zIndex="2"
          marginLeft={{ base: "0", sm: "5%" }}
          marginTop="5%"
        >
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"} >
              
            <Blob
              w={"100%"}
              h={"300px"}
              position={"absolute"}

              left={0}
              zIndex={-1}
              color={useColorModeValue("blue.50", "blue.400")}
            />
            <Box
              position={"relative"}
              height={"100"}
              width={"full"}
              overflow={"hidden"}
            >
              <Image
                alt={"sub category Image"}
                fit={"cover"}
                align={"center"}
                w={"80%"}
                h={"100%"}
                src={subCategory.img}
                className="subCategory-photo"
                data-aos="fade-left"
                rounded={'xl'}
                justify
              />
            </Box>
          </Flex>

          {/* <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={subCategory.img}
                alt="sub category"
                objectFit="contain"
              />
            </Link> */}
        </Box>
        <Box zIndex="1" width="100%" position="absolute" height="100%">
          <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Text>
        </Box>
      </Box>
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
        marginTop={{ base: "3", sm: "0" }}
      >
        <Heading marginTop="1">
          <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
            {subCategory.name}
          </Link>
        </Heading>
        <Text
          as="p"
          marginTop="2"
          color={useColorModeValue("gray.700", "gray.200")}
          fontSize="lg"
        >
          {subCategory.services}
        </Text>
      </Box>
    </Box>
  );
}