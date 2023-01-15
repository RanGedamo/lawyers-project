import { useState } from "react";
import { Categories } from "../../sidder";
import { Lawyers } from "../../sidder";
import { useParams } from "react-router-dom";
import {
  SelectedCategory,
  HomeLawyer,
} from "../../AppRoute/featuresRoute/categories";
import { Spinner } from "@chakra-ui/react";
import FilterLawyer from "../../component/Section/FilterLawyer";

export default function Filter() {
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
      {result.length > 0 ? (
        <div>
          <h1>filter by category</h1>
          <FilterLawyer lawyers={result} id={id} />
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}
