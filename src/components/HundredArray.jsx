import { Box, Button, ListItem } from "@mui/material";
import React from "react";
import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function HundredArray({ items }) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [ind, setInd] = useState(0);

  // console.log(items.map((i, index) => ({...i, body : ` ${index + 1} - ${i.body}`})));

  const arr = Array.from(Array(Math.floor(items.length / 10)).keys());

  const display = items.slice(start, end);

  return (
    <Box>
      {display.map((e) => {
        return (
          <Box>
            <ListItem>{e.body}</ListItem>
          </Box>
        );
      })}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => {
            setStart(start - 10);
            setEnd(end - 10);
            setInd(ind - 1);
          }}>
          <AiOutlineArrowLeft />
        </Button>
        {arr.map((num, index) => {
          return (
            <Box>
              <ListItem
                key={index}
                
                sx={{
                  cursor: "pointer",
                  color: index === ind ? "blue" : "red",
                }}
                onClick={() => {
                  setStart(num * 10);
                  setEnd(num * 10 + 10);
                  setInd(num);
                }}
              >
                {num + 1}
              </ListItem>
            </Box>
          );
        })}
        <Button
          onClick={() => {
            setStart(end);
            setEnd(end + 10);
            setInd(ind + 1);
          }}
        >
          <AiOutlineArrowRight />
        </Button>
      </Box>
    </Box>
  );
}
