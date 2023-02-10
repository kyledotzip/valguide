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
            const response = await axios.post("https://val-guide-new.herokuapp.com/tips", {
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
                        <option value="Astra">Astra</option>
                        <option value="Breach">Breach</option>
                        <option value="Brimstone">Brimstone</option>
                        <option value="Chamber">Chamber</option>
                        <option value="Cypher">Cypher</option>
                        <option value="Fade">Fade</option>
                        <option value="Harbor">Harbor</option>
                        <option value="Jett">Jett</option>
                        <option value="Kayo">KAY/O</option>
                        <option value="Killjoy">Killjoy</option>
                        <option value="Neon">Neon</option>
                        <option value="Omen">Omen</option>
                        <option value="Phoenix">Phoenix</option>
                        <option value="Raze">Raze</option>
                        <option value="Reyna">Reyna</option>
                        <option value="Sage">Sage</option>
                        <option value="Skye">Skye</option>
                        <option value="Sova">Sova</option>
                        <option value="Viper">Viper</option>
                        <option value="Yoru">Yoru</option>
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