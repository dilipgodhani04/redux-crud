import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { deletUser } from "../Action.js/Index";




const Table = () => {
  const userList = useSelector((state) => state.abc.userList);
  const rows = [];
  const dispatch = useDispatch();
  // let navigate = useNavigate();
  const handelDelet = (i) => {

    dispatch(deletUser(i))

  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "email",
      headerName: "email",
      type: "number",
      width: 90,
    },
    { field: "password", headerName: "password", type: "text", width: 90 },
  
    {
      field: "delete",
      headerName: "Delete",
      sortable: false,
      width: 130,
  
      disableClickEventBubbling: true,
      renderCell: (b) => {
        console.log('b',b);
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={() => handelDelet(b.id)}
          >
            Delete
          </Button>
        );
      },
    },
  ];

  // const [userList, setUserList] = useState([]);
  



  

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={userList}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};
export default Table;
