import {useState, useEffect} from "react"
import useUpdateDocTitle from "../hooks/useUpdateDocTitle";


const ClickSayHello = () => {

 const [text, setText] = useState("");
 const [isTrue, setIsTrue] = useState(true);

 useEffect(() => {

    if (isTrue) {
      setText("Bonjour")
    } else {
      setText("Bonsoir")
    }

 }, [isTrue])

  // Custom Hook invoqué
  useUpdateDocTitle(text)

  return (
    <button
      className="btn btn-info m-3 px-5 text-white"
      onClick={() => setIsTrue(!isTrue)}
    >
      Cliquez
    </button>
  )
}

export default ClickSayHello;
