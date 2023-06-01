import React, {useState, useEffect} from 'react'
import axios from "axios"
import {useParams, useNavigate} from "react-router-dom"

function AddUser() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const {id} = useParams("");
  const Navigate = useNavigate();


  const handleChange = (event) => {
    const {name, value} = event.target
    setUser({...value, [name] : value})
  }

  async function getContact(event) {

    try {
      const response = await axios.get(`http://127.0.0.1:9000/getuser/${id}`);
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getContact();
  }, [])
  
  const updateContact = async (event) => {
    event.preventDefault()
    try {
      const {name, email, phone} = user;

      const response2 = await axios.patch(`http://127.0.0.1:9000/updatecontact/${id}`, {
        name: name,
        email: email,
        phone: phone
      })
      console.log(response2);
      alert("Updated your contact")
      Navigate("/")
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className='addUser mt-20 ml-48'>
      <div className="addUser__info">
        <h1 className='font-bold text-4xl'>Edit User</h1>
        <form className='mt-5 block'>
          <input value={user.name} name='name' onChange={handleChange} className='block mt-10 outline-none border-b w-4/5' type="text" placeholder='Name'/>
          <input value={user.email} name='email' onChange={handleChange} className='block mt-10 outline-none border-b w-4/5' type="email" placeholder='Email'/>
          <input value={user.phone} name='phone' onChange={handleChange} className='block mt-10 outline-none border-b w-4/5' type="number" placeholder='Phone'/>
          <button type='submit' className='mt-10 bg-blue-500 rounded-lg p-4 w-4/5' onClick={updateContact}>Confirm</button>
        </form>
      </div>
    </div>
  )
}

export default AddUser