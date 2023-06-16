/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";
import { FaUserGraduate, FaGraduationCap, FaSchool } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
import { GiUpgrade } from "react-icons/gi";
import { MdCastForEducation } from "react-icons/md";

let ignore = false;

function Dashboard() {
  const [advice, setAdvice] = useState(
    "You are indeed successful, just keep working hard"
  );

  const { state } = useLocation();
  
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

  const handleUpload = (e) => {
    e.preventDefault();
    // add upload logic later
  };

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
      <div>
        <div>
          <div>
            <GiUpgrade />
            <p>
              <span>Level</span>
              <span>{state.level ? state.level : "N/A"}</span>
            </p>
          </div>
        </div>
        <div>
          <div>
            <FaGraduationCap />
            <p>
              <span>Courses</span>
              <span>{state.courses ? state.courses : "N/A"}</span>
            </p>
          </div>
        </div>
        <div>
          <div>
            <FaSchool />
            <p>
              <span>CGPA</span>
              <span>{state.cgpa ? state.cgpa : "N/A"}</span>
            </p>
          </div>
        </div>
        <div>
          <div>
            <MdCastForEducation />
            <p>
              <span>Current GPA</span>
              <span>{state.gpa ? state.gpa : "N/A"}</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2>Your Details</h2>
        <div>
          <form onSubmit={handleUpload}>
            <input type="file" />
            <input type="submit" value="Upload Image" />
          </form>
          <table>
            <tbody>
              <tr>
                <th>Name:</th>
                <td>
                  {state.user.first_name && state.user.last_name
                    ? `${state.user.first_name} ${state.user.last_name}`
                    : "User"}
                </td>
              </tr>
              <tr>
                <th>Gender:</th>
                <td>{state.user.gender ? state.user.gender : "N/A"}</td>
              </tr>
              <tr>
                <th>Maiden Name:</th>
                <td>
                  {state.user.maiden_name ? state.user.maiden_name : "N/A"}
                </td>
              </tr>
              <tr>
                <th>Date of Birth:</th>
                <td>{state.user.dob ? state.user.dob : "N/A"}</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>{state.user.email ? state.user.email : "N/A"}</td>
              </tr>
              <tr>
                <th>Faculty:</th>
                <td>
                  {state.student_faculty?.name
                    ? state.student_faculty.name
                    : "N/A"}
                </td>
              </tr>
              <tr>
                <th>Department:</th>
                <td>
                  {state.student_dept?.name ? state.student_dept.name : "N/A"}
                </td>
              </tr>
              <tr>
                <th>Level:</th>
                <td>{state.level ? state.level : "N/A"}</td>
              </tr>
              <tr>
                <th>Registration Number:</th>
                <td>{state.student_reg ? state.student_reg : "N/A"}</td>
              </tr>
              <tr>
                <th>Carryover(s):</th>
                <td>{state.carryovers > 0 ? state.carryovers : 0}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
