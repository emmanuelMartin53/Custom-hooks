
const Search = ({searchStr, searchHandler}) => {
  return (
    <div>
        <input
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
