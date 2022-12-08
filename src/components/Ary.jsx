import React from "react";
import { useState } from "react";

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50,
];

export default function Ary() {
  
    const [x, setx] = useState(null);
  
  return (
    <>
      {arr.map((e) => {
        let min = e - 5;
        let max = e + 5;
        if (min < x && max > x) {
        return <li onClick={() => setx(e)}>
            {e}
        </li>
        }
        else{
            return null;
        }
      })}
    </>
  );
}
