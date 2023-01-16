import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  SelectedCategory,
  HomeLawyer,
} from "../../AppRoute/featuresRoute/categories";
import { Spinner } from "@chakra-ui/react";
// import FilterByCategory from "../../component/Section/FilterByCategory";
// import FilterBar from "../../component/Section/FilterBar";
// import FilterPure from "../../component/Section/FilterPure";
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
    lawyer.category.map((category) => category.name.includes(category.name))
  );

  return (
    <>
      <SelectedCategory category={category} />
      {result?.length > 0 ? (
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
