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
import { Link, useParams } from "react-router-dom";
import { Categories } from "../../sidder";
import PopUpRole from "../pop/PopUpBtn";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { useEffect, useState } from "react";
import { getCategory } from "../../services/categoryService";
import { getLawyers } from "../../services/lawyerService";

export default function CategoryNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [category, setCategory] = useState([]);
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    getCategory()
    .then((res) => setCategory(res))
    .catch((error) => console.error(error));
  },[]);
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
        <Link to={"/"}>
          <>Themis</>
        </Link>
        <HStack as={"nav"} spacing={4} display={{ base: "none", lg: "flex" }}>
          {category?.map((category, i) => (
            <Link key={i} to={`/category/${category._id}`}>
              <i key={i}>{category.name}</i>
            </Link>
          ))}
        </HStack>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Menu>
              <Stack
                flex={{ base: 1, md: 0 }}
                justify={"flex-end"}
                direction={"row"}
                spacing={6}
              >
                <ColorModeSwitcher justifySelf="flex-end" />
                <PopUpRole text='Sign in'/>
              </Stack>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {category?.map((category, i) => (
              <Link key={i} to={`/category/${category._id}`}>
                {category.categoryName}
              </Link>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}