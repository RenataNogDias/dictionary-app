import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon="fa-solid fa-volume-low" />
      </a>

      {props.phonetic.text}
    </div>
  );
}
