import React from "react";
import { useState } from "react";
import axios from "axios";

import './Agents.css';
import loading from '../../assets/Hourglass_icon.png';

/*
let AgentData = {
    portrait:"N/A",
    ability1: "N/A",
    ability2: "N/A",
    ability3: "N/A",
    ability4: "N/A",
    background: "N/A"
}
*/

const Agents = () => {
    
    const [agent, setState] = useState({
        agentPortrait: `${loading}`,
        agentAbility1: '',
        agentAbility1Name: '',
        agentAbility1Icon: '',
        agentAbility2: '',
        agentAbility2Name: '',
        agentAbility2Icon: '',
        agentAbility3: '',
        agentAbility3Name: '',
        agentAbility3Icon: '',
        agentAbilityUlt: '',
        agentAbilityUltName: '',
        agentAbilityUltIcon: '',
        agentBackground: '',
    });
    
    
    /* const changeAgent = () => {
        
        setState(() => {
            return {
                agentPortrait: AgentData.portrait, 
                agentAbility1: AgentData.ability1, 
                agentAbility2: AgentData.ability2,
                agentAbility3: AgentData.ability3,
                agentAbilityUlt: AgentData.ability4,
                agentBackground: AgentData.background
            }
        })
        console.log(AgentData.ability1)
    }
    */

    const ClickedAgent = async (agentUUID) => {
        await axios.get("https://valorant-api.com/v1/agents/" + agentUUID)
        .then(function (response) {
            setState(() => {
                return {
                    agentPortrait: response.data.data.fullPortraitV2, 
                    agentAbility1: response.data.data.abilities[0].description,
                    agentAbility1Name: response.data.data.abilities[0].displayName,
                    agentAbility1Icon: response.data.data.abilities[0].displayIcon,  
                    agentAbility2: response.data.data.abilities[1].description,
                    agentAbility2Name: response.data.data.abilities[1].displayName,
                    agentAbility2Icon: response.data.data.abilities[1].displayIcon,
                    agentAbility3: response.data.data.abilities[2].description,
                    agentAbility3Name: response.data.data.abilities[2].displayName,
                    agentAbility3Icon: response.data.data.abilities[2].displayIcon,
                    agentAbilityUlt: response.data.data.abilities[3].description,
                    agentAbilityUltName: response.data.data.abilities[3].displayName,
                    agentAbilityUltIcon: response.data.data.abilities[3].displayIcon,
                    agentBackground: response.data.data.background
                }
            })
            /* 
            AgentData.portrait = response.data.data.fullPortraitV2;
            AgentData.ability1 = response.data.data.abilities[0].description;
            AgentData.ability2 = response.data.data.abilities[1].description;
            AgentData.ability3 = response.data.data.abilities[2].description;
            AgentData.ability4 = response.data.data.abilities[3].description;
            AgentData.background = response.data.data.background;
            changeAgent();
            */
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    
    return (
        <div className="agents-page">
            <div className="agents-banner">
                <h1>AGENTS</h1>
            </div>
            <div className="agents-content">
                <div className="agents-filter">
                    <div className="filter-text-box">
                        <div className="filter-text">FILTER</div>
                    </div>
                    <div className="filter-content">
                        <button className="brimstone-button" onClick={ () => {
                            ClickedAgent('9f0d8ba9-4140-b941-57d3-a7ad57c6b417')
                        }}>brimstone</button>
                        <button className="phoenix-button" onClick={ () => {
                            ClickedAgent('eb93336a-449b-9c1b-0a54-a891f7921d69')
                        }}>phoenix</button>
                        <button className="sage-button" onClick={ () => {
                            ClickedAgent('569fdd95-4d10-43ab-ca70-79becc718b46')
                        }}>sage</button>
                        <button className="sova-button" onClick={ () => {
                            ClickedAgent('320b2a48-4d9b-a075-30f1-1f93a9b638fa')
                        }}>sova</button>
                        <button className="viper-button" onClick={ () => {
                            ClickedAgent('707eab51-4836-f488-046a-cda6bf494859')
                        }}>viper</button>
                        <button className="cypher-button" onClick={ () => {
                            ClickedAgent('117ed9e3-49f3-6512-3ccf-0cada7e3823b')
                        }}>cypher</button>
                        <button className="reyna-button" onClick={ () => {
                            ClickedAgent('a3bfb853-43b2-7238-a4f1-ad90e9e46bcc')
                        }}>reyna</button>
                        <button className="killjoy-button" onClick={ () => {
                            ClickedAgent('1e58de9c-4950-5125-93e9-a0aee9f98746')
                        }}>killjoy</button>
                        <button className="breach-button" onClick={ () => {
                            ClickedAgent('5f8d3a7f-467b-97f3-062c-13acf203c006')
                        }}>breach</button>
                        <button className="omen-button" onClick={ () => {
                            ClickedAgent('8e253930-4c05-31dd-1b6c-968525494517')
                        }}>omen</button>
                        <button className="jett-button" onClick={ () => {
                            ClickedAgent('add6443a-41bd-e414-f6ad-e58d267f4e95')
                        }}>jett</button>
                        <button className="raze-button" onClick={ () => {
                            ClickedAgent('f94c3b30-42be-e959-889c-5aa313dba261')
                        }}>raze</button>
                        <button className="skye-button" onClick={ () => {
                            ClickedAgent('6f2a04ca-43e0-be17-7f36-b3908627744d')
                        }}>skye</button>
                        <button className="yoru-button" onClick={ () => {
                            ClickedAgent('7f94d92c-4234-0a36-9646-3a87eb8b5c89')
                        }}>yoru</button>
                        <button className="astra-button" onClick={ () => {
                            ClickedAgent('41fb69c1-4189-7b37-f117-bcaf1e96f1bf')
                        }}>astra</button>
                        <button className="kayo-button" onClick={ () => {
                            ClickedAgent('601dbbe7-43ce-be57-2a40-4abd24953621')
                        }}>kayo</button>
                        <button className="chamber-button" onClick={ () => {
                            ClickedAgent('22697a3d-45bf-8dd7-4fec-84a9e28c69d7')
                        }}>chamber</button>
                        <button className="neon-button" onClick={ () => {
                            ClickedAgent('bb2a4828-46eb-8cd1-e765-15848195d751')
                        }}>neon</button>
                        <button className="fade-button" onClick={ () => {
                            ClickedAgent('dade69b4-4f5a-8528-247b-219e5a1facd6')
                        }}>fade</button>
                        <button className="harbor-button" onClick={ () => {
                            ClickedAgent('95b78ed7-4637-86d9-7e41-71ba8c293152')
                        }}>harbor</button>
                    </div>
                </div>
                <div className="agents-main">
                    <div className="agent-display" style={{ backgroundImage: `url(${agent.agentBackground})` }}>
                        <div className="agent-image">
                            <img src={agent.agentPortrait} alt=""></img>
                        </div>
                    </div>
                    <div className="agent-info">
                        <div className="agent-ability-1">
                            <div className="a-name-1">{agent.agentAbility1Name}</div>
                            <div className="a-pic-1" style={{ backgroundImage: `url(${agent.agentAbility1Icon})`}}></div>
                            <div className="a-desc-1">{agent.agentAbility1}</div>
                        </div>
                        <div className="agent-ability-2">
                            <div className="a-pic-2" style={{ backgroundImage: `url(${agent.agentAbility2Icon})`}}></div>
                            <div className="a-name-2">{agent.agentAbility2Name}</div>
                            <div className="a-desc-2">{agent.agentAbility2}</div>
                        </div>
                        <div className="agent-ability-3">
                            <div className="a-name-3">{agent.agentAbility3Name}</div>
                            <div className="a-pic-3" style={{ backgroundImage: `url(${agent.agentAbility3Icon})`}}></div>
                            <div className="a-desc-3">{agent.agentAbility3}</div>
                        </div>
                        <div className="agent-ability-ult">
                            <div className="a-pic-ult" style={{ backgroundImage: `url(${agent.agentAbilityUltIcon})`}}></div>
                            <div className="a-name-ult">{agent.agentAbilityUltName}</div>
                            <div className="a-desc-ult">{agent.agentAbilityUlt}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agents;