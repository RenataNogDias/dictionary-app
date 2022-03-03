import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeLow } from "@fortawesome/free-solid-svg-icons";

import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <span>
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noreferrer"
          className="icon"
        >
          <FontAwesomeIcon icon={faVolumeLow} />
        </a>
      </span>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
