import axios from "axios";
import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";

function ListForm() {
  const [list, setList] = useState([]);
  const [currentpage, setCurrentpage] = useState(1);
  const [perpage, setPerpage] = useState(10);
  const [toggle, setToggle] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
      setList(res.data);
    });
  }, []);

  const paginate = (childValue) => {
    setCurrentpage(childValue);
  };

  const lastindexofuser = currentpage * perpage;
  const firstindexofuser = lastindexofuser - perpage;
  const currentindex = list.slice(firstindexofuser, lastindexofuser);

  const handleclick = () => {
    if (toggle == true) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  const clearlist = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      {toggle ? (
        <div
          className="container my-4"
          style={{
            backgroundColor: "grey",
            color: "white",
            height: "100%",
            width: "200%",
          }}
        >
          <h2 style={{ color: "maroon", fontFamily: "initial" }}>UserList</h2>
          <button onClick={clearlist} className="btn btn-success">
            Logout
          </button>
          <label style={{ color: "blue", fontSize: "20px", margin: "20px" }}>
            Dark mode
          </label>
          <input type="checkbox" onClick={handleclick} />

          {toggle ? (
            <div className="container">
              {currentindex.map((ele, index) => (
                <ul
                  key={index}
                  style={{
                    border: "2px solid black",
                    color: "black",
                    margin: "20px",
                    backgroundColor: "silver",
                  }}
                >
                  <b>{ele.title}</b>
                  <p style={{ margin: "20px" }}>{ele.body}</p>
                </ul>
              ))}
            </div>
          ) : (
            <div className="list_form darkmode">
              {currentindex.map((ele, index) => (
                <ul
                  key={index}
                  style={{
                    border: "2px solid black",
                    color: "white",
                    margin: "20px",
                    backgroundColor: "grey",
                  }}
                >
                  <b>{ele.title}</b>
                  <p style={{ margin: "20px" }}> {ele.body}</p>
                </ul>
              ))}
            </div>
          )}
          <Pagination
            perpage={perpage}
            totaluser={list.length}
            paginate={paginate}
          />
        </div>
      ) : (
        <div
          className="container my-4"
          style={{ backgroundColor: "white", color: "black" }}
        >
          <h2 style={{ color: "maroon", fontFamily: "initial" }}>UserList</h2>
          <button onClick={clearlist} className="btn btn-success">
            Logout
          </button>
          <label style={{ color: "blue", fontSize: "20px", margin: "20px" }}>
            Light mode
          </label>
          <input type="checkbox" onClick={handleclick} />

          {toggle ? (
            <div className="container">
              {currentindex.map((ele, index) => (
                <ul
                  key={index}
                  style={{
                    border: "2px solid black",
                    color: "black",
                    margin: "20px",
                    backgroundColor: "silver",
                  }}
                >
                  <b>{ele.title}</b>
                  <p style={{ margin: "20px" }}>{ele.body}</p>
                </ul>
              ))}
            </div>
          ) : (
            <div className="list_form darkmode">
              {currentindex.map((ele, index) => (
                <ul
                  key={index}
                  style={{
                    border: "2px solid black",
                    color: "white",
                    margin: "20px",
                    backgroundColor: "grey",
                  }}
                >
                  <b>{ele.title}</b>
                  <p style={{ margin: "20px" }}> {ele.body}</p>
                </ul>
              ))}
            </div>
          )}
          <Pagination
            perpage={perpage}
            totaluser={list.length}
            paginate={paginate}
          />
        </div>
      )}
    </>
  );
}

export default ListForm;
