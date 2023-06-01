import React, {useState} from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

function AddUser() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const Navigate = useNavigate();

  const handleChange = (event) => {
    const {name, value} = event.target
    setUser((prevVal) => ({
      ...prevVal, 
      [name]: value
    }))
  }

    async function addContact(event) {
      event.preventDefault();
    try {
      const {name, email, phone} = user;
      console.log(name, email, phone);
      const response = await axios.post("http://127.0.0.1:9000/register", {
        name: name,
        email: email,
        phone: phone
      })

      alert("Added to your contacts")
      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='addUser mt-20 ml-48'>
      <div className="addUser__info">
        <h1 className='font-bold text-4xl'>Add User</h1>
        <form className='mt-5 block'>
          <input value={user.name} name='name' onChange={handleChange} className='block mt-10 outline-none border-b w-4/5' type="text" placeholder='Name'/>
          <input value={user.email} name='email' onChange={handleChange} className='block mt-10 outline-none border-b w-4/5' type="email" placeholder='Email'/>
          <input value={user.phone} name='phone' onChange={handleChange} className='block mt-10 outline-none border-b w-4/5' type="number" placeholder='Phone'/>
          <button type='submit' className='mt-10 bg-blue-500 rounded-lg p-4 w-4/5' onClick={addContact}>Add Contact</button>
        </form>
      </div>
    </div>
  )
}

export default AddUser