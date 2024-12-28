import React from "react";
import featuredImg from "../../assets/home/featured.jpg";
import "./Featured.css";

export default function Featured() {
  return (
    <div className="featured text-white bg-fixed my-20 ">
      <h1>Featured</h1>
      <div className="flex justify-center items-center py-8 px-16 space-x-4 bg-black bg-opacity-30">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div>
          <p>Aug 20 , 2029</p>
          <p className="uppercase">Where can i get some</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolorem
            architecto, quia expedita totam ducimus aliquid officia delectus
            nostrum voluptatibus quaerat eligendi. Itaque minus fugiat
            assumenda. Autem ducimus dolorum quasi sint facere, saepe quidem
            labore tenetur distinctio recusandae eius esse, cupiditate
            repellendus ratione accusantium at ullam fugit repudiandae
            provident. Itaque.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
}
