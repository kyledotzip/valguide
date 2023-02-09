import React, { useState, useEffect } from "react";
import axios from "axios";

import './Lineups.css';
import Card from '../Misc/Card.tsx';

const Lineups = () => {

    const [cards, setCardData] = useState([]);
    const [agent, setAgent] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:5000/tips");
            setCardData(response.data);
        }
        fetchData();
    }, []);

    return (
        <div className="lineups-page">
            <div className="lineups-banner">
                <h1>LINEUPS</h1>
            </div>
            <div className="lineups-content">
                <div className="agents-filter">
                    <div className="filter-text-box">
                        <div className="filter-text">FILTER</div>
                    </div>
                    <div className="filter-content">
                    <button className="brimstone-button" onClick={ () => {
                            setAgent("Brimstone");
                        }}>brimstone</button>
                        <button className="phoenix-button" onClick={ () => {
                            setAgent("Phoenix");
                        }}>phoenix</button>
                        <button className="sage-button" onClick={ () => {
                            setAgent("Sage");
                        }}>sage</button>
                        <button className="sova-button" onClick={ () => {
                            setAgent("Sova");
                        }}>sova</button>
                        <button className="viper-button" onClick={ () => {
                            setAgent("Viper");
                        }}>viper</button>
                        <button className="cypher-button" onClick={ () => {
                            setAgent("Cypher");
                        }}>cypher</button>
                        <button className="reyna-button" onClick={ () => {
                            setAgent("Reyna");
                        }}>reyna</button>
                        <button className="killjoy-button" onClick={ () => {
                            setAgent("Killjoy");
                        }}>killjoy</button>
                        <button className="breach-button" onClick={ () => {
                            setAgent("Breach");
                        }}>breach</button>
                        <button className="omen-button" onClick={ () => {
                            setAgent("Omen");
                        }}>omen</button>
                        <button className="jett-button" onClick={ () => {
                            setAgent("Jett");
                        }}>jett</button>
                        <button className="raze-button" onClick={ () => {
                            setAgent("Raze");
                        }}>raze</button>
                        <button className="skye-button" onClick={ () => {
                            setAgent("Skye");
                        }}>skye</button>
                        <button className="yoru-button" onClick={ () => {
                            setAgent("Yoru");
                        }}>yoru</button>
                        <button className="astra-button" onClick={ () => {
                            setAgent("Astra");
                        }}>astra</button>
                        <button className="kayo-button" onClick={ () => {
                            setAgent("Kayo");
                        }}>kayo</button>
                        <button className="chamber-button" onClick={ () => {
                            setAgent("Chamber");
                        }}>chamber</button>
                        <button className="neon-button" onClick={ () => {
                            setAgent("Neon");
                        }}>neon</button>
                        <button className="fade-button" onClick={ () => {
                            setAgent("Fade");
                        }}>fade</button>
                        <button className="harbor-button" onClick={ () => {
                            setAgent("Harbor");
                        }}>harbor</button>
                    </div>
                </div>
                <div className="lineups-main">
                    {cards.map((card) => (
                        <Card 
                            className="lineups-cards"
                            key={card.id}
                            title={card.title}
                            description={card.description}
                            url={card.url}
                            creator={card.creator}
                            tag={card.tag}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Lineups;