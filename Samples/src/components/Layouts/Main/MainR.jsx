import React, { useState } from "react";
import "./Main.css";
import { Search } from "../../Search/Search";
import { RequestsTable } from "../../RequestsTable/RequestsTable";
import NewRequestModal from "../../Modals/NewModal/NewRequestModal";

export const MainR = () => {
  const [showModal, setShowModal] = useState(false);

  const handleNewRequest = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <div className="MainR">
        <div className="Title">
          <h1 className="JoinTitleR">MY REQUESTS</h1>
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
            <button className="signR" onClick={handleNewRequest}>NEW</button>
          </div>
        </div>
        <div className="RequestContainer">
          <RequestsTable/>
        </div>
      </div>
      {showModal && <NewRequestModal onClose={handleCloseModal} />}
    </>
  );
};