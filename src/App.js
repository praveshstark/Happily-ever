import React, { useState } from 'react'
import LoginForm from './components/LoginForm';
import './App.css';
import Upload1 from './components/Upload1';

function App() {
  const adminUser = {
    username: "happily",
    password: "admin123"
  }

  const [user, setUser] = useState({ username: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if (details.username === adminUser.username && details.password === adminUser.password) {
      console.log("Logged In");
      setUser({
        username: details.username
      });
    } else {
      console.log("Details not matched to admin");
      setError("Details not matched to admin");
    }
  }

  const Logout = () => {
    setUser({ username: "", password: "" });
    console.log("Logout");
  }

  return (
    <div className="App">
      {
        (user.username !== "") ? (
          <div className="welcome">
            <h2>welcome, <span>{user.username}</span></h2>
            <Upload1 />
            <button onClick={Logout}>Logout</button>
          </div>
        ) : (
          <LoginForm Login={Login} error={error} />
        )
      }
    </div>
  );
}

export default App;
