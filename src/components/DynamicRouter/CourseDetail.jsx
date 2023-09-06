import React from "react";
import { useParams } from "react-router-dom";

export default function CourseDetail() {
  // useParams là 1 hook đc cug cấp bởi react-router-dom => lấy param trên url
  const param = useParams();
  console.log(param);
  return (
    <>
      <p>Khóa học: {param.id}</p>
    </>
  );
}
