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
  Avatar,
  GenericAvatarIcon,
  WrapItem,
  AvatarBadge,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {  useNavigate } from "react-router-dom";
import { Categories } from "../../sidder";
import PopUpRole from "../pop/PopUpBtn";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { useEffect, useState } from "react";
import { getCategory } from "../../services/categoryService";
import { getLawyers } from "../../services/lawyerService";
import Cookies from "js-cookie";
import { MDBInput } from "mdb-react-ui-kit";

// export default function CategoryNavbar() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [category, setCategory] = useState([]);
//   const [lawyers, setLawyers] = useState([]);

// const navigate = useNavigate()
//   // console.log(Cookies.get('user'));
//   useEffect(() => {
//     getCategory()
//       .then((res) => setCategory(res))
//       .catch((error) => console.error(error));
//   }, []);

//   const logOut = ()=>{
//     Cookies.remove("user")
//     return navigate('/')
//   }
//   return (
//     <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
//       <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
//         <IconButton
//           size={"md"}
//           icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//           aria-label={"Open Menu"}
//           display={{ md: "none" }}
//           onClick={isOpen ? onClose : onOpen}
//         />
//         <a href={"/"}>
//           <>Themis</>
//         </a>
//         <HStack as={"nav"} spacing={4} display={{ base: "none", lg: "flex" }}>
//           {category?.map((category, i) => (
//             <a  key={i} href={`/category/${category._id}`}>
//               <i  key={i}>{category.name}</i>
//             </a>
//           ))}
//         </HStack>
//         <Flex alignItems={"center"}>
//           <Stack direction={"row"} spacing={7}>
//             <Menu>
//               <Stack
//                 flex={{ base: 1, md: 0 }}
//                 justify={"flex-end"}
//                 direction={"row"}
//                 spacing={6}
//               >
//                 <ColorModeSwitcher justifySelf="flex-end" />
//                 {
//                   Cookies.get('user') ? <WrapItem>
//                     <Menu isLazy>
//                       <MenuButton>
//                         <Avatar name={`${Cookies.get('user').slice(0, 1)}`} src='https://bit.ly/broken-link' >
//                           <AvatarBadge boxSize='1.2em' bg='green.500' />
//                         </Avatar>
//                       </MenuButton>
//                       <MenuList>
//                         {/* MenuItems are not rendered unless Menu is open */}
//                         <MenuItem onClick={() => logOut()}>LogOut</MenuItem>
//                         {/* <MenuItem>Open Closed Tab</MenuItem>
//     <MenuItem>Open File</MenuItem> */}
//                       </MenuList>
//                     </Menu>
//                   </WrapItem> :
//                     <PopUpRole text='Sign in'/>
//                 }

//               </Stack>
//             </Menu>
//           </Stack>
//         </Flex>
//       </Flex>

//       {isOpen ? (
//         <Box pb={4} display={{ md: "none" }}>
//           <Stack as={"nav"} spacing={4}>
//           {category?.map((category, i) => (
//             <a key={i} href={`/category/${category._id}`}>
//               <i key={i}>{category.name}</i>
//             </a>
//           ))}
//           </Stack>
//         </Box>
//       ) : null}
//     </Box>
//   );
// }
export default function CategoryNavbar({bool}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

    const [category, setCategory] = useState([]);
    const [lawyers, setLawyers] = useState([]);
  
  const navigate = useNavigate()
    useEffect(() => {
      getCategory()
        .then((res) => setCategory(res))
        .catch((error) => console.error(error));
    }, []);
  
    const logOut = ()=>{
      Cookies.remove("user")
      Cookies.remove("rate")
      return navigate('/')
    }
  switch (bool){
    case true:
  return (
    <Box className="" px={4}>
    <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
      <IconButton
        size={"md"}
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label={"Open Menu"}
        display={{ md: "none" }}
        onClick={isOpen ? onClose : onOpen}
      />
      <a href={"/"}>
        <>Themis</>
      </a>
      <HStack as={"nav"} spacing={4} display={{ base: "none", lg: "flex" }}>
        {category?.map((category, i) => (
          <a  key={i} href={`/category/${category._id}`}>
            <i  key={i}>{category.name}</i>
          </a>
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
              {
                Cookies.get('user') ? <WrapItem>
                  <Menu isLazy>
                    <MenuButton>
                      <Avatar name={`${Cookies.get('user').slice(0, 1)}`} src='https://bit.ly/broken-link' >
                        <AvatarBadge boxSize='1.2em' bg='green.500' />
                      </Avatar>
                    </MenuButton>
                    <MenuList>
                      {/* MenuItems are not rendered unless Menu is open */}
                      <MenuItem onClick={() => logOut()}>LogOut</MenuItem>
                      {/* <MenuItem>Open Closed Tab</MenuItem>
  <MenuItem>Open File</MenuItem> */}
                    </MenuList>
                  </Menu>
                </WrapItem> :
                  <PopUpRole text='Sign in'/>
              }
            </Stack>
          </Menu>
        </Stack>
      </Flex>
    </Flex>

    {isOpen ? (
      <Box pb={4} display={{ md: "none" }}>
        <Stack as={"nav"} spacing={4}>
        {category?.map((category, i) => (
          <a key={i} href={`/category/${category._id}`}>
            <i key={i}>{category.name}</i>
          </a>
        ))}
        </Stack>
      </Box>
    ) : null}
  </Box>
  );
    case false:
  return (
    <Box className="" px={4}>
    <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
      <IconButton
        size={"md"}
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label={"Open Menu"}
        display={{ md: "none" }}
        onClick={isOpen ? onClose : onOpen}
      />
      <a href={"/"}>
        <>Themis</>
      </a>

      <Flex alignItems={"center"}>
        <Stack direction={"row"} spacing={7}>
        <MDBInput
              label="Search Bar"
              id="form1"
              type="text"
              name="SearchBar"
            />
          <Menu>
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={6}
            >
              <ColorModeSwitcher justifySelf="flex-end" />
              {
                Cookies.get('user') ? <WrapItem>
                  <Menu isLazy>
                    <MenuButton>
                      <Avatar name={`${Cookies.get('user').slice(0, 1)}`} src='https://bit.ly/broken-link' >
                        <AvatarBadge boxSize='1.2em' bg='green.500' />
                      </Avatar>
                    </MenuButton>
                    <MenuList>
                      {/* MenuItems are not rendered unless Menu is open */}
                      <MenuItem onClick={() => logOut()}>LogOut</MenuItem>
                      {/* <MenuItem>Open Closed Tab</MenuItem>
  <MenuItem>Open File</MenuItem> */}
                    </MenuList>
                  </Menu>
                </WrapItem> :
                  <PopUpRole text='Sign in'/>
              }

            </Stack>
          </Menu>
        </Stack>
      </Flex>
    </Flex>

    {isOpen ? (
      <Box pb={4} display={{ md: "none" }}>
        <Stack as={"nav"} spacing={4}>
        {category?.map((category, i) => (
          <a key={i} href={`/category/${category._id}`}>
            <i key={i}>{category.name}</i>
          </a>
        ))}
        </Stack>
      </Box>
    ) : null}
  </Box>
  );
    default:
      return ""
  }

}