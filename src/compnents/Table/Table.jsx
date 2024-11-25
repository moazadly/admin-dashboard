import React, { useState } from "react";
import "./Table.css";
import TablePagination from "@mui/material/TablePagination";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import VisibilityIcon from "@mui/icons-material/Visibility";
import avatar from "../../Assets/images/images.webp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Mail from "@mui/icons-material/Work";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

// function TablePaginationDemo() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <Box
//       sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}
//     >
//       <TablePagination
//         component="div"
//         count={460}
//         page={page}
//         onPageChange={handleChangePage}
//         rowsPerPage={rowsPerPage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//         labelDisplayedRows={() => ""}
//         sx={{
//           color: "#aaa", // Set the text color to #aaa
//           "& .MuiTablePagination-actions": {
//             color: "#aaa", // Set the color of pagination controls to #aaa
//           },
//           "& .MuiSelect-icon": {
//             color: "#aaa", // Set the dropdown icon color to #aaa
//           },
//         }}
//       />
//     </Box>
//   );
// }

function TablePaginationDemo() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "8px",
        borderRadius: "4px", // Optional: Rounded edges
      }}
    >
      <TablePagination
        component="div"
        count={460}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Rows per page:"
        labelDisplayedRows={() => ""} // Hides "x-xx of xxx"
        sx={{
          color: "#aaa", // Light gray text color
          "& .MuiTablePagination-toolbar": {
            minHeight: "36px", // Compact size
          },
          "& .MuiSelect-select": {
            backgroundColor: "#0A1330",
            borderRadius: "5px",
            padding: 1,
            color: "#aaa",
          },
          "& .MuiSelect-icon": {
            color: "#aaa", // Dropdown icon color
          },
          "& .MuiTablePagination-actions button": {
            color: "#aaa", // Arrow buttons color
            backgroundColor: "#0A1330",
          },
        }}
      />
    </Box>
  );
}

const usersData = [
  {
    name: "John Carter",
    phone: "+20 1116864236",
    location: "United States",
    email: "john@google.com",
    status: "Active",
  },
  {
    name: "Sophie Moore",
    phone: "+20 1116864236",
    location: "United Kingdom",
    email: "john@google.com",
    status: "Inactive",
  },
  {
    name: "Matt Cannon",
    phone: "+20 1116864236",
    location: "Australia",
    email: "john@google.com",
    status: "Inactive",
  },
  {
    name: "Graham Hills",
    phone: "+20 1116864236",
    location: "India",
    email: "john@google.com",
    status: "Active",
  },
  {
    name: "Sandy Houston",
    phone: "+20 1116864236",
    location: "Canada",
    email: "john@google.com",
    status: "Inactive",
  },
];

function Table() {
  const [users, setUsers] = useState(usersData);
  return (
    <div className="table">
      <div className="table-container" style={{}}>
        <div
          className="header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 40px 0 40px",
            marginBottom: "-1px",
          }}
        >
          <h5 style={{ fontSize: "16px", fontWeight: 400 }}>All Users</h5>
          <div>
            <span style={{ color: "#c240f6" }}>1 - 10 </span>
            <span style={{ color: "#aaa" }}>of 256</span>
          </div>
        </div>
        <hr />
        <table className="user-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" className="custom-checkbox" />
              </th>
              <th>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <PersonIcon
                    sx={{ fontSize: "18px", marginRight: "6px", color: "#ccc" }}
                  />
                  Name
                  <UnfoldMoreIcon
                    sx={{ fontSize: "18px", marginLeft: "4px", color: "#666" }}
                  />
                </div>
              </th>
              <th>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {" "}
                  <LocalPhoneIcon
                    sx={{ fontSize: "18px", marginRight: "6px", color: "#ccc" }}
                  />
                  Phone{" "}
                  <UnfoldMoreIcon
                    sx={{ fontSize: "18px", marginLeft: "4px", color: "#666" }}
                  />
                </div>
              </th>
              <th>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <LocationOnIcon
                    sx={{ fontSize: "18px", marginRight: "6px", color: "#ccc" }}
                  />
                  Location
                  <UnfoldMoreIcon
                    sx={{ fontSize: "18px", marginLeft: "4px", color: "#666" }}
                  />
                </div>
              </th>
              <th>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Mail
                    sx={{ fontSize: "18px", marginRight: "6px", color: "#ccc" }}
                  />
                  Email
                  <UnfoldMoreIcon
                    sx={{ fontSize: "18px", marginLeft: "4px", color: "#666" }}
                  />
                </div>
              </th>
              <th>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <CheckBoxIcon
                    sx={{ fontSize: "18px", marginRight: "6px", color: "#ccc" }}
                  />
                  Status{" "}
                  <UnfoldMoreIcon
                    sx={{ fontSize: "18px", marginLeft: "4px", color: "#666" }}
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                style={
                  index % 2 === 0
                    ? { backgroundColor: "#0A122C" }
                    : { backgroundColor: "#0a1739" }
                }
              >
                <td>
                  <input className="custom-checkbox" type="checkbox" />
                </td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "fit-content",
                    }}
                  >
                    <img
                      src={avatar}
                      alt="user"
                      style={{ width: "30%", marginRight: "10px" }}
                    ></img>
                    <span style={{ width: "fit-content", color: "#fff" }}>
                      {user.name}
                    </span>
                  </div>
                </td>
                <td>{user.phone}</td>
                <td>{user.location}</td>
                <td>{user.email}</td>
                <td>
                  <p className={`status-button ${user.status.toLowerCase()}`}>
                    <span style={{ marginRight: "7px" }}>&#x2022;</span>
                    {user.status}
                  </p>
                </td>
                <td>
                  <div style={{ display: "flex" }}>
                    <Switch
                      name="loading"
                      disabled={true}
                      sx={{
                        width: 44, // Adjust width
                        height: 21, // Adjust height
                        padding: 0,
                        borderRadius: 8,
                        marginRight: 3.5,
                        "& .MuiSwitch-track": {
                          backgroundColor: "#1BC677",
                        },
                        "& .MuiSwitch-thumb": {
                          color: "#1BC677",
                          position: "absolute",
                          top: "8%",
                          left: "6%",
                        },
                      }}
                    />
                    <VisibilityIcon />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <span style={{ color: "#fff" }}>1-10 of 460</span>
        <TablePaginationDemo />
      </div>
    </div>
  );
}

export default Table;
