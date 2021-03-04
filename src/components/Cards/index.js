import React, { useState } from "react";
import ClayIcon, { ClayIconSpriteContext } from "@clayui/icon";
import ClayLabel from "@clayui/label";
import spritemap from "../../images/icons.svg";

import { useDispatch } from "react-redux";
import { favRepoAction, delRepoAction } from "../../store/actions";

import "./styles.css";

export function Cards(props) {
  const actions = useDispatch();
  return (
    <div className="container-card" key={props.id}>
      <div className="repository">
        <header>
          <img src={props.avatar} alt="avatar" />
          <strong>{props.fullname}</strong>
          <div className="repository_buttons">
            <ClayIcon
              symbol={props.isFavorite ? "star" : "star-o"}
              spritemap={spritemap}
              onClick={() => actions(favRepoAction(props.id))}
            />
            <ClayIcon symbol="trash" spritemap={spritemap} onClick={() => actions(delRepoAction(props.id))} />
          </div>
        </header>
        <div className="dropdown-divider"></div>

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
            <strong>License </strong>
            {props.license != null ? (
              <small> {props.license}</small>
            ) : (
              <small>N/A</small>
            )}
          </li>
          <li>
            {props.language != null ? (
              <ClayLabel displayType="warning" spritemap={spritemap}>
                {props.language}
              </ClayLabel>
            ) : (
              ""
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
