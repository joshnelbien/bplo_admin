import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./side_bar.css";

function Side_bar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        navigate("/")
    };

    return (
        <div className="sidebar-container">

            <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>


            <nav className={`sidebar ${isOpen ? "open" : ""}`}>
                <ul>
                    <li><button onClick={() => navigate("/dashboard")}>DASHBOARD</button></li>
                    <li><button onClick={() => navigate("/new_records")}>New Application</button></li>
                    <li><button onClick={() => navigate("/renew_records")}>Renew Application</button></li>
                    <li><button onClick={() => navigate("/profile")}>Profile</button></li>
                    <li><button onClick={() => navigate("/obo")}>OBO</button></li>
                    <li><button onClick={() => navigate("/cho")}>CHO</button></li>
                    <li><button onClick={() => navigate("/cmswo")}>CMSWO</button></li>
                    <li><button onClick={() => navigate("/zoning")}>ZONING</button></li>
                    <li><button onClick={() => navigate("/cenro")}>CENRO</button></li>


                    <li>
                        <button onClick={(e) => { e.preventDefault(); handleLogout(); }}>
                            Log Out
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Side_bar;
