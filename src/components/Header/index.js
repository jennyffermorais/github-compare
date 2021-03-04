import React, { useState } from "react";
import ClayIcon, { ClayIconSpriteContext } from "@clayui/icon";
import ClayButton, { ClayButtonWithIcon } from "@clayui/button";
import { ClayDropDownWithItems } from "@clayui/drop-down";
import { ClayCheckbox, ClayInput } from "@clayui/form";
import ClayLabel from "@clayui/label";
import ClayManagementToolbar, {
  ClayResultsBar,
} from "@clayui/management-toolbar";

import logo from "../../images/Vector.svg";
import buttonAdd from "../../images/buttonAdd.svg";
import spritemap from "../../images/icons.svg";

import gitHubService from "../../services/github-service";
import { useSelector, useDispatch } from "react-redux";
import {
  addRepoAction,
  filterByName,
  filterByFavorite,
} from "../../store/actions";

import "./styles.css";
import "../../styles/global.css";

const Header = (props) => {
  let [inShow, setInShow] = useState("");
  let [inputRepo, setInputRepo] = useState("");

  const actions = useDispatch();

  function toggleAddForm() {
    setInShow(inShow == "" ? "show" : "");
  }

  function addRepositoryHandler() {
    gitHubService(inputRepo).then((repo) => {
      const newRepo = {
        id: repo.data.id,
        isFavorite: false,
        avatar_url: repo.data.owner.avatar_url,
        full_name: repo.data.full_name,
        stargazers_count: repo.data.stargazers_count,
        forks_count: repo.data.forks_count,
        open_issues: repo.data.open_issues,
        created_at: repo.data.created_at,
        updated_at: repo.data.updated_at,
        license: repo.data.license ? repo.data.license.spdx_id : "N/A",
        language: repo.data.language,
      };
      actions(addRepoAction(newRepo));
    });
  }

  function searchRepo(event) {
    actions(filterByName(event.target.value));
  }

  function showFavorites(event) {
    actions(filterByFavorite(event.target.value));
  }

  const filterItems = [
    { label: "Filter Action 1", onClick: () => alert("Filter clicked") },
    { label: "Filter Action 2", onClick: () => alert("Filter clicked") },
  ];

  const viewTypes = [
    {
      label: "List",
      onClick: () => alert("Show view list"),
      symbolLeft: "list",
    },
    {
      label: "Table",
      onClick: () => alert("Show view table"),
      symbolLeft: "table",
    },
    {
      active: true,
      label: "Card",
      onClick: () => alert("Show view card"),
      symbolLeft: "cards2",
    },
  ];

  const [searchMobile, setSearchMobile] = useState(false);

  const viewTypeActive = viewTypes.find((type) => type.active);

  return (
    <>
      <ClayManagementToolbar>
        <ClayManagementToolbar.ItemList>
          <ul className="navbar-nav">
            <li className="nav-item">
              <img className="logo" src={logo} alt="logo" />
            </li>
            <li className="nav-item navbar-text-truncate">Github Compare</li>
          </ul>

          <ClayDropDownWithItems
            items={filterItems}
            spritemap={spritemap}
            trigger={
              <ClayButton className="nav-link" displayType="unstyled">
                <span className="navbar-breakpoint-down-d-none">
                  <span className="navbar-text-truncate">
                    {"Filter and Order"}
                  </span>

                  <ClayIcon
                    className="inline-item inline-item-after"
                    spritemap={spritemap}
                    symbol="caret-bottom"
                  />
                </span>
                <span className="navbar-breakpoint-d-none">
                  <ClayIcon spritemap={spritemap} symbol="filter" />
                </span>
              </ClayButton>
            }
          />
        </ClayManagementToolbar.ItemList>

        <ClayManagementToolbar.Search showMobile={searchMobile}>
          <ClayInput.Group>
            <ClayInput.GroupItem>
              <ClayInput
                placeholder="Search"
                aria-label="Search"
                className="form-control input-group-inset input-group-inset-after"
                type="text"
                onChange={(event) => searchRepo(event)}
              />
              <ClayInput.GroupInsetItem after tag="span">
                <ClayButtonWithIcon
                  className="navbar-breakpoint-d-none"
                  displayType="unstyled"
                  onClick={() => setSearchMobile(false)}
                  spritemap={spritemap}
                  symbol="times"
                />
                <ClayButtonWithIcon
                  displayType="unstyled"
                  spritemap={spritemap}
                  symbol="search"
                  type="submit"
                />
              </ClayInput.GroupInsetItem>
            </ClayInput.GroupItem>
          </ClayInput.Group>
        </ClayManagementToolbar.Search>

        <ClayManagementToolbar.ItemList>
          <ClayManagementToolbar.Item className="navbar-breakpoint-d-none">
            <ClayButton
              className="nav-link nav-link-monospaced"
              displayType="unstyled"
              onClick={() => setSearchMobile(true)}
            >
              <ClayIcon spritemap={spritemap} symbol="search" />
            </ClayButton>
          </ClayManagementToolbar.Item>

          <ClayManagementToolbar.Item>
            <ClayButton
              className="nav-link nav-link-monospaced"
              displayType="unstyled"
              onClick={() => {}}
            >
              <ClayIcon
                symbol="star-o"
                spritemap={spritemap}
                onClick={(event) => showFavorites(event)}
              />{" "}
            </ClayButton>
          </ClayManagementToolbar.Item>

          <ClayManagementToolbar.Item>
            <ClayButton
              className="nav-link nav-link-monospaced"
              displayType="unstyled"
              onClick={() => {}}
            >
              <ClayIcon symbol="adjust" spritemap={spritemap} />
            </ClayButton>
          </ClayManagementToolbar.Item>

          <ClayManagementToolbar.Item>
            <ClayDropDownWithItems
              items={viewTypes}
              spritemap={spritemap}
              trigger={
                <ClayButton
                  className="nav-link-monospaced nav-link"
                  displayType="unstyled"
                >
                  <ClayIcon
                    spritemap={spritemap}
                    symbol={viewTypeActive ? viewTypeActive.symbolLeft : ""}
                  />
                </ClayButton>
              }
            />
          </ClayManagementToolbar.Item>

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
                    />
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
          </li>
        </ClayManagementToolbar.ItemList>
      </ClayManagementToolbar>

      {/* <ClayResultsBar>
        <ClayResultsBar.Item>
          <span className="component-text text-truncate-inline">
            <span className="text-truncate">
              {'2 results for "'}
              <strong>{"Red"}</strong>
              {'"'}
            </span>
          </span>
        </ClayResultsBar.Item>
        <ClayResultsBar.Item expand>
          <ClayLabel
            className="component-label tbar-label"
            displayType="unstyled"
            spritemap={spritemap}
          >
            {"Filter"}
          </ClayLabel>
        </ClayResultsBar.Item>
        <ClayResultsBar.Item>
          <ClayButton
            className="component-link tbar-link "
            displayType="unstyled"
          >
            {"Clear"}
          </ClayButton>
        </ClayResultsBar.Item>
      </ClayResultsBar> */}
    </>
  );
};

export default Header;
