import { useState, useEffect } from "react";
import db from "../server";
import { ref, onValue } from "firebase/database";

const useFetch = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
      const noteRef = ref(db, 'notes/');
      onValue(noteRef, (snapshot) => {
        setData(snapshot.val())
      })
    // fetch(url)
    // .then(res => {
    //   return res.json();
    // })
    // .then((data) => {
    //   setData(data);
    // })
  }, [])

  return { data }
}
 
export default useFetch;