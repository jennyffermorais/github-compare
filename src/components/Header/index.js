import React, { useState, useEffect } from "react";
import ClayButton from "@clayui/button";
import ClayIcon, { ClayIconSpriteContext } from "@clayui/icon";
import gitHubService from "../../services/github-service";
import "./styles.css";
import "../../styles/global.css";
import logo from "../../images/Vector.svg";
import search from "../../images/search.svg";
import star from "../../images/star.svg";
import adjust from "../../images/adjust.svg";
import cards from "../../images/cards.svg";
import buttonAdd from "../../images/buttonAdd.svg";
import filterButton from "../../images/filter-button.svg";

import { connect, useSelector, useDispatch } from "react-redux";
import { addRepoAction } from "../../actions";

const Header = (props) => {
  let [inShow, setInShow] = useState("");
  let [inputRepo, setInputRepo] = useState("");

  const actions = useDispatch();

  function toggleAddForm() {
    setInShow(inShow == "" ? "show" : "");
  }

  function addRepositoryHandler() {
    gitHubService(inputRepo).then((repo) => {
      actions(addRepoAction(repo.data));
    });
  }

  useEffect(() => {}, []);

  return (
    <nav className="application-bar application-bar-dark navbar navbar-expand-md">
      <div className="container-fluid container-fluid-max-xl">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link nav-link-monospaced" href="#1" role="button">
              <img className="logo" src={logo} alt="logo" />
            </a>
          </li>
          <li className="nav-item">
            <div className="navbar-text-truncate">Github Compare</div>
          </li>
          <li className="nav-item">
            <div className="navbar-text-truncate">Filter and order</div>

            <a className="nav-link nav-link-monospaced" href="#1" role="button">
              <img
                className="filterButton"
                src={filterButton}
                alt="filterButton"
              />
            </a>
          </li>
        </ul>
        <div className="input-group input-group-sm">
          <div className="input-group-item">
            <input
              className="form-control input-group-inset input-group-inset-after"
              placeholder="Search"
              type="text"
              // style={{ width: "50%" }}
            />
            <span className="input-group-inset-item input-group-inset-item-after">
              <button className="btn btn-unstyled" type="button">
                <img className="search" src={search} alt="search" />
              </button>
            </span>
          </div>
        </div>
        <div className=" navbar-text-truncate"></div>
        <ul className="navbar-nav ul-parent">
          <li className="nav-item">
            <a className="nav-link nav-link-monospaced" href="#1" role="button">
              <ClayIcon
                symbol="star-o"
                style={{ color: "red" }}
                // spritemap={spritemap}
              />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-monospaced" href="#1" role="button">
              <img className="adjust" src={adjust} alt="adjust" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-link-monospaced" href="#1" role="button">
              <img className="cards" src={cards} alt="cards" />
            </a>
          </li>
          <li className="dropdown nav-item show">
            <a
              aria-expanded="true"
              aria-haspopup="true"
              className="dropdown-toggle nav-link nav-link-monospaced"
              data-toggle="dropdown"
              href="#1"
              role="button"
            >
              <img
                className="buttonAdd"
                src={buttonAdd}
                alt="buttonAdd"
                onClick={toggleAddForm}
              />
            </a>
            {/* <div className="dropdown-box"> */}
            <ul
              id="dropdown-list"
              aria-labelledby="navbarDropdownMenuLink"
              className={`dropdown-menu dropdown-menu-right ul-child ${inShow}`}
            >
              <li>
                <strong>New repository</strong>
              </li>
              <li>
                <div>
                  Repository <span style={{ color: "red" }}>*</span>
                </div>
              </li>
              <li>
                <div className="input-group input-group-sm">
                  <div className="input-group-item input-dropdown">
                    <input
                      className="form-control input-group-inset input-group-inset-after search-dropdown "
                      type="text"
                      onChange={(event) => setInputRepo(event.target.value)}
                      // style={{ width: "50%" }}
                    />
                    {/* <span className="input-group-inset-item input-group-inset-item-after">
                      <button className="btn btn-unstyled" type="button">
                        <img className="search" src={search} alt="search" />
                      </button>
                    </span> */}
                  </div>
                </div>
              </li>
              <li className="dropdown-divider"></li>
              <li>
                <>
                  <ClayButton
                    className="btn-dropdown"
                    displayType="secondary"
                    onClick={toggleAddForm}
                  >
                    {"Cancel"}
                  </ClayButton>
                  <ClayButton
                    className="btn-dropdown"
                    onClick={addRepositoryHandler}
                  >
                    {"Add"}
                  </ClayButton>
                </>
              </li>
            </ul>
            {/* </div> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
