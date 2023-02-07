import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const editUser = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [gender, setgender] = useState("Male");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:8080/users/${id}`);
    setname(response.data.name);
    setemail(response.data.email);
    setgender(response.data.gender);
  };

  const editUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8080/users/${id}`, {
        name,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="columns">
      <div className="column is-half">
        <form onSubmit={editUser}>
          <div className="field">
            <label className="label">Nama</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder="Nama"
              />
            </div>
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={gender}
                  onChange={(e) => setgender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Ubah
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default editUser;
