"use client";

import Image from "next/image";
import React from "react";

function Card({ title, description, image }) {
    return <div className="image">
        <p className="new">New</p>
        <div className="text">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <Image src={image} alt="image" className="object-cover" />
    </div>
}
export default Card;