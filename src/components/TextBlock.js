import React from "react";
import "../styles/text-block.scss";

export default function TextBlock({textBlocks}) {
  return (
    <div className="text-block-comp">
      <h2 className="title">
        {textBlocks.title}
        </h2>
      <div className="content">
        <div className="img-con">
            <img src={`http://localhost:3000/api-images/casey-horner-IrvTUUn-pp0-unsplash.jpg`} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          illum aliquid fugiat corporis ratione aliquam velit dolorum provident
          quasi dicta iure, nobis, tempore deleniti, omnis repellat asperiores
          harum minima. Distinctio.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          illum aliquid fugiat corporis ratione aliquam velit dolorum provident
          quasi dicta iure, nobis, tempore deleniti, omnis repellat asperiores
          harum minima. Distinctio.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          illum aliquid fugiat corporis ratione aliquam velit dolorum provident
          quasi dicta iure, nobis, tempore deleniti, omnis repellat asperiores
          harum minima. Distinctio.
        </p>
      </div>

      <div className="bottom">
        <div className="avatar">
          <img src={`http://localhost:3000/api-images/nicolas-horn-MTZTGvDsHFY-unsplash.jpg`} alt="" />
          </div>
        <div className="date">
          {textBlocks.date}
        </div>
        <button className="category">
          {textBlocks.category}
        </button>
      </div>
    </div>
  );
}
