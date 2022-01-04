import React,{useState} from 'react';
import '../styles/image-block.scss';

export default function ImageBlock({imageBlocks}) {
    return (
        <div className="image-block-comp">
            <img src={`http://localhost:3000/api-images/ales-krivec-4miBe6zg5r0-unsplash.jpg`} alt="" />
            <button className="category-btn">
                {imageBlocks.category}
            </button>
            <div className="caption">
                <h2 className="title">
                    {imageBlocks.title}
                </h2>
                <div className="date">
                    {imageBlocks.date}
                </div>
            </div>
        </div>
    )
}