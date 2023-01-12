import { useState } from "react";
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { Categories } from "../../sidder";
import { useParams } from "react-router-dom";
import SelectedCategory from "../../component/Section/SelectedCategory";
import { Lawyers } from "../../sidder";
import HomeLawyer from "../../component/cards/HomeLawyer";

export default function Filter() {
  const [categories, setCategories] = useState(Categories);

  let { id } = useParams();

  const Category = () => {
    const Wanted = Categories.find((category) => category._id === id);
    return Wanted;
  };

  let select = Category();

  const lawyerCategories = []

  // const GetLawyerCategories = () => {
  //   Lawyers.map((lawyer) =>
  //     lawyer.filedCategory.map((category) =>
  //       lawyerCategories.push(category.categoryName)
  //     )
  //   );
  //   return lawyerCategories;
  // };

  // const LawyersByCategory = () => {
  //   const Wanted = lawyerCategories.filter(
  //     (lawyersCategory) => lawyersCategory === select.categoryName
  //   );
  //   return Wanted;
  // };

// const GetRightToCategory = () => {
//   const user = Lawyers.filter((lawyer ,i)=> lawyer.filedCategory[i].categoryName === select.categoryName
//   // lawyer.filedCategory[i].categoryName === select.categoryName

//   //   lawyer?.filedCategory?.map((category) =>{

//   //     if (category?.categoryName === select?.categoryName) {
//   //       console.log(lawyer);
//   //       return category?.categoryName
//   //       // LawyersByCategory.push(lawyer);
//   //     }
//   //   }    
//   // )
//   ) 
//   console.log(user)

// }
const GetRightToCategory = () => {
  return Lawyers.filter((lawyer ,i)=> console.log( select.categoryName)
  // lawyer.filedCategory[i].categoryName === select.categoryName

  //   lawyer?.filedCategory?.map((category) =>{

  //     if (category?.categoryName === select?.categoryName) {
  //       console.log(lawyer);
  //       return category?.categoryName
  //       // LawyersByCategory.push(lawyer);
  //     }
  //   }    
  // )
  ) 


}

  return (
    <>
    {/* { console.log(LawyersByCategory) } */}
    { GetRightToCategory()} 
    {/* { console.log(select.categoryName) }  */}

      {/* {console.log(GetLawyerCategories())}
      {console.log(LawyersByCategory())} */}
      <SelectedCategory select={select} />
      <HomeLawyer lawyers={GetRightToCategory()}/>
      
    </>
  );
}
