import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Course() {
  const [searchParam, setSearchParam] = useSearchParams();
  return (
    <>
      <h1>Course table</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Course 1</td>
            <td>100</td>
            <td>
              <button
                onClick={() =>
                  setSearchParam({ course: "reactJS", price: "12000" })
                }
              >
                detail
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Course 2</td>
            <td>200</td>
            <td>
              <button
                onClick={() =>
                  setSearchParam({ course: "Java", price: "14000" })
                }
              >
                detail
              </button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Course 3</td>
            <td>300</td>
            <td>
              <button
                onClick={() =>
                  setSearchParam({ course: "html", price: "5000" })
                }
              >
                detail
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <h3>
        Khóa học: {searchParam.get("course")} <br /> Giá:{" "}
        {searchParam.get("price")}
      </h3>
    </>
  );
}
