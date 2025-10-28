import { useId } from "react"


const container = {
  background: "PaleGoldenrod",
  padding: "19px",
  width: "60%",
  margin: "9px auto",
  border: "1px orange dashed"
}



const NewsLetter = () => {

  const id = useId()

  return (
    <div style={container}>
      <label htmlFor={id}>Newsletter...</label>
      <div>
        <input
          type="email"
          id={id}
          name="email"
          placeholder="Votre Email"
        />
      </div>
    </div>
  )
}

export default NewsLetter
