import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Itemcard from "./Itemcard";
import { Link } from "react-router-dom";
const Mycourses = () => {
    const products = useSelector((state) => state.orebiReducer.products);
  return (
    <div className="max-w-container mx-auto px-4">
    {products.length > 0 ? (
      <div className="pb-20">
        <div className="w-full h-20 bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
          <h2 className="col-span-2">Course</h2>
          <h2>Due date</h2>
          <h2>CourseStatus</h2>
        </div>
        <div className="mt-5">
          {products.map((item,index) => (


                <Itemcard item={item} />
          ))}
        </div>
      </div>
    ) : (
      <p>No courses you have purchased yet </p>
    )}
  </div>
 
  )
}

export default Mycourses