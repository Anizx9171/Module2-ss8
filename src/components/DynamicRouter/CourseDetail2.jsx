import React from "react";
import { useParams } from "react-router-dom";

export default function CourseDetail2() {
  const param = useParams();
  console.log(param);
  return (
    <>
      <h1>
        khóa học: <b style={{ color: "red" }}>{param.id}</b> <br /> kiểu:{" "}
        <b style={{ color: "red" }}>{param.type}</b>
      </h1>
    </>
  );
}
