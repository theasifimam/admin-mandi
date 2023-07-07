import React from "react";
import Pagination from "../../components/common/UI/Pagination";
import { Link } from "react-router-dom";
import Switch from "../../components/common/UI/Switch";

const ViewAllOrders = () => {
  const names = [
    "asif",
    "imam",
    "adil",
    "pankaj",
    "parwez",
    "kundan",
    "prashu",
    "ranjeet",
    "vipul",
    "mustakim",
    "amir",
    "rahul",
    "raghib",
    "raju",
    "rabri",
    "golu",
  ];

  const tableData = (amount) => {
    let dummyArray = [];
    for (let i = 0; i < amount; i++) {
      dummyArray.push({
        srNo: i < 9 ? "0" + (i + 1) : `${i + 1}`,
        fullName: `${names[Math.floor(Math.random() * 16)]} ${
          names[Math.floor(Math.random() * 16)]
        }`,
        email:
          `${names[Math.floor(Math.random() * 11)]}${
            names[Math.floor(Math.random() * 11)]
          }` + "@gmail.com",
        mNumber: Math.floor(Math.random() * 10000000000),
        role: Math.floor(Math.random() * 10) % 2 == 0 ? "Seller" : "Buyer",
      });
    }
    return dummyArray;
  };
  return (
    <div className="adminUserPage">
      <div className="top">
        <Link to="/products/add-product">
          All Orders{" "}
          <span>
            <img src="/icons-images/users/Addadminicon.svg" alt="plus icon" />
          </span>
        </Link>
      </div>

      <div className="table responsiveTable">
        <table className="table ">
          <thead>
            <tr className="align-middle">
              <th scope="col">Sr. No.</th>
              <th scope="col">Order ID</th>
              <th scope="col">Order Date</th>
              <th scope="col">Total Paid Amount</th>
              <th scope="col">Shipping Address</th>
              <th scope="col">Order Status</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData(10).map((data, index) => {
              return (
                <tr className="rowHeight3" key={index}>
                  <th scope="row" className="align-middle">
                    {data.srNo}
                  </th>
                  <td className="align-middle">{data.fullName}</td>
                  <td className="align-middle">{data.email}</td>
                  <td className="align-middle">{data.mNumber}</td>
                  <td className="align-middle">{data.mNumber}</td>
                  <td className="align-middle">{data.mNumber}</td>

                  <td className="align-middle">
                    <Switch />
                  </td>
                  <td className="align-middle">
                    <div className="controls">
                      <Link
                        to={`/users/view/${data.srNo} `}
                        className="center add"
                      >
                        <img src="/icons-images/users/view.svg" alt="plus" />
                      </Link>

                      <Link
                        to={`/users/update-user/${data.srNo}`}
                        className="center edit"
                      >
                        <img
                          src="/icons-images/users/editicon.svg"
                          alt="edit"
                        />
                      </Link>

                      <Link className="center delete">
                        <img
                          src="/icons-images/users/delete.svg"
                          alt="delete"
                        />
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination pageNumber={1} totalPages={10} />
    </div>
  );
};
export default ViewAllOrders;
