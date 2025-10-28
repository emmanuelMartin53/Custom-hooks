// import Search from "./components/Search";
// import TableUsers from "./components/TableUsers";
// import { fakeUsersGenerator } from "./data/users";
// import {useState, useEffect} from "react"
// const users = fakeUsersGenerator();
// // console.log(users)
import NewsLetter from './components/NewsLetter';
import './App.css'
import Articles from './components/Articles';
import NameFields from './components/NameFields';

const App = () => {
  return (
    <div className="App">
      <h1 className='text-center'>Bonjour</h1>
      <div className="text-center">
      <NewsLetter />
      <form action="">
        <NameFields />
      </form>
        <Articles />
        <Articles />
        <Articles />
        <Articles />
      <NewsLetter />
      </div>
    </div>
  )
}
export default App;











// const App = () => {

//   const [search, setSearch] = useState("");
//   const [resultSearch, setResultSearch] = useState([])
//   //const [isPending, startTransition] = useTransition()

//   // console.log(users)

//   // const {data, isLoading} = useFetch(`https://jsonplaceholder.typicode.com/users`)



//   // useUpdateDocTitle(search)


//   const filterUsers = () => {
//       const foundUsers =  users.filter((user) => {
//         console.log(Object.values(user).join(' ').toLowerCase())
//         return Object.values(user)
//           .join(' ')
//           .toLowerCase()
//           .includes(search.toLowerCase())
//       })

//       setResultSearch(foundUsers);
//   }


//   useEffect(() => {
//     if (search !== "") {
//         // Filter
//         // startTransition(() => {
//         //   filterUsers()
//         // })
//         filterUsers()

//       } else {
//         setResultSearch([])
//       }

//   }, [search])

//   const handleChange = (event) => {
//     setSearch(event.target.value)
//   }

//   const displayMsg = (message, color) => {
//     return (
//       <p style={{textAlign: "center", color:color}}>
//         {message}
//       </p>
//     )
//   }



//   return (
//     <div className="App">
//       <div className="text-center">
//       <h1>Mes contacts</h1>
//       <p style={{color: "blue"}}>Total: {users.length} membres</p>
//           <Search
//           searchStr={search}
//           searchHandler={handleChange}
//           />
//       {
//         search === "" ? null
//         :
//         <TableUsers dataUsers={resultSearch}/>
//       }

//       </div>
//     </div>
//   )
// }

// export default App
