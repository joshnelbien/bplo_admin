import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './newApp.css'; // Link the CSS file
function NewApp() {

  const navigate = useNavigate();

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
      status:"pending"
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:5000/new", form);
        alert("Form submitted successfully!");
        console.log(response.data);
      } catch (error) {
        console.error("Submission error:", error);
        alert("Failed to submit the form.");
      }
    };
  
    const renderInput = (name, label) => (
      <div className="form-group">
        <label>{label}</label>
        <input name={name} onChange={handleChange} value={form[name]} />
      </div>
    );
  
    return (
      <div className="container">
         <button className="back-button" onClick={() => navigate("/home")}>← Back to Home</button>
        <h1>Business Application Form</h1>
        <form onSubmit={handleSubmit}>
          <section>
            <h2>Business Information</h2>
            {renderInput("BusinessType", "Business Type")}
            {renderInput("dscRegNo", "DSC Reg No")}
            {renderInput("businessName", "Business Name")}
            {renderInput("tinNo", "TIN No")}
            {renderInput("TradeName", "Trade Name")}
          </section>
  
          <section>
            <h2>Personal Information</h2>
            {renderInput("firstName", "First Name")}
            {renderInput("middleName", "Middle Name")}
            {renderInput("lastName", "Last Name")}
            {renderInput("extName", "Ext Name")}
            {renderInput("sex", "Sex")}
          </section>
  
          <section>
            <h2>Contact Information</h2>
            {renderInput("eMailAdd", "Email Address")}
            {renderInput("telNo", "Telephone Number")}
            {renderInput("mobileNo", "Mobile Number")}
          </section>
  
          <section>
            <h2>Business Address</h2>
            {renderInput("region", "Region")}
            {renderInput("province", "Province")}
            {renderInput("cityOrMunicipality", "City/Municipality")}
            {renderInput("barangay", "Barangay")}
            {renderInput("addressLine1", "Address Line 1")}
            {renderInput("zipCode", "Zip Code")}
            {renderInput("pinAddress", "Pin Address")}
          </section>
  
          <section>
            <h2>Business Operation</h2>
            {renderInput("totalFloorArea", "Total Floor Area")}
            {renderInput("numberOfEmployee", "Total Employees")}
            {renderInput("maleEmployee", "Male Employees")}
            {renderInput("femaleEmployee", "Female Employees")}
            {renderInput("numVehicleVan", "Vehicle (Van)")}
            {renderInput("numVehicleTruck", "Vehicle (Truck)")}
            {renderInput("numVehicleMotor", "Vehicle (Motorcycle)")}
            {renderInput("numNozzle", "Number of Nozzles")}
            {renderInput("weighScale", "Weighing Scale")}
          </section>
  
          <section>
            <h2>Taxpayer’s Address</h2>
            {renderInput("Taxregion", "Region")}
            {renderInput("Taxprovince", "Province")}
            {renderInput("TaxcityOrMunicipality", "City/Municipality")}
            {renderInput("Taxbarangay", "Barangay")}
            {renderInput("TaxaddressLine1", "Address Line 1")}
            {renderInput("TaxzipCode", "Zip Code")}
            {renderInput("TaxpinAddress", "Pin Address")}
            {renderInput("ownPlace", "Own Place")}
          </section>
  
          <section>
            <h2>Business Activity</h2>
            {renderInput("tIGE", "Tax Incentives from Gov't")}
            {renderInput("officeType", "Office Type")}
            {renderInput("lineOfBusiness", "Line of Business")}
            {renderInput("productService", "Product/Service")}
            {renderInput("Units", "Units")}
            {renderInput("capital", "Capital")}
          </section>
  
          <section>
            <h2>Business Requirements</h2>
            {renderInput("proofOfReg", "Proof of Registration")}
            {renderInput("proofOfRightToUseLoc", "Right to Use Location")}
            {renderInput("locationPlan", "Location Plan")}
            {renderInput("brgyClearance", "Barangay Clearance")}
            {renderInput("marketClearance", "Market Clearance")}
            {renderInput("occupancyPermit", "Occupancy Permit")}
            {renderInput("cedula", "CEDULA")}
            {renderInput("photoOfBusinessEstInt", "Photo (Interior)")}
            {renderInput("photoOfBusinessEstExt", "Photo (Exterior)")}
          </section>
  
          <div className="form-actions">
            <button type="submit">Submit Form</button>
          </div>
        </form>
      </div>
    );
  }

export default NewApp;