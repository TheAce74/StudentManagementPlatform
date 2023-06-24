import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

function Results() {
  const { state } = useLocation();

  const navigate = useNavigate();

  const [resultState, setResultState] = useState({
    level: "Select Level",
    semester: "Select Semester",
  });

  const responseRef = useRef(null);

  const key = sessionStorage.getItem("key");

  useEffect(() => {
    if (!key) {
      navigate("/login");
    }
  }, [key, navigate]);

  axios
    .get("https://elinteerie1.pythonanywhere.com/api/courses/", {
      headers: {
        Authorization: `Token ${key}`,
      },
    })
    .then((res) => {
      responseRef.current = res;
    })
    .catch(() => {
      Swal.fire({
        title: "Error!",
        text: "Can't fetch info",
        icon: "error",
        showCancelButton: false,
        showConfirmButton: false,
      });
      navigate("/dashboard");
    });

  const handleChangeLevel = (e) => {
    setResultState({ ...resultState, level: e.target.value });
  };

  const handleChangeSemester = (e) => {
    setResultState({ ...resultState, semester: e.target.value });
  };

  const getLevels = (val) => {
    const levelArr = [];
    const defaultLevel = 100;
    while (val >= defaultLevel) {
      levelArr.push(val);
      val -= 100;
    }
    return levelArr.reverse().map((item) => (
      <option value={item} key={item}>
        {item}
      </option>
    ));
  };

  const getGrade = (num) => {
    const arr = ["A", "B", "C", "D", "E", "F"];
    return arr.reverse()[num];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // add submit logic later
  };

  return (
    <section className="results">
      <h1>Results</h1>

      <form onSubmit={handleSubmit}>
        <select value={resultState.level} onChange={handleChangeLevel} required>
          <option value="Select Level" disabled>
            Select Level
          </option>
          {getLevels(state.level)}
        </select>
        <select
          value={resultState.semester}
          onChange={handleChangeSemester}
          required
        >
          <option value="Select Semester" disabled>
            Select Semester
          </option>
          <option value="Harmattan">Harmattan</option>
          <option value="Rain">Rain</option>
        </select>
        <button role="submit">View</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Course title</th>
            <th>Course code</th>
            <th>Unit(s)</th>
            <th>Grade</th>
            <th>GP</th>
          </tr>
        </thead>
        <tbody>
          {responseRef.current
            ? responseRef.current.data.course_items.map((item, index) => (
                <tr key={index}>
                  <td>{item.course}</td>
                  <td>{item.course_code ? item.course_code : "N/A"}</td>
                  <td>{item.units ? item.units : "N/A"}</td>
                  <td>{getGrade(item.grade_point)}</td>
                  <td>{item.units ? item.units * item.grade_point : "N/A"}</td>
                </tr>
              ))
            : ""}
          {responseRef.current ? (
            <tr>
              <td colSpan="2" className="bold">
                Units/GPA/TGP
              </td>
              <td>
                {responseRef.current.data.student_grade.total_course_units}
              </td>
              <td>
                {responseRef.current.data.student_grade.gpa
                  ? responseRef.current.data.student_grade.gpa
                  : "N/A"}
              </td>
              <td>
                {responseRef.current.data.student_grade.total_grade_point}
              </td>
            </tr>
          ) : (
            <tr>
              <td className="splash" colSpan="5">
                No courses added
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {responseRef.current ? (
        <p className="cgpa">
          <span>CGPA: </span>
          <span>
            {responseRef.current.data.student_grade.cgpa
              ? responseRef.current.data.student_grade.cgpa
              : "N/A"}
          </span>
        </p>
      ) : (
        ""
      )}
    </section>
  );
}

export default Results;
