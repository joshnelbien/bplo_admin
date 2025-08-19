// ZoningCert.jsx
import "./zoning.css";

// Convert month number to Filipino month name
function getFilipinoMonth(monthIndex) {
  const months = [
    "Enero",
    "Pebrero",
    "Marso",
    "Abril",
    "Mayo",
    "Hunyo",
    "Hulyo",
    "Agosto",
    "Setyembre",
    "Oktubre",
    "Nobyembre",
    "Disyembre",
  ];
  return months[monthIndex];
}

// Compute zoning fee based on capital
function calculateZoningFee(capital) {
  if (capital <= 5000) {
    return "Exempted";
  } else if (capital >= 5001 && capital <= 10000) {
    return 100;
  } else if (capital >= 10001 && capital <= 50000) {
    return 200;
  } else if (capital >= 50001 && capital <= 100000) {
    return 300;
  } else {
    return ((capital - 100000) * 0.001 + 500).toFixed(2);
  }
}

function ZoningCert({ applicant }) {
  const today = new Date();
  const day = today.getDate();
  const month = getFilipinoMonth(today.getMonth());
  const year = today.getFullYear();

  const zoningFee = calculateZoningFee(applicant.capital);

  return (
    <div className="zoning-certificate">
      <h2>CITY MAYOR'S OFFICE</h2>
      <h3>San Pablo City</h3>

      <h2>ZONING AND LAND USE DIVISION</h2>
      <h3>PAGPAPATUNAY</h3>

      <p>
        ITO AY PAGPAPATUNAY na ang isang lugar na lupang matatagpuan sa barangay{" "}
        <u><b>{applicant.barangay}</b></u> San Pablo City,
      </p>
      <p>
        nakatala sa pangalan ni <u><b>{applicant.firstName} {applicant.lastName}</b></u> ay
        nakakasakop sa sonang nakatalaga sa/o para gamiting RES/COMM/IND/AGRI/INS,
      </p>
      <p>
        dahil dito ang pagtatayo ng <u><b>{applicant.BusinessType}</b></u> ay maaaring
        pahintulutan...
      </p>

      <p>
        Ipinagkaloob ngayon ika-<u><b>{day}</b></u> ng <u><b>{month}</b></u>, <u><b>{year}</b></u> kaugnay ng kanyang
        kahilingan para sa MAYOR'S PERMIT
      </p>

      <p>CAPITAL: P<u><b>{applicant.capital}</b></u></p>
      <p>
        ZONING FEE:{" "}
        <u><b>{zoningFee === "Exempted" ? zoningFee : `P${zoningFee}`}</b></u>
      </p>

      <p>New</p>
      <p>Renew</p>

      <p>For:</p>
      <p>HON. ARCADIO B. GAOANGADA, MNSA</p>
      <p>City Mayor</p>

      <button onClick={() => window.print()}>Print Certificate</button>
    </div>
  );
}

export default ZoningCert;
