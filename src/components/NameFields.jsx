import { useId } from "react"


const NameFields = () => {

  const id = useId(); // => string
  // console.log(typeof id)

  return (
    <>
      <label htmlFor={`${id}-firstName`}>Prénom</label>
      <div><input type="text" id="firstName"/></div>

      <label htmlFor={`${id}-lastName`}>Nom</label>
      <div><input type="text" id={`${id}-firstName`}/></div>

      <label htmlFor={`${id}-age`}>Age</label>
      <div><input type="number" id={`${id}-firstName`}/></div>
    </>
  )
}

export default NameFields
