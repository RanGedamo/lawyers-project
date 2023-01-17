import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PopUpRole from "../pop/PopUpBtn";
import Chat from "../chat/Chat";

export default function Navbar() {

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link to={"/"}>
            <Box>Themis</Box>
          </Link>

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
                    <PopUpRole />
                </Stack>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <div className="chat d-flex sticky-top" style={{ height: "0px", justifyContent: "end", width: "100" }}>
        {/* <Chat /> */}
      </div>
    </>
  );
}
