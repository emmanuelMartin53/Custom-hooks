import {useState, useEffect} from "react"
import useUpdateDocTitle from "../hooks/useUpdateDocTitle";


const ClickSayHello = () => {

 const [text, setText] = useState("")

  // Custom Hook invoqué 
  useUpdateDocTitle(text)

  return (
    <button
      className="btn btn-info m-3 px-5 text-white"
      onClick={() => setText("hello World")}
    >
      Cliquez
    </button>
  )
}

export default ClickSayHello;
