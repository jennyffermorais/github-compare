import React, { useState, useEffect } from "react";
import "./styles.css";
import favorite from "../../images/favorite.svg";
import remove from "../../images/remove.svg";

export function Cards(props) {
  console.log("TESTEEE", props);
  return (
    <div className="container-cards">
      <div className="repository">
        <header>
          <img id="icon" src={props.avatar} alt="avatar" />
          <strong>{props.fullname}</strong>
          <div className="repository_buttons">
            <img
              //   onClick={handleFavorite}
              id="favorite"
              src={favorite}
              alt="favorite-button"
            />
            <img
              //   onClick={(e) => {
              //     handleRemoveRepo(repository.id);
              //   }}
              id="remove"
              src={remove}
              alt="remove-button"
            />
          </div>
        </header>
        <ul>
          <li>
            {" "}
            <strong>Stars</strong> <small> {props.stars} </small>
          </li>
          <li>
            {" "}
            <strong>Forks</strong> <small>{props.forks}</small>
          </li>
          <li>
            {" "}
            <strong>Issues</strong> <small>{props.openIssues}</small>
          </li>
          <li>
            {" "}
            <strong>Age</strong> <small>{props.age} </small>
          </li>
          <li>
            {" "}
            <strong>Last commit</strong> <small>{props.lastCommit} </small>
          </li>
          <li>
            {" "}
            <strong>License</strong> <small> {props.license}</small>
          </li>
          <li>
            {" "}
            <small>{props.language}</small>
          </li>
        </ul>
      </div>
    </div>
  );
}
