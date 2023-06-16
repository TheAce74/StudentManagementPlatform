/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import { FaUserGraduate } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";

let ignore = false;

function Dashboard() {
  const [advice, setAdvice] = useState(
    "You are indeed successful, just keep working hard"
  );

  const { state } = useLocation();
  // eslint-disable-next-line no-unused-vars
  const obj = {
    carryovers: 0,
    cgpa: "5.00",
    gpa: "5.00",
    id: 1,
    level: 100,
    paid_school_fees: true,
    photo: null,
    student_dept: { id: 1, name: "Compuer Science" },
    student_reg: "2020120",
    user: {
      date_joined: "2023-06-15T16:38:01Z",
      email: "admin@admin.com",
      first_name: "John",
      groups: [],
      id: 2,
      is_active: true,
      is_staff: false,
      is_superuser: false,
      last_login: "2023-06-16T15:58:50.434884Z",
      last_name: "Emma",
      name: "Student",
      password:
        "pbkdf2_sha256$600000$tVKavIYtbPl3xjyzOxiGXV$UaFGULsQPwjtpll7ELjj0rfFfpjQ5TlUTkgGjNUSZDM=",
      user_permissions: [],
      username: "2020120",
    },
  };

  useEffect(() => {
    if (!ignore) {
      axios.get("https://api.adviceslip.com/advice").then((res) => {
        setAdvice(res.data.slip.advice);
      });
    }
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <section className="dashboard">
      <div>
        <div>
          <h1>
            Welcome back,{" "}
            {state.user.first_name ? state.user.first_name : "User"}
          </h1>

          <p>{advice}</p>
        </div>
        {state.photo ? (
          <img src={state.photo} alt="profile image" />
        ) : (
          <FaUserGraduate />
        )}
      </div>
    </section>
  );
}

export default Dashboard;
