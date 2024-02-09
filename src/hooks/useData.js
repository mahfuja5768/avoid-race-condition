import { useEffect, useState } from "react";
import fetchResults from "../utils/fetchResults";

export default function useData(query, page) {
  const [results, setResults] = useState([]);
  console.log(setResults);

  useEffect(() => {
    let ignore = false;
    console.log(query, "bellow ignore false---->");
    fetchResults(query, page).then((json) => {
      console.log(query,"inside fetch function ---->", ignore);

      if (!ignore) {
        console.log(query, "inside setter function ---->", ignore);

      } else {
        console.log( query, "cant go inside", ignore);
      }
    });

    // cleanup
    return () => {
      ignore = true;
      console.log(query, "is unmounting---->", ignore);
    };
  }, [query, page]);

  return results;
}
