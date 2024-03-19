import React, { useState } from "react";
import "./App.css";
function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");

  const [userInfo, setUserInfo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: name,
      age: age,
      email: email,
      nationality: nationality,
    };
    setUserInfo([...userInfo, newUser]);
    setName("");
    setAge("");
    setEmail("");
    setNationality("");
  };

  return (
    <div className="ml-36 pt-56">
      <h2 className="font-extrabold text-2xl text-black">
        User Information Form
      </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="font-extrabold text-black">
          Name:
        </label>
        <br />
        <input
          type="text"
          id="name"
          className="font-extrabold rounded-xl text-white p-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="age">Age:</label>
        <br />
        <input
          type="number"
          id="age"
          className="rounded-xl font-extrabold text-white p-3 "
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          className="font-extrabold rounded-xl text-white p-3 "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <br />

        <label>Nationality:</label>
        <br />
        <input
          type="radio"
          id="nationality_uz"
          name="nationality"
          value="uzbek"
          className="font-extrabold text-black rounded-xl"
          onChange={() => setNationality("uzbek")}
        />
        <label htmlFor="nationality_us">uzbek</label>
        <input
          type="radio"
          id="nationality_rs"
          name="nationality"
          value="russian"
          className="font-extrabold text-black rounded-xl"
          onChange={() => setNationality("russian")}
        />
        <label htmlFor="nationality_uk">russian</label>
        <input
          type="radio"
          id="nationality_other"
          name="nationality"
          className="font-extrabold text-black rounded-xl"
          value="Other"
          onChange={() => setNationality("Other")}
        />
        <label htmlFor="nationality_other">Other</label>
        <br />
        <br />

        <button type="submit" className="w-56 rounded-xl  text-white bg-black ">
          Save
        </button>
      </form>

      <h2>User Information Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody>
          {userInfo.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.nationality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
