import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

let sender = [
  {
    id: 1,
    name: "xxx",
    location: "yyy",
    msgs: 
        {sender: 0, text:"Hello there, I'm using Chat !"},
    },
    {
        id: 1,
        name: "xxx",
        location: "yyy",
        msgs: 
            {sender: 0, text:"Hello there, I'm using Chat !"},
        },
];
let reciver = [
    {
        id: 2,
        name: "aaa",
        location: "bbb",
        msgs:  {sender: 1, text:"Hello there, I'm using Chat !"}
  },

  {
    id: 2,
    name: "aaa",
    location: "bbb",
    msgs:  {sender: 1, text:"Hello there, I'm using Chat !"}
},
];

export default function Chat() {
  return (
    <>
      <Box
        alignItems={"center"}
        height={"50em"}
        maxWidth="30em"
        border={"1px solid black"}
        // paddingRight={sender.id === 1 ? "4em" : "unset"  }
      >
        {sender.map((e) => (
          <Typography >{e.msgs.text}</Typography>
        ))}
         {reciver.map((i) => (
          <Typography display={"flex"} justifyContent={i.msgs.sender === 1 ? "flex-end" : "unset"  } >{i.msgs.text}</Typography>
        ))}
      </Box>
    </>
  );
}
