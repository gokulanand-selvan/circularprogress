import { Input, ListItem } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";

const list = ["Banana", "Apple", "Orange", "Mango", "Pineapple", "Watermelon"];
export default function Lists() {
  const [find, setFind] = useState("");

  return (
    <Box>
      <Input
        type="text"
        value={find}
        onChange={(e) => setFind(e.target.value)}
      />
      {list
        .filter((i) => {
          return i.toLocaleLowerCase().includes(find.toLocaleLowerCase());
        })
        .map((e) => (
          <ListItem> {e} </ListItem>
        ))}
    </Box>
  );
}
