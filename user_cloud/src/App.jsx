import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    BusinessType: "",
    dscRegNo: "",
    businessName: "",
    tinNo: "",
    TradeName: "",
    firstName: "",
    middleName: "",
    lastName: "",
    extName: "",
    sex: "",
    eMailAdd: "",
    telNo: "",
    mobileNo: "",
    region: "",
    province: "",
    cityOrMunicipality: "",
    barangay: "",
    addressLine1: "",
    zipCode: "",
    pinAddress: "",
    totalFloorArea: "",
    numberOfEmployee: "",
    maleEmployee: "",
    femaleEmployee: "",
    numVehicleVan: "",
    numVehicleTruck: "",
    numVehicleMotor: "",
    numNozzle: "",
    weighScale: "",
    Taxregion: "",
    Taxprovince: "",
    TaxcityOrMunicipality: "",
    Taxbarangay: "",
    TaxaddressLine1: "",
    TaxzipCode: "",
    TaxpinAddress: "",
    ownPlace: "",
    tIGE: "",
    officeType: "",
    lineOfBusiness: "",
    productService: "",
    Units: "",
    capital: "",
    proofOfReg: "",
    proofOfRightToUseLoc: "",
    locationPlan: "",
    brgyClearance: "",
    marketClearance: "",
    occupancyPermit: "",
    cedula: "",
    photoOfBusinessEstInt: "",
    photoOfBusinessEstExt: "",
    status: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/newapplication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Form submitted successfully!");
        console.log("Saved data:", data);
      } else {
        alert("Error: " + (data.error || "Failed to submit"));
      }
    } catch (err) {
      console.error("Submit Error:", err);
      alert("Something went wrong. Check console for details.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>New Application Form</h1>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "10px" }}>
        {Object.keys(form).map((field) => (
          <div key={field}>
            <label style={{ display: "block", fontWeight: "bold" }}>
              {field}
            </label>
            <input
              type="text"
              name={field}
              value={form[field]}
              onChange={handleChange}
              style={{ width: "300px", padding: "5px" }}
            />
          </div>
        ))}
        <button type="submit" style={{ padding: "10px", marginTop: "20px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
