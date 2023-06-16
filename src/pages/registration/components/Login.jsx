import { FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
import Swal from "sweetalert2";

function Login() {
  const nameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogIn = (e) => {
    e.preventDefault();

    if (nameRef.current.value !== "" && passwordRef.current.value !== "") {
      const [username, password] = [
        nameRef.current.value,
        passwordRef.current.value,
      ];

      axios
        .post("https://elinteerie1.pythonanywhere.com/api/rest-auth/login/", {
          username,
          password,
        })
        .then((res) => {
          Swal.fire({
            title: "Loading",
            text: "Logging in",
            icon: "info",
            showCancelButton: false,
            showConfirmButton: false,
          });
          nameRef.current.value = "";
          passwordRef.current.value = "";

          axios
            .get("https://elinteerie1.pythonanywhere.com/api/student/", {
              headers: {
                Authorization: `Token ${res.data.key}`,
              },
            })
            .then((res) => {
              Swal.close();
              console.log(res.data);
            });
        })
        .catch(() => {
          Swal.fire({
            title: "Error!",
            text: "Can't login for some reason, try checking if the details you provided are correct",
            icon: "error",
            confirmButtonText: "Retry",
            confirmButtonColor: "red",
          });
        });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please fill all fields",
        icon: "error",
        confirmButtonText: "Continue",
        confirmButtonColor: "red",
      });
    }
  };

  return (
    <section className="login">
      <h1>Login</h1>
      <form className="login__form" onSubmit={handleLogIn}>
        <FaGraduationCap className="login__img" />
        <h3>Student Portal Login</h3>
        <input
          type="text"
          placeholder="Username"
          aria-label="enter your user name"
          ref={nameRef}
        />
        <input
          type="password"
          placeholder="Password"
          aria-label="enter your password"
          ref={passwordRef}
        />
        <button role="submit">Login</button>
        {/* create forgot password page */}
        <Link to="/">Forgot Password</Link>
        <p>
          {/* create verify account page */}
          First time here? <Link to="/">Verify your account</Link>
        </p>
        <p className="login__attribution">Powered by Ulpha Deep Labs</p>
      </form>
    </section>
  );
}

export default Login;
