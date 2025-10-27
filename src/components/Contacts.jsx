import Search from "./Search";
import { useState } from "react";
import useUpdateDocTitle from "../hooks/useUpdateDocTitle";


const Contacts = () => {

  const [search, setSearch] = useState("");

  useUpdateDocTitle(search)

  const handleChange = (event) => {
    setSearch(event.target.value)
  }


  return (
    <div>
      <Search
        searchStr={search}
        searchHandler={handleChange}
      />
    </div>
  )
}

export default Contacts
