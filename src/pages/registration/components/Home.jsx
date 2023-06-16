import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">
      <section className="home__hero">
        <h1>Welcome to the Student Management Platform!</h1>
        <p>
          Manage your results, messages, notifications, and customize your
          profile.
        </p>
        <Link to="login">Get Started</Link>
      </section>

      <section className="home__results">
        <h2>Results</h2>
        <p>
          Manage your results in real-time with ease and get visually stunning
          feedback
        </p>
      </section>

      <section className="home__profile">
        <h2>Profile</h2>
        <p>
          Easily customize your profile to suit your tastes. Personalized
          notifications and messages are an added bonus
        </p>
      </section>

      <section className="home__cta">
        <h2>You haven&apos;t keyed in yet?</h2>
        <Link to="login">Get Started</Link>
      </section>

      <footer className="home__footer">
        <p>&copy; 2023 Student Management Platform. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default Home;
