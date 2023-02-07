import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const userList = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:8080/users");
    setusers(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns">
      <div className="column is-half">
        <Link className="button is-success mt-5" to="add">
          Tambah User
        </Link>
        <table className="table is-striped is-fullwidth mt-3">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>
                  <Link
                    to={`edit/${user._id}`}
                    className="button is-info is-small"
                  >
                    Ubah
                  </Link>
                  <Link
                    onClick={() => deleteUser(user._id)}
                    className="button is-danger is-small"
                  >
                    Hapus
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default userList;
