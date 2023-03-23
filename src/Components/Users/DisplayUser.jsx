import React from "react";
import { removeUser } from "../../Store/Slices/UserDetailsSlice";
import { useSelector, useDispatch } from "react-redux";

const DisplayUser = () => {
  const dispatch = useDispatch();
  // useSelector is used to read data from store
  const data = useSelector((state) => {
    return state.users;
  });

  const deleteSingleUser = (id) => {
    // alert("Are you want to delete this user?");
    dispatch(removeUser(id));
  };
  //   console.log(data);
  return (
    <div className="my-4">
      {data.map((user, id) => {
        return (
          <li
            key={id}
            className="list-group-item d-flex border border-info my-1 p-1"
            style={{ fontSize: "22px" }}
          >
            {user}{" "}
            <span>
              {" "}
              <button
                className="btn mx-4"
                onClick={() => {
                  deleteSingleUser(id);
                }}
              >
                🧹
              </button>
            </span>
          </li>
        );
      })}
      <hr />
    </div>
  );
};

export default DisplayUser;
