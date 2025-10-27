import {useEffect} from "react";


// Création du Custom Hooks

const useUpdateDocTitle = (arg) => {


  useEffect(() => {
    // console.dir(document.title)
    document.title = `Titre: ${arg} `

  }, [arg])
}

export default useUpdateDocTitle;
