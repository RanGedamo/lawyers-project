import { LawyerFake } from "../sidder";
import react,{ useState } from "react";
import { MDBInput } from 'mdb-react-ui-kit';

export default function App(data, searchTerm) {
  
    // Convert the search term and data to lowercase
    searchTerm = searchTerm.toLowerCase();
    data = data.map(d => d.toLowerCase());

    // Perform the search
    const results = data.filter(d => d.includes(searchTerm));

    return results;
}

const data = ["Apple", "Banana", "Cat", "Dog"];
const searchTerm = "a";

console.log(caseInsensitiveSearch(data, searchTerm)); 
// ["apple", "banana"]
  return (
    <MDBInput label='Example label' id='form1' type='text' />
  );
}