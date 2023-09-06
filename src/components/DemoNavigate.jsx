import React from "react";
import { useNavigate } from "react-router-dom";

export default function DemoNavigate() {
  //Navigate đc sử dụng để chuyển trang: sử dụng vs history của trình duyệt
  // useNavigate là 1 hôok đc cung cấp bởi react-router-DOM
  const navigate = useNavigate();
  return (
    <div>
      {/* được dùng để chuyển trang*/}
      <button onClick={() => navigate("/contactpage")}>
        Go to contact page
      </button>
      {/* Sử dụng vơus history */}
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate(1)}>Forward</button>
      {/* Sử dụng với navigate vs replace = true => ko lưu history */}
      <button onClick={() => navigate("/", { replace: true })}>Go home</button>
      {/* Sử dụng navigate để truyền dữ liệu, để lấy được dữ liệu (contactPage) => useLocation để nhận data */}
      <button
        onClick={() =>
          navigate("/contactpage", {
            state: {
              number: 10,
              userName: "Nguyen Văn A",
            },
          })
        }
      >
        Go to contactpage with data
      </button>
    </div>
  );
}
