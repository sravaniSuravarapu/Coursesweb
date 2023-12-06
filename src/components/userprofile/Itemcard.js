import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Itemcard = ({ item }) => {
  const dispatch = useDispatch();
  const [completed, setCompleted] = useState(false);

  const toggleCompletion = () => {
    setCompleted(!completed);
    dispatch({ type: "TOGGLE_COMPLETION", itemId: item.id });
  };

  return (
    <div className="w-full grid grid-cols-5 mb-4 border py-2">
      <div className="flex col-span-5 mdl:col-span-2 items-center gap-4 ml-4">
        <img className="w-32 h-32" src={item.image} alt="productImage" />
        <h1 className="font-titleFont font-semibold">{item.name}</h1>
      </div>
      <div className="col-span-5 mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
        <div className="flex w-1/3 items-center text-lg font-semibold">
          Dec 7
        </div>
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={toggleCompletion}
        >
          {completed ? <p>Completed</p> : <p>Mark Completed</p>}
        </button>
        <div className="flex w-1/3 items-center text-lg font-semibold">
          {completed ? <p>100%</p> : <p>40%</p>}
        </div>
      </div>
    </div>
  );
};

export default Itemcard;
