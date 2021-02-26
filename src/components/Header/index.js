import React from "react";

import "./styles.css";
import "../../styles/global.css";
import logo from "../../images/Vector.svg";
import search from "../../images/search.svg";
import star from "../../images/star.svg";
import adjust from "../../images/adjust.svg";
import cards from "../../images/cards.svg";
import button from "../../images/button.svg";

export function Header() {
  return (
    <nav class="application-bar application-bar-dark navbar navbar-expand-md">
      <div class="container-fluid container-fluid-max-xl">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link nav-link-monospaced" href="#1" role="button">
              <img className="logo" src={logo} alt="logo" />
            </a>
          </li>
          <li class="nav-item">
            <div class="navbar-text-truncate">Github Compare</div>
          </li>
          <li class="nav-item">
            <div class="navbar-text-truncate">Filter and order</div>
          </li>
        </ul>
        <div class="input-group-item">
          <input
            class="form-control input-group-inset input-group-inset-after"
            placeholder="Search"
            type="text"
          />
          <span class="input-group-inset-item input-group-inset-item-after">
            <button class="btn btn-unstyled" type="button">
              <img className="search" src={search} alt="search" />
            </button>
          </span>
        </div>
        <div class=" navbar-text-truncate"></div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link nav-link-monospaced" href="#1" role="button">
              <img className="star" src={star} alt="star" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link-monospaced" href="#1" role="button">
              <img className="adjust" src={adjust} alt="adjust" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link-monospaced" href="#1" role="button">
              <img className="cards" src={cards} alt="cards" />
            </a>
          </li>
          <li class="dropdown nav-item">
            <a
              aria-expanded="false"
              aria-haspopup="true"
              class="dropdown-toggle nav-link nav-link-monospaced"
              data-toggle="dropdown"
              href="#1"
              role="button"
            >
              <img className="button" src={button} alt="button" />
            </a>
            <ul
              aria-labelledby="navbarDropdownMenuLink"
              class="dropdown-menu dropdown-menu-right"
            >
              <li>
                <a class="dropdown-item" href="#1">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#1">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#1">
                  Something else here
                </a>
              </li>
              <li class="dropdown-divider"></li>
              <li>
                <a class="dropdown-item" href="#1">
                  Separated link
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
