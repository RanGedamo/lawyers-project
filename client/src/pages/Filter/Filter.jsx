import { useState } from "react";
import { Categories } from "../../sidder";
import { Lawyers } from "../../sidder";
import { useParams } from "react-router-dom";
import {
  SelectedCategory,
  HomeLawyer,
} from "../../AppRoute/featuresRoute/categories";
import { Spinner } from "@chakra-ui/react";

export default function Filter() {
  const [categories, setCategories] = useState(Categories);
  const [lawyers, setLawyers] = useState(Lawyers);
  const [filter, setFilter] = useState([]);

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

  // const = fiilterByParams = () => {
  //   console.log(fg)
  // }

  return (
    <>
      <SelectedCategory select={select} />
      {result.length > 0 ? (
        <div>
          <h1>filter by category</h1>
          <HomeLawyer lawyers={result} />
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}
