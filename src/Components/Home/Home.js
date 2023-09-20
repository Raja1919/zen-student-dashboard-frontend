import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const [selectedItemName, setSelectedItemName] = useState("");

  const handleSidebarItemClick = (itemName) => {
    setSelectedItemName(itemName);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };


  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 sidebar   ">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2  vh-100">
            <Link
              to="/class"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto  text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.WMiAdG9Mz7SMMA3W1tAylgAAAA&pid=Api&P=0&h=180"
                  alt=""
                  style={{ width: "60px", height: "60px" }}
                />
                student
              </span>
            </Link>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <Link
                  to="/class"
                  className="nav-link align-middle px-0"
                  onClick={() => handleSidebarItemClick("Class")}
                >
                  <i className="fs-4 bi-house"></i>
                  <span className="ms-1 d-none d-sm-inline ">Class</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="nav-link px-0 align-middle"
                  onClick={() => handleSidebarItemClick("dashboard")}
                >
                  <i className="fs-4 bi bi-grid-fill"></i>
                  <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/task"
                  className="nav-link px-0 align-middle"
                  onClick={() => handleSidebarItemClick("Task")}
                >
                  <i className="fs-4 bi-table"></i>
                  <span className="ms-1 d-none d-sm-inline">Tasks</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/webcode"
                  className="nav-link px-0 align-middle"
                  onClick={() => handleSidebarItemClick("Webcode")}
                >
                  <i className="fs-4 bi bi-speedometer"></i>
                  <span className="ms-1 d-none d-sm-inline">Webcode</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/capstone"
                  className="nav-link px-0 align-middle"
                  onClick={() => handleSidebarItemClick("Capstone")}
                >
                  <i className="fs-4 bi bi-kanban"></i>
                  <span className="ms-1 d-none d-sm-inline">Capstone</span>
                </Link>
              </li>
           
              <li>
                <Link
                  to="/application"
                  className="nav-link px-0 align-middle"
                  onClick={() => handleSidebarItemClick("Application")}
                >
                  <i className="fs-4 bi bi-ui-checks"></i>
                  <span className="ms-1 d-none d-sm-inline">Application</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/certificate"
                  className="nav-link px-0 align-middle"
                  onClick={() => handleSidebarItemClick("Certificate")}
                >
                  <i className="fs-4 bi bi-graph-up-arrow"></i>
                  <span className="ms-1 d-none d-sm-inline">Certificate</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/interviewTask"
                  className="nav-link px-0 align-middle"
                  onClick={() => handleSidebarItemClick("InterviewTask")}
                >
                  <i className="fs-4 bi bi-building-dash"></i>
                  <span className="ms-1 d-none d-sm-inline">InterviewTask</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/syllabus"
                  className="nav-link px-0 align-middle"
                  onClick={() => handleSidebarItemClick("Syllabus")}
                >
                  <i className="fs-4 bi bi-book"></i>
                  <span className="ms-1 d-none d-sm-inline">Syllabus</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/leaderboard"
                  className="nav-link px-0 align-middle"
                  onClick={() => handleSidebarItemClick("Leaderboard")}
                >
                  <i className="fs-4 bi bi-award-fill"></i>
                  <span className="ms-1 d-none d-sm-inline">Leaderboard</span>
                </Link>
              </li>
            </ul>
            <hr />
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="d-flex justify-content-between p-2  shadow">
            <h1>{selectedItemName}</h1>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Profile
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <Link
                  to="/user"
                  className="dropdown-item"
                  onClick={() => handleSidebarItemClick("Profile")}
                >
                  Student details
                </Link>
                <button className="dropdown-item" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
