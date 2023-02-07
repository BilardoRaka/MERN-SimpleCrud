import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const addUser = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [gender, setgender] = useState("Male");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/users", {
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
        <form onSubmit={saveUser}>
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
                Simpan
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default addUser;
