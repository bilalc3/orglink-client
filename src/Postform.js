import React, { useState } from "react";
import './Postform.css';

const Postform = () => {

    const [title, setTitle] = useState('');
    const [zone, setZone] = useState('');
    const [body, setBody] = useState('');
    const [otherOption, setOtherOption] = useState('');


    const handlePost = (e) => {
        e.preventDefault();

        let selectedZone = zone;
        if (zone === "other") {
            selectedZone = otherOption;
        }

        const thread = {title, zone: selectedZone, body};

        fetch('http://localhost:8000/threads', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(thread)
        }).then(() => {
            console.log('added');
        })
    }


    return (  
        <div className = "container">
            <div className="text">
            <h2>Create a Thread</h2>
            <form onSubmit={handlePost}> 
                <label className="title">Title:</label>
                <input 
                    type="text" 
                    required
                    value = {title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label className="zone">Zone</label>
                <select value={zone} onChange={(e) => setZone(e.target.value)}>
                    <option value="story">Story</option>
                    <option value="updates">Updates</option>
                    <option value="call to action">Call To Action</option>
                    <option value="other">Other</option>
                </select>
                {zone === 'other' && (
                    <input 
                        type="text"
                        required
                        value={otherOption}
                        onChange={(e) => setOtherOption(e.target.value)}
                    />
                )}


                <label className="body">Body</label>
                <textarea
                    required
                    value = {body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <button>Post Thread</button>
            </form>
            </div>
        </div>

    );
}
 
export default Postform;
