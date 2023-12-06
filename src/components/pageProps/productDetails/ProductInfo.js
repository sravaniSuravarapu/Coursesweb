import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo.CourseName}</h2>
      <p className="text-xl font-semibold">${productInfo.price}</p>
      <p className="text-base text-gray-600">{productInfo.des}</p>
      <p className="text-sm">Be the first to leave a review.</p>
      <p className="font-medium text-lg">
        <span className="font-normal">Mentor:</span> {productInfo.InstructorName}
      </p>
      <div className="flex gap-20">
      <div className="prerequisites-container">
      <h3><b>Prerequisites:</b></h3>
      <ul className="prerequisites-list">
      {Array.isArray(productInfo.prerequisites) && productInfo.prerequisites.map((prerequisite, index) => (
      <li key={index}>{prerequisite}</li>
      ))}
      </ul>
      </div>
      <div className="status flex flex-col gap-1"><h3><b>enrollmentStatus:</b></h3>{productInfo.enrollment_status}
      <div className="courseduration"><h3><b>Course Duration:</b></h3>{productInfo.course_duration}</div>
      </div>
      </div>
      <button
        onClick={() =>
          dispatch(
            addToCart({
              _id: productInfo.id,
              name: productInfo.CourseName,
              quantity: 1,
              image: productInfo.img,
              badge: productInfo.badge,
              price: productInfo.price,
              colors: productInfo.InstructorName,
            })
          )
        }
        className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
      >
       Buy
      </button>
      <p className="font-normal text-sm">
        <span className="text-base font-medium"> Categories:</span> Data Science and Analytics,Cybersecurity,Cloud Computing
        ,Internet of Things (IoT),DevOps
      </p>
    </div>
  );
};

export default ProductInfo;
