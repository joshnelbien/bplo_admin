import { useNavigate } from "react-router-dom";
import './home.css'; // Link the CSS file

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-box">
        <h1>Welcome to the Home Page</h1>
        <ul>
          <li>
            <button onClick={() => navigate("/newApp")}>New App</button>
          </li>
          <li>
            <button onClick={() => navigate("/renewApp")}>Renew App</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
