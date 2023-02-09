import React, { useState } from "react";
import axios from "axios";

import './Upload.css';

const Upload = (props) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [creator, setCreator] = useState("");
    const [tag, setTag] = useState("astra");
    const [url, setUrl] = useState("");

    async function handleUploadLineup(e: React.FormEvent) {

        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/tips", {
                title,
                description,
                creator,
                tag,
                url,
            });

            console.log(response);

        } catch (error) {
            console.log(error);
        }
        

    }

    return ( props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <form onSubmit={handleUploadLineup}>
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setTitle(e.target.value);
                        }}
                    />
                    <input
                        id="description"
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setDescription(e.target.value);
                        }}
                    />
                    <input
                        id="creator"
                        type="text"
                        placeholder="Creator"
                        value={creator}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setCreator(e.target.value);
                        }}
                    />
                    <select
                        id="tag"
                        value={tag}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                            setTag(e.target.value)
                        }}
                    >
                        <option value="astra">Astra</option>
                        <option value="breach">Breach</option>
                        <option value="brimstone">Brimstone</option>
                        <option value="chamber">Chamber</option>
                        <option value="cypher">Cypher</option>
                        <option value="fade">Fade</option>
                        <option value="harbor">Harboro</option>
                        <option value="jett">Jett</option>
                        <option value="kayo">KAY/O</option>
                        <option value="killjoy">Killjoy</option>
                        <option value="neon">Neon</option>
                        <option value="omen">Omen</option>
                        <option value="phoenix">Phoenix</option>
                        <option value="raze">Raze</option>
                        <option value="reyna">Reyna</option>
                        <option value="sage">Sage</option>
                        <option value="skye">Skye</option>
                        <option value="sova">Sova</option>
                        <option value="viper">Viper</option>
                        <option value="yoru">Yoru</option>
                    </select>
                    <input
                        id="url"
                        type="text"
                        placeholder="URL"
                        value={url}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setUrl(e.target.value);
                        }}
                    />
                    <button>Upload</button>
                </form>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                { props.children }
            </div>
        </div>
    ) : "";

}

export default Upload