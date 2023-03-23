import React from "react";
import { useDispatch } from "react-redux";
// import { clearAllUser } from "../../Store/Slices/UserDetailsSlice";
import { clearAllUsersIMP } from "../../Store/Actions/Action";

const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const deleteAll = () => {
    // this dispatch used for user slice
    // dispatch(clearAllUser());
    dispatch(clearAllUsersIMP());
  };
  return (
    <div>
      <div className="d-flex justify-content-end">
        <button
          onClick={() => {
            deleteAll();
          }}
          type="button"
          className="btn btn-outline-warning"
        >
          DELETE ALL
        </button>
      </div>
    </div>
  );
};

export default DeleteAllUser;
