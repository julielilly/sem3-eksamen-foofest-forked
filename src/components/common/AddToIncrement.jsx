import React, { useState } from "react";

const AddToIncrement = ({ count, increment, decrement }) => {
  const [isIncrementField, setIsIncrementField] = useState(false);

  return isIncrementField ? (
    <div className="flex items-center space-x-2">
      <button
        type="button"
        className="bg-black text-white py-1 px-2 hover:bg-lightblue active:bg-red"
        onClick={() => {
          decrement();
          if (count - 1 <= 0) setIsIncrementField(false);
        }}
      >
        -
      </button>
      <span className="text-black">{count}</span>
      <button
        type="button"
        className="bg-black text-white py-1 px-2 hover:bg-lightblue active:bg-red"
        onClick={increment}
      >
        +
      </button>
    </div>
  ) : (
    <button
      type="button"
      className="bg-black text-white py-1 px-2 hover:bg-lightblue active:bg-red"
      onClick={() => {
        increment();
        setIsIncrementField(true);
      }}
    >
      ADD
    </button>
  );
};

export default AddToIncrement;
