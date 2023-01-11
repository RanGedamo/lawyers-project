import { useState } from "react";
import { Stack, Container, Box, Flex, Text, Heading, SimpleGrid, } from "@chakra-ui/react";
import { Categories } from "../../sidder";
import { useParams } from "react-router-dom";
import SelectedCategory from "../../component/Section/SelectedCategory";

export default function Filter() {
  const [categories, setCategories] = useState(Categories);

  let { id } = useParams();

  const Category = () => {
    const Wanted = Categories.find((category) => category._id === id);
    return Wanted;
  };

  let select = Category();

  return (
    <>
    <SelectedCategory select={select}/>
    </>
  );
}
