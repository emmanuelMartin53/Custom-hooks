
const Search = ({searchStr, searchHandler}) => {
  return (
    <div>
        <input
          id="search"
          type="text"
          placeholder="Rechercher..."
          value={searchStr}
          onChange={searchHandler}
        />
        <hr />
    </div>
  )
}

export default Search;
