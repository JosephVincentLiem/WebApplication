import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [id, setid] = useState("");
  const [productID, setproductID] = useState("");
  const [productName, setproductName] = useState("");
  const [amount, setamount] = useState("0");
  const [status, setstatus] = useState("");
  const [customerName, setcustomerName] = useState("");
  const [transactionDate, settransactionDate] = useState("");
  const [createBy, setcreateBy] = useState("");
  const [createOn, setcreateOn] = useState("");

  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        id,
        productID,
        productName,
        amount,
        status,
        customerName,
        transactionDate,
        createBy,
        createOn,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">id</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={id}
                onChange={(e) => setid(e.target.value)}
                placeholder="id"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">productID</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={productID}
                onChange={(e) => setproductID(e.target.value)}
                placeholder="productID"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">productName</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={productName}
                onChange={(e) => setproductName(e.target.value)}
                placeholder="productName"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">amount</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={amount}
                onChange={(e) => setamount(e.target.value)}
                placeholder="amount"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">customerName</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={customerName}
                onChange={(e) => setcustomerName(e.target.value)}
                placeholder="customerName"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">status</label>
            <div className="control">
              <div className="select is-full">
                <select
                  value={status}
                  onChange={(e) => setstatus(e.target.value)}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">transactionDate</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={transactionDate}
                onChange={(e) => settransactionDate(e.target.value)}
                placeholder="transactionDate"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">createBy</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={createBy}
                onChange={(e) => setcreateBy(e.target.value)}
                placeholder="createBy"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">createOn</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={createOn}
                onChange={(e) => setcreateOn(e.target.value)}
                placeholder="createOn"
              />
            </div>
          </div>

          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
