import { useState } from "react";
import { Stack, Container, Box, Flex, Text, Heading, SimpleGrid, } from "@chakra-ui/react";
import { Categories } from "../../sidder";
import { Lawyers } from "../../sidder";
import { useParams } from "react-router-dom";
import { SelectedCategory,HomeLawyer } from "../../sidder"

export default function Filter() {

  const [categories, setCategories] = useState(Categories);
  const [lawyers, setLawyers] = useState(Lawyers);

  let { id } = useParams();

  const Category = () => {
    const Wanted = Categories.find((category) => category._id === id);
    return Wanted;
  };

  let select = Category();

  let result = lawyers.filter((lawyer) =>
    lawyer.filedCategory
      .map((category) => category.categoryName)
      .includes(select.categoryName)
  );

  return (
    <>
      <SelectedCategory select={select} />
      <HomeLawyer lawyers={result} />
    </>
  );
}
