import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./side_bar.css"; // ← Link to the CSS file

function Side_bar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        console.log("Logged out");
    };

    return (
        <div className="sidebar-container">
            {/* Hamburger */}
            <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>

            {/* Sidebar */}
            <nav className={`sidebar ${isOpen ? "open" : ""}`}>
                <ul>
                    <li><button onClick={() => navigate("/")}>DASHBOARD</button></li>
                    <li><button onClick={() => navigate("/new_records")}>New Records</button></li>
                    <li><button onClick={() => navigate("/renew_records")}>Renew Records</button></li>
                    <li><button onClick={() => navigate("/profile")}>Profile</button></li>
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
