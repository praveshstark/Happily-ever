import React, { useState } from 'react'

const Upload1 = () => {
    const [profile, setProfile] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')
    const [details, setDetails] = useState({ name: "", dom: "", religion: "", height: "" });
    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setProfile(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };
    
    return (
        <div className="welcome-form">
            <div className="page">
                <div className="container">
                <div className="welcome-page">
                    <h1 className="heading">Add your Image</h1>
                    <div className="img-holder">
                        <img src={profile} alt="" id="img" className="img" />
                    </div>
                    <input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
                    <div className="label">
                        <label className="image-upload" htmlFor="input">
                            Choose your Photo
                        </label>
                    </div>
                </div>
                </div>
            </div>
            

                <div className="upload-page">
                        <form action="">
                            <div className="login-form">
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" name="name" id="name"
                                        onChange={e => setDetails({ ...details, username: e.target.value })}
                                        value={details.username}
                                    />
                                </div>
                            </div>
                            <div className="login-form">
                                <div className="form-group">
                                    <label for="start">Date of Birth:</label>
                                    <input type="date" id="birthday" name="birthday"
                                        onChange={e => setDetails({ ...details, dob: e.target.value })}
                                        value={details.dob}
                                    />
                                </div>
                            </div>
                            <div className="login-form">
                                <div className="form-group">
                                    <label htmlFor="name">Religion:</label>
                                    <input type="text" name="religion" id="religion"
                                        onChange={e => setDetails({ ...details, religion: e.target.value })}
                                        value={details.religion}
                                    />
                                </div>
                            </div>
                            <div className="login-form">
                                <div className="form-group">
                                    <label htmlFor="name">Height(cm):</label>
                                    <input type="number" name="height" id="height"
                                        onChange={e => setDetails({ ...details, height: e.target.value })}
                                        value={details.height}
                                    />
                                </div>
                            </div>
                        </form>
                 </div>
            </div>
    )
}

export default Upload1
