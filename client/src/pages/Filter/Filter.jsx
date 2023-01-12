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

  let result = Lawyers.filter((lawyer) =>
    lawyer.filedCategory
      .map((category) => category.categoryName)
      .includes(select.categoryName)
  );

  return (
    <>
      <SelectedCategory select={select} />

      <HomeLawyer lawyers={result} id={id} />

    </>
  );
}
