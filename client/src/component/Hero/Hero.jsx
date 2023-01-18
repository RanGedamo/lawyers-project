import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import { Route } from "react-router-dom";
import Blob from "../Shape/Blob";
import PopUpRole from "../pop/PopUpBtn";

export default function Hero() {
  const { onOpen } = useDisclosure()
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              Need a lawyer?
            </Text>
            <br />
            <Text as={"span"} color={"blue.400"}>
              Find legal experts to give you the guidance you need
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Hundreds of independent professionals to help you create, navigate,
            and translate legal documents; register a trademark; or get general
            advice.{" "}
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >{onOpen? <PopUpRole text='Get started'/>: 
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"blue"}
              bg={"blue.400"}
              _hover={{ bg: "blue.500" }}
              // onClick={()=>document.documentElement.scrollTo(0,1500) }
            >
              Get started
            </Button>}
            
              <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}
              onClick={()=>document.documentElement.scrollTo(0,2000) }>
                How It Works
              </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Blob
            w={"150%"}
            h={"150%"}
            position={"absolute"}
            top={"-20%"}
            left={0}
            zIndex={-1}
            color={useColorModeValue("blue.50", "blue.400")}
          />
          <Box
            position={"relative"}
            height={"300px"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src="animations/hero-lawyers.png"
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
