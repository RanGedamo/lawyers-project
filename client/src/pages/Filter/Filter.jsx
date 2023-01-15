import { useState } from "react";
import { Categories } from "../../sidder";
import { Lawyers } from "../../sidder";
import { useParams } from "react-router-dom";
import { SelectedCategory, HomeLawyer } from "../../AppRoute/featuresRoute/categories";
import { Spinner } from "@chakra-ui/react";
// import FilterByCategory from "../../component/Section/FilterByCategory";
// import FilterBar from "../../component/Section/FilterBar";
// import FilterPure from "../../component/Section/FilterPure";
import FilterLawyer from "../../component/Section/FilterLawyer";

export default function Filter() {
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

//   let filteredArray = result.filter(function(lawyer) {
//     return lawyer.available === true &&
//     lawyer.rate === rate &&
//     lawyer.location === location &&
//     lawyer.price === price &&
//     lawyer.experience === experience &&
//     lawyer.avgTime === avgTime;
// });

    //   // filter function
    //   // const fiilterByParams = (rate,location,price,experience,avgTime)=>{
    //   const fiilterByParams = (result)=>{
    //     if(result.length>1){
    //         const filter = result.filter((lawyer)=>
    //         lawyer.available === true &&
    //         lawyer.rate === rate &&
    //         lawyer.location === location &&
    //         lawyer.price === price &&
    //         lawyer.experience === experience &&
    //         lawyer.avgTime === avgTime
    //         )
    //         setFilter(filter);
    //     }
    //     else{
    //         console.log('no products to filter')
    //     } 
    // }
    // const returntoAllProducts=()=>{
    // }

  return (
    <>
      <SelectedCategory select={select} />
      {result.length > 0 ? (
        <div>
          <h1>filter by category</h1>
          {/* <FilterByCategory lawyers={result} id={id} /> */}
{/* <FilterPure  lawyers={result} /> */}
<FilterLawyer lawyers={result} id={id}/>
          {/* <HomeLawyer lawyers={result} id={id} /> */}
          {/* <FilterBar><FilterByCategory/></FilterBar> */}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}
