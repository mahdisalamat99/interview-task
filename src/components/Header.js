import React,{useState} from 'react';
import '../styles/header.scss';
import {
    NavLink
  } from "react-router-dom";

export default function Header ({categories,filter}){
    return (
        <div className="header-comp">
            <h2>THE WIRE</h2>
            <ul>
                {categories.map((cat) => {
                    return (
                        
                        <li onClick={()=> filter(cat)}>
                            <NavLink to={`/${cat.toLowerCase()}`} 
                                className={({isActive})=>(isActive ? "activeitem" : "")}>
                                    {cat.toUpperCase()}
                            </NavLink></li>
                    )
                })}
            </ul>
        </div>
    )
}

