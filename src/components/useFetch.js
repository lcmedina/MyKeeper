import { useState, useEffect } from "react";
import db from "../server";
import { ref, onValue } from "firebase/database";

const useFetch = () => {
    const [data, setData] = useState([])

    useEffect(() => {
      const noteRef = ref(db, 'notes/');
      let allNotes = []
      onValue(noteRef, (snapshot) => {
        snapshot.forEach((note) => {
          allNotes.push(note.val())
        });
        setData(allNotes);
      })
    // fetch(url)
    // .then(res => {
    //   return res.json();
    // })
    // .then((data) => {
    //   setData(data);
    // })
  }, [])
  console.log(data)
  return { data }
}
 
export default useFetch;