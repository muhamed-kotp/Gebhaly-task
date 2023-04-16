import React, { useEffect, useState, useContext } from "react";
import Table from "react-bootstrap/Table";
import Store from "../Context/Store";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "../Style/Products.css";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import SideBar from "./SideBar";
import "../Style/Users.css";
import Swal from "sweetalert2";
import { MdPageview } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const Users = () => {
  const Context = useContext(Store);

  const [Users, setUsers] = useState([...Context.storeUsers]);

  // function to get users data from json server
  const getData = () => {
    axios({
      method: "get",
      url: "http://localhost:9000/users",
    }).then((data) => {
      const arr = data.data;
      // console.log(arr);
      setUsers(arr);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  // function allow admin to remove any user
  const del = (object) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
          axios({
            method: "delete",
            url: `http://localhost:9000/users/${object.id}`,
          }).then((data) => {
            getData();
            return data;
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your Product is safe :)",
            "error"
          );
        }
      });
  };

  // function allow admin control users's role
  const makeAdmin = (object) => {
    if (object.role === "admin") {
      axios({
        method: "put",
        url: `http://localhost:9000/users/${object.id}`,
        data: {
          name: object.name,
          age: object.age,
          mail: object.mail,
          pass: object.pass,
          role: "member",
          gender: object.gender,
        },
      }).then((data) => {
        getData();

        return data;
      });
    } else {
      if (object.role === "member") {
        axios({
          method: "put",
          url: `http://localhost:9000/users/${object.id}`,
          data: {
            name: object.name,
            age: object.age,
            mail: object.mail,
            pass: object.pass,
            role: "admin",
            gender: object.gender,
          },
        }).then((data) => {
          getData();

          return data;
        });
      }
    }
  };
  return (
    <div>
      <div className="row">
        <div className="col-2 sideBar">
          <SideBar />
        </div>

        <div className="col-10">
          <Nav.Link variant="dark" as={NavLink} to="/NewUser">
            <Button className="add" variant="secondary">
              Add New User
            </Button>
          </Nav.Link>

          <Table
            className="whole-users-table"
            striped
            bordered
            hover
            variant="dark"
          >
            <thead>
              <tr>
                <th className="head-id">id</th>

                <th className="head-title head-title-name "> Name</th>

                <th className="head-title-age head-title"> Age</th>
                <th className="head-title"> E-mail</th>
                <th className="head-title"> Role </th>

                <th className="head-title"> Control</th>
              </tr>
            </thead>
            <tbody>
              {Users.map((e) => (
                <tr key={e.id}>
                  <td className="users-id-col">{e.id}</td>
                  <td className="users-name-col">{e.name}</td>
                  <td className="users-age-col">{e.age}</td>
                  <td className="users-mail-col">{e.mail}</td>
                  <td className="users-role-col">{e.role}</td>
                  <td className=" users-control-col">
                    <div>
                      <Button
                        variant={e.role === "admin" ? "secondary" : "danger"}
                        onClick={() => makeAdmin(e)}
                        className="users-admin-edit-btn"
                      >
                        {e.role === "admin" ? "Remove Admin" : "Make Admin"}
                      </Button>
                    </div>

                    <div className="users-btns-cont">
                      <Nav.Link
                        variant="dark"
                        as={NavLink}
                        to={`/Users/${e.id}`}
                      >
                        <MdPageview className="users-icon magnify" />
                      </Nav.Link>
                      <Nav.Link as={NavLink} to={`/UserEdit/${e.id}`}>
                        <AiTwotoneEdit className="users-icon pin" />
                      </Nav.Link>

                      <Button
                        className="users-delte-btn"
                        variant="Link"
                        onClick={() => del(e)}
                      >
                        <RiDeleteBin6Line className="users-icon basket" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Users;
