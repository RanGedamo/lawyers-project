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
import SelectedCategory from "../../component/Section/SelectedCategory";

export default function Filter() {
  const [categories, setCategories] = useState(Categories);

  // const found = categories.find(category => );

  return (
    <>

    <SelectedCategory/>
    </>
  );
}
