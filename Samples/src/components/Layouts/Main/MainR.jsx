import React from "react";
import "./Main.css";
import { Search } from "../../Search/Search";

export const MainR = () => {
  return (
    <>
      <div className="MainR">
        <div className="Title">
          <h1 className="JoinTitle">MY REQUESTS</h1>
        </div>
        <div className="SearchAndNew">
          <div className="SearchContainer">
            <div className="SearchText">
              <h2>Search:</h2>
            </div>
            <div className="Search">
              <Search />
            </div>
          </div>
          <div className="ButtonNew">
          <button class="signR">NEW</button>
          </div>
        </div>
      </div>
    </>
  );
};
