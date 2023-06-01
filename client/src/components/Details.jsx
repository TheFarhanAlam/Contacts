import React, {useState, useEffect} from 'react'
import "./css/Details.css"
import {useParams} from "react-router-dom"
import axios from "axios"

function Details() {

  const {id} = useParams("");
  const [getUserData, setUserData] = useState([]);

  async function getContact(event) {
    try {
      const response = await axios.get(`http://127.0.0.1:9000/getuser/${id}`);
      setUserData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    getContact();
  })
  

  return (
    <>
<div className="infocardContainer">
  <div id="main">
    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Dog_coat_variation.png"></img>
  </div>
  <div id="textbois">
    <h2 className='mt-8'>{getUserData.name}</h2>
    <h4 href="mailto:limecicila@gmail.com">{getUserData.email}</h4>
    <h4>{getUserData.phone}</h4>
    <div id="hotlinks">
      <a href="https://codepen.io/LIMESTA"><img id="codepenio" src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png" target="_blank"></img>
      </a>
      <a href="https://codepen.io/LIMESTA">
        <img id="codepenio" src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png" target="_blank"></img>
      </a>
      <a href="https://codepen.io/LIMESTA">
        <img id="codepenio" src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png" target="_blank"></img>
      </a>
    </div>
  </div>
</div>
    </>
  )
}

export default Details