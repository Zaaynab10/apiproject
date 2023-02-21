 import axios from "axios"
 import { useEffect, useState } from "react"
 export default function UserList(){
 const[listOfUser,setListOfUser]=useState([])

 useEffect(()=>{ 
axios.get("https://jsonplaceholder.typicode.com/users")
.then(response=>setListOfUser(response.data))
.catch(errors=>console.log(errors))}
,[]
)
    return (
        <div className="infos5">
        {
            listOfUser.map((user)=>{
             return <div  className="infos">
                <ul className="infos1">
                <li className="name">{user.name}</li>
                <li><span className="titre">User Name:</span>{user.username}</li>
                <li><span className="titre">Email: </span> {user.email}</li>
                <li><span className="titre">Street:</span>   {user.address.street}</li>
                <li><span className="titre">Suite:</span>   {user.address.suite}</li>
                <li><span className="titre">City:</span>  {user.address.city}</li>
                <li><span className="titre">Zip code:</span>  {user.address.zipcode}</li>
                <li><span className="titre">Latitutde:</span> {user.address.geo.lat}</li>
                <li><span className="titre">Longitude:</span> {user.address.geo.lng}</li>
                </ul>
                </div>
            })
        }
        </div>
    )
 }