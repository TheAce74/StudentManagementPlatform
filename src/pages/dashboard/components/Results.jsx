import { useLocation } from "react-router-dom";

function Results() {
  const { state } = useLocation();
  console.log(state);
  return (
    <section className="results">
      <h1>Results</h1>

      <form>
        <select value="Select Level">
          <option value="Select Level" disabled>
            Select Level
          </option>
          <option value="100L">100L</option>
          <option value="200L">200L</option>
          <option value="300L">300L</option>
          <option value="400L">400L</option>
          <option value="500L">500L</option>
          <option value="600L">600L</option>
        </select>
        <select value="Select Semester">
          <option value="Select Semester" disabled>
            Select Semester
          </option>
          <option value="Harmattan">Harmattan</option>
          <option value="Rain">Rain</option>
        </select>
        <button role="submit">View</button>
      </form>
      {/* make this table dynamic */}
      <table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Course title</th>
            <th>Course code</th>
            <th>Unit(s)</th>
            <th>Grade</th>
            <th>GP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Elementary Mathematics</td>
            <td>MTH 101</td>
            <td>4</td>
            <td>A</td>
            <td>20</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Elementary Mathematics</td>
            <td>MTH 101</td>
            <td>4</td>
            <td>A</td>
            <td>20</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Elementary Mathematics</td>
            <td>MTH 101</td>
            <td>4</td>
            <td>A</td>
            <td>20</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Elementary Mathematics</td>
            <td>MTH 101</td>
            <td>4</td>
            <td>A</td>
            <td>20</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Elementary Mathematics</td>
            <td>MTH 101</td>
            <td>4</td>
            <td>A</td>
            <td>20</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Elementary Mathematics</td>
            <td>MTH 101</td>
            <td>4</td>
            <td>A</td>
            <td>20</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Elementary Mathematics</td>
            <td>MTH 101</td>
            <td>4</td>
            <td>A</td>
            <td>20</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Elementary Mathematics</td>
            <td>MTH 101</td>
            <td>4</td>
            <td>A</td>
            <td>20</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Elementary Mathematics</td>
            <td>MTH 101</td>
            <td>4</td>
            <td>A</td>
            <td>20</td>
          </tr>
          <tr>
            <td colSpan="3">TGP/GPA</td>
            <td>36</td>
            <td>5.00</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Results;
