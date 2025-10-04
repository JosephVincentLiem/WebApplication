import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const UserList = () => {
  const [users, setUser] = useState({});

  useEffect(() => {
    getUsers();
  }, []);

  const getStatusDisplay = (statusValue) => {
    if (statusValue === 0) {
      return <span className="has-text-success">SUCCESS</span>;
    }

    return <span className="has-text-danger">FAILED</span>;
  };

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");

    const sortedUsers = [...response.data].sort((a, b) => {
      return new Date(b.transactionDate) - new Date(a.transactionDate);
    });

    const groupedData = sortedUsers.reduce((acc, user) => {
      const date = new Date(user.transactionDate);
      const year = date.getFullYear();
      const monthKey = `${year}-${String(date.getMonth() + 1).padStart(
        2,
        "0"
      )}`;
      const monthName = date.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
      });

      if (!acc[year]) {
        acc[year] = { months: {} };
      }

      if (!acc[year].months[monthKey]) {
        acc[year].months[monthKey] = {
          name: monthName,
          items: [],
        };
      }

      acc[year].months[monthKey].items.push(user);
      return acc;
    }, {});

    setUser(groupedData);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="column is-centered">
        <div className="column is-three-quarters">
          <div className="has-text-centered mb-4">
            <Link to={`add`} className="button is-success">
              Add New
            </Link>
          </div>

          <table className="table is-fullwidth is-striped is-bordered is-hoverable has-text-centered">
            <thead>
              <tr>
                <th>id</th>
                <th>productID</th>
                <th>productName</th>
                <th>amount</th>
                <th>customerName</th>
                <th>status</th>
                <th>transactionDate</th>
                <th>createBy</th>
                <th>createOn</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(users)
                .sort((a, b) => b - a)
                .map((year) => (
                  <React.Fragment key={year}>
                    <tr className="is-selected has-text-weight-bold">
                      <td colSpan="10">YEAR: {year}</td>
                    </tr>

                    {Object.keys(users[year].months)
                      .sort()
                      .reverse()
                      .map((monthKey) => (
                        <React.Fragment key={monthKey}>
                          <tr className="has-background-light has-text-weight-semibold">
                            <td colSpan="10">
                              &nbsp;&nbsp;&nbsp;&nbsp;MONTH:{" "}
                              {users[year].months[monthKey].name}
                            </td>
                          </tr>

                          {users[year].months[monthKey].items.map((user) => (
                            <tr key={user.id}>
                              <td>{user.id}</td>
                              <td>{user.productID}</td>
                              <td>{user.productName}</td>
                              <td>{user.amount}</td>
                              <td>{user.customerName}</td>
                              <td>{getStatusDisplay(user.status)}</td>
                              <td>
                                {new Date(user.transactionDate).toLocaleString(
                                  "en-gb",
                                  {
                                    year: "numeric",
                                    month: "2-digit",
                                    day: "2-digit",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    second: "2-digit",
                                  }
                                )}
                              </td>
                              <td>{user.createBy}</td>
                              <td>
                                {new Date(user.createOn).toLocaleString(
                                  "en-gb",
                                  {
                                    year: "numeric",
                                    month: "2-digit",
                                    day: "2-digit",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    second: "2-digit",
                                  }
                                )}
                              </td>
                              <td>
                                <Link
                                  to={`edit/${user.id}`}
                                  className="button is-small is-info mr-2"
                                >
                                  Edit
                                </Link>
                                <button
                                  onClick={() => deleteUser(user.id)}
                                  className="button is-small is-danger"
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                        </React.Fragment>
                      ))}
                  </React.Fragment>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
