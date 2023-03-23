import React from "react";
import DeleteAllUser from "./DeleteAllUser";
import { fakeUserData } from "../../Api/Api";
import { useDispatch } from "react-redux";
import { addUser } from "../../Store/Slices/UserDetailsSlice";
import DisplayUser from "./DisplayUser";

const UserDetail = () => {
  const dispatch = useDispatch();

  const addNewUser = (name) => {
    // alert("Are you want to add data");
    // simply call the action creaters
    dispatch(addUser(name));
    // console.log(name);
  };
  return (
    <div className="container">
      <h1 className="text-primary">User Details</h1>
      <div className="d-flex justify-content-end">
        <button
          onClick={() => {
            addNewUser(fakeUserData());
          }}
          type="button"
          className="btn btn-outline-info"
        >
          ADD USER
        </button>
      </div>
      <DisplayUser></DisplayUser>
      <DeleteAllUser></DeleteAllUser>
    </div>
  );
};

export default UserDetail;
