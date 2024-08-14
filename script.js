import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"; 
import { db } from "./config.js";


const from=document.querySelector('#form');
const todo=document.querySelector('#todo');
const arr=[]

from.addEventListener('submit', async(event)=>{
  event.preventDefault();

  try {
    const docRef = await addDoc(collection(db, "users"), {
     todo:todo.value
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
})