import React from 'react';
import '../styles/big-block.scss';

export default function BigBlock({bigBlocks}) {
    return (
        <div className="big-block-comp">
            <div className="image-con">
                <img src={`http://localhost:3000/api-images/boxed-water-is-better-rXJXsecq8YU-unsplash.jpg`} alt="" />
            </div>
                <button className="category-btn">
                    {bigBlocks.category}
                </button>
            <div className="bottom">
                <div className="caption">
                    <h2 className="title">
                        {bigBlocks.title}
                    </h2>
                    <div className="date">
                        {bigBlocks.date}
                    </div>
                </div>
                <div className="avatar">
                    <img src={`http://localhost:3000/api-images/nicolas-horn-MTZTGvDsHFY-unsplash.jpg`} alt="" />
                </div>
            </div>
        </div>
    )
}