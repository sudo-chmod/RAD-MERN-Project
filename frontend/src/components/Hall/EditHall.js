import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

export default function EditHall() {

  const navigate = useNavigate();

  const { id } = useParams();

  const [isFetched, setIsFetched] = useState(false);

  const [code, setCode] = useState("");
  const [capacity, setCapacity] = useState("");
  const [floor, setFloor] = useState("");
  const [type, setType] = useState("");

  const FetchHall = async () => {
    await axios.get(`http://localhost:8080/hall/${id}`)
      .then((response) => {
        setCode(response.data.Hall.code);
        setCapacity(response.data.Hall.capacity);
        setFloor(response.data.Hall.floor);
        setType(response.data.Hall.type);
      })
  }

  useEffect(() => {
    if (!isFetched) {
      FetchHall();
      setIsFetched(true);
    }
  }, [isFetched]);

  const update = async (e) => {
    e.preventDefault()

    const updateHall = {
      code,
      capacity,
      floor,
      type
    }

    await axios.put(`http://localhost:8080/hall/edit/${id}`, updateHall)
      .then(() => {
        alert("Hall Updated Successfully")
        navigate(`/Hall/${id}`)
      })
      .catch((err) => {
        alert(err.message)
      })


  }

  const cancelation = () => {
    navigate(`/hall/${id}`)
  }

  return (
    <div className="container">
      <form>
        <div className="container rounded bg-white mt-5 mb-5">
          <div className="row">
            <div className="col-md-3">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
                <span className="font-weight-bold">Add Hall</span>
                <div className="mt-5 text-center" style={{ "display": "flex" }}>
                  <div>
                    <button className="btn btn-primary submit-button mx-4" onClick={update}>Update</button>
                  </div>
                  <div>
                    <button className="btn btn-primary clear-button mx-4" onClick={cancelation}>Cancel</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">

              <div className="p-3 py-5">


                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h2 className="text-right"><strong>Edit Hall Details</strong></h2>

                </div>

                <div className="form-border">

                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label htmlFor="code" className="labels">Code</label>
                      <input type="text"
                        className="form-control"
                        placeholder="Enter Code"

                        onChange={(e) => { setCode(e.target.value) }}
                        value={code}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="capacity" className="labels">Capacity</label>
                      <input type="text"
                        className="form-control"
                        placeholder="Enter Capacity"

                        onChange={(e) => { setCapacity(e.target.value) }}
                        value={capacity}
                      />
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-12">
                      <label for="floor" className="labels">Floor</label>
                      <input type="text"
                        className="form-control"
                        placeholder="Enter Floor"

                        onChange={(e) => { setFloor(e.target.value) }}
                        value={floor}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="type" className="labels">Type</label>
                    <select className="form-control" id="type" onChange={(e) => { setType(e.target.value) }} value={type}>
                      <option value="">Select hall Type</option>
                      <option value="AC">AC</option>

                    </select>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </form >
    </div>

  )
}
