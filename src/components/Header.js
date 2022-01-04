import React,{useState} from 'react';
import '../styles/header.scss';
import {
    Link
  } from "react-router-dom";

export default function Header ({categories,filter}){
    return (
        <div className="header-comp">
            <h2>THE WIRE</h2>
            <ul>
                {categories.map((cat) => {
                    return (
                        
                        <li onClick={()=> filter(cat)}><Link to={`/${cat.toLowerCase()}`}>{cat.toUpperCase()}</Link></li>
                    )
                })}
            </ul>
        </div>
    )
}

