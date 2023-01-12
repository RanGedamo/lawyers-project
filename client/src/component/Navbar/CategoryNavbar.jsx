import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { Categories } from "../../sidder";

export default function CategoryNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          {Categories.map((category, i) => (
            <Link key={i} to={`/category/${category._id}`}>{category.categoryName}</Link>
          ))}{" "}
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Categories.map((category, i) => (
              <Link key={i} to={`/category/${category._id}`}>{category.categoryName}</Link>
            ))}{" "}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
