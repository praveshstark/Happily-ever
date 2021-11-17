import React,{useState} from 'react'

const Login = ({Login, error}) => {
    const [details, setDetails] = useState({username:"", password:""});
    const submitHander =(e)=>{
        e.preventDefault();

        Login(details);
    }
    return (
        <div>
            <form onSubmit={submitHander}>
                <div className="login-form">
                    <h2>Login</h2>
                     {(error !== "") ? (<div className="error">{error}</div>) : ""}
                    <div className="form-group">
                        <label htmlFor="name">UserName:</label>
                        <input type="text" name="name" id="name" 
                            onChange={e => setDetails({...details, username:e.target.value})}
                            value={details.username}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password"
                            onChange={e => setDetails({...details, password:e.target.value})}
                            value={details.password}
                        />
                    </div>
                    <input type="submit" value="LOGIN" />
                </div>
            </form>
        </div>
    )
}

export default Login
