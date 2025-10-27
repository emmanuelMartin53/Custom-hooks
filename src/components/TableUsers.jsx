

const TableUsers = ({dataUsers}) => {
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
      {
        dataUsers.map(({id, name, username, email, address}) => {
          return (
            <tr key={id}>
              <td>{name}</td>
              <td>{username}</td>
              <td>{email}</td>
              <td>{address.suite}, {address.street}, {address.zipcode},  {address.city}</td>
            </tr>
          )
        })
      }
    </tbody>

   </table>
  )
}

export default TableUsers;
