import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AdminHallCard from './AdminHallCard'

export default function AdminViewAllHalls() {

  const navigate = useNavigate()

  const [ halls, setHalls ] = useState([])

  const fetchhalls = async () => {
    await axios.get('http://localhost:8080/hall/')
      .then((response) => {
        setHalls(response.data)
        console.log(response.data)
      })
  }

  useEffect(() => { fetchhalls() });

  const handleclick = async () => {
    navigate("/admin/hall/add")
  }

  return (
    <div>
      <div>
        <h1 className="font-weight-bold" style={ { textAlign: "center", 'marginTop': "35px" } }>All Halls</h1>
      </div>
      <br/>
      <div style={ { "margin": "0px 0px 0px 320px" } }>
        <div style={ { "alignContent": "flex-end", } }>
          <button type="button" class="btn btn-primary btn-lg" onClick={ handleclick }>Add New Hall</button>
          
        </div>
        <div>
          { halls ? (halls.map((hall) => (
            <AdminHallCard key={ hall._id } object={ hall } />
          ))) : (
            <p style={ { textAlign: "center" } }>No Halls Avilable!</p>
          ) }
        </div>
      </div>
    </div>
  )
}

