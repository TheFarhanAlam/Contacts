import React, {useState, useEffect} from 'react'
import axios from "axios"
import {NavLink, useParams} from "react-router-dom"

function AllUser() {

  const [getUserData, setUserData] = useState([])
  const {id} = useParams("");

  async function getContact(event) {
  try {
    const response = await axios.get("http://127.0.0.1:9000/getcontact");
    // console.log(response);
    setUserData(response.data);
  } catch (error) {
    console.log(error);
  }
}

useEffect(() => {
  getContact();
})

const deletecontact = async (id) => {
  try {
    const response2 = await axios.delete(`http://127.0.0.1:9000/deletecontact/${id}`)
    console.log(response2);
    alert("User deleted")
  } catch (error) {
    console.log(error);
  }
}

  return (
    <div className='allUser m-16'>
        <div className="allUser__data">
            <div className="allUser__header grid grid-cols-5 p-5 bg-[#654E92] text-white">
                <p>Id</p>
                <p>Name</p>
                <p>Email</p>
                <p>Phone</p>
            </div>
                
                {getUserData.map((element, Id) => {
                  // console.log(element._id);
                  return (
                    <>
                <div className="allUser__data flex mx-5 border-b p-5 bg-[#F0F0F0]">
                    <p>{Id + 1}</p>
                    <p className='pl-52'>{element.name}</p>
                    <p className='pl-52'>{element.email}</p>
                    <p className='pl-16'>{element.phone}</p>
                <div className="btn flex ml-20">
                <NavLink to={`view/${element._id}`}>
                <button className='mr-10 px-5 py-1 rounded-md text-white bg-[#5F264A]'>View</button>
                </NavLink>
                <NavLink to={`/edit/${element._id}`}>
                <button className='mr-10 px-5 py-1 rounded-md text-white bg-[#569DAA]'>Edit</button>
                </NavLink>
              
                <button className='px-2 py-1 text-white bg-[#FFABAB] rounded-md' onClick={() =>{deletecontact(element._id)}}>Delete</button>
                </div>
            </div>
                    </>
                  )
                })}
        </div>
    </div>
  )
}

export default AllUser