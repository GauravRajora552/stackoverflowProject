import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import User from "./User";
import "./Users.css";

const UsersList = () => {
  const [searchItem, setSearchItem] = useState("");
  const users = useSelector((state) => state.usersReducer);
  return (
    <div className="">
      <div className="user-searchbar">
        <input
          type="text"
          placeholder="Search User..."
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <AiOutlineSearch className="search-icon" />
      </div>
      <div className="user-list-container">
        {searchItem === ""
          ? users.map((user) => <User user={user} key={user?._id} />)
          : users
              .filter((u) =>
                u.name.toLowerCase().includes(searchItem.toLowerCase())
              )
              .map((user) => <User user={user} key={user?._id} />)}
      </div>
    </div>
  );
};

export default UsersList;
