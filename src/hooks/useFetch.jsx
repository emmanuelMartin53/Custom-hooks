import { useState, useEffect, useDebugValue } from "react" // useDebugValue est seulement utilisable dans un custom hook


const useFetch = (fetchUrl) => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

  // faire en sorte que useDebugValue retourne un array
    // useDebugValue([isLoading, data])

    // Cette fonction se lance uniquement:
    // - si je suis en mode DEV et seulement
    // - si React-Dev-Tool est ouvert pour inspecter le custom-hook

    // useDebugValue(data ,(value) => {
    //   alert("useDebugValue lancée...")
    //   return JSON.stringify(value)
    // })

    const fetchData = async () => {
      try {
        const response = await fetch(fetchUrl)
        if (!response.ok) {
          throw Error("Pas de data")
        } else {
          const fetchedData = await response.json()
          console.log(fetchedData)
          setData(fetchedData)
          setIsLoading(false)
        }
      } catch (error) {
        console.log(error.message)
      }
    }

  // Fetch
    useEffect(() => {
      fetchData()
      // fetch(fetchUrl)
      // .then(response => response.json())
      // .then(json => {
      //   setData(json);
      //   setIsLoading(false);
      // })
      // .catch(error => console.log(error.message))
    }, [fetchUrl])

  // return

  return {
    data,
    isLoading
  }
}

export default useFetch
