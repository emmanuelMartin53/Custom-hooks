import { useDeferredValue } from "react";


const TableUsers = ({dataUsers}) => {

  const deferredValue = useDeferredValue(dataUsers);

  return (
   <table id="table">
    <thead>
      <tr>
        <th>Nom</th>
        <th>Nom utilisateur</th>
        <th>Email</th>
        <th>Adresse</th>
      </tr>
    </thead>
    <tbody>
      {/* {
        notification && <tr><td colSpan={4} style={{color: "red"}}>Veuillez patienter...</td></tr>
      } */}
      {
        deferredValue.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.suite}, {user.address.street}, {user.address.zipcode}, {user.address.city}</td>
            </tr>
          )
        })
      }
    </tbody>

   </table>
  )
}


// table useFetch
// const TableUsers = ({dataUsers}) => {
//   return (
//    <table id="table">
//     <thead>
//       <tr>
//         <th>Nom</th>
//         <th>Nom utilisateur</th>
//         <th>Email</th>
//         <th>Adresse</th>
//       </tr>
//     </thead>
//     <tbody>
//       {
//         dataUsers.map(({id, name, username, email, address}) => {
//           return (
//             <tr key={id}>
//               <td>{name}</td>
//               <td>{username}</td>
//               <td>{email}</td>
//               <td>{address.suite}, {address.street}, {address.zipcode},  {address.city}</td>
//             </tr>
//           )
//         })
//       }
//     </tbody>

//    </table>
//   )
// }

export default TableUsers;
