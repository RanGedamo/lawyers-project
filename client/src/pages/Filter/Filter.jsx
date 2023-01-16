import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  SelectedCategory,
  HomeLawyer,
} from "../../AppRoute/featuresRoute/categories";
import { Spinner } from "@chakra-ui/react";
import FilterLawyer from "../../component/Section/FilterLawyer";
import { getCategoryById } from "../../services/categoryService";
import { useEffect } from "react";
import { getLawyers } from "../../services/lawyerService";

export default function Filter() {
  const [lawyers, setLawyers] = useState([]);
  const [filter, setFilter] = useState([]);
  const [category, setCategory] = useState({});

  let id = useParams().id;

  useEffect(() => {
    getCategoryById(id)
      .then((res) => setCategory(res))
      .catch((error) => console.error(error));
    getLawyers().then((res) => setLawyers(res));
  }, []);

  let result = lawyers.filter((lawyer) =>
   lawyer.category[0].name.includes(category.name)
  );

  return (
    <>
      <SelectedCategory category={category} />
      {result?.length > 0 ? (
        <div>
          <i><h1>our category lawyers</h1></i>
          <FilterLawyer lawyers={result} id={id} />
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}