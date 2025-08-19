import { useEffect, useState } from "react";
import "./nav.css";

function Nav() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <nav className="nav-bar">
      <div className="nav-content">
        <h2 className="content">NAV CONTENT</h2>
        <div className="status">
          <span className={`status-circle ${isOnline ? "online" : "offline"}`} />
          <span>{isOnline ? "Online" : "Offline"}</span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
