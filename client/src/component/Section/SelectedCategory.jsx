import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { MDBCol, MDBRipple, MDBRow } from "mdb-react-ui-kit";
import SubCategory from "./SubCategory";
import './selectedCategory.css'
let xl = [1, 2, 3, 4];
export default function categoryedCategory({ category }) {
  return (
    <>
      <img
        src={category.categoryImg}
        className="img-fluid shadow-2-strong imageCoverCategory"
        alt=""
      />
      <MDBRow className=" row-cols-md-4 row-cols-sm-2">
        {category.subCategory?.map((subCategory) => {
          return (
            <MDBCol size={12} className="mt-4 mb-8">
              <div className=" fw-bold mb-3 mt-5">{subCategory.name}</div>
              <MDBRipple
                className="bg-image hover-overlay shadow-1-strong rounded"
                rippleTag="div"
                rippleColor="light"
              >
                <img src={subCategory.img} className="containerCategory" />
                <a href="#!"></a>
              </MDBRipple>
            </MDBCol>
          );
        })}
      </MDBRow>
    </>
  );
}
// <Box bg={"light.800"} position={"relative"} key={category._id} >
//   <Flex
//     flex={3}
//     zIndex={0}
//     display={{ base: "none", md: "flex" }}
//     backgroundImage={category.categoryImg}
//     backgroundSize={"cover"}
//     backgroundPosition="center"
//     backgroundRepeat="no-repeat"
//     position={"absolute"}
//     width={"100%"}
//     height={"85%"}
//     insetY={0}
//     right={0}
//     >
//     <Flex
//       bgGradient={"linear(to-r, light.800 70%, transparent)"}
//       w={"full"}
//       h={"full"}
//       />
//   </Flex>
//   <Container maxW={"7xl"} zIndex={10} position={"relative"}>
//     <Stack direction={{ base: "column", lg: "row" }}>
//       <Stack
//         flex={1}
//         color={"gray.400"}
//         justify={{ lg: "center" }}
//         py={{ base: 4, md: 20, xl: 60 }}
//         >
//         <Box mb={{ base: 8, md: 20 }}>
//           <Heading
//             color={"gray.500"}
//             mb={5}
//             fontFamily={"heading"}
//             textTransform={"uppercase"}
//             fontSize={{ base: "3xl", md: "5xl" }}
//             >
//             {category.categoryName}
//           </Heading>
//         </Box>
//         {category.subCategory?.map((subCategory) => (
//           <SubCategory subCategory={subCategory}/>
//           ))}
//       </Stack>
//       <Flex flex={1} />
//     </Stack>
//   </Container>
// </Box>
