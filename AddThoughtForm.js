import React, { useState } from "react";
import { generateId, getNewExpirationTime } from "./utilities";

export function AddThoughtForm(props) {
  const [text, setText] = useState("");

  const handleTextChange = ({ target }) => {
    setText(() => target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text.length){
      return
    }
    const newThought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime(),
    };
    props.addThought(newThought);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="AddThoughtForm">
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
