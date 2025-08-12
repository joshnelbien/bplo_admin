import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './renewApp.css';

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
    status: "pending"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/renew", form);
      alert("Form submitted successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit the form.");
    }
  };

  return (
    <div className="container">
      <button className="back-button" onClick={() => navigate("/home")}>← Back to Home</button>
      <h1>Renew Business Application Form</h1>
      <form onSubmit={handleSubmit}>
        
        {/* Business Information */}
        <section>
          <h2>Business Information</h2>
          <input type="text" placeholder="Business Type" name="BusinessType" value={form.BusinessType} onChange={handleChange} />
          <input type="text" placeholder="DSC Reg No" name="dscRegNo" value={form.dscRegNo} onChange={handleChange} />
          <input type="text" placeholder="Business Name" name="businessName" value={form.businessName} onChange={handleChange} />
          <input type="text" placeholder="TIN No" name="tinNo" value={form.tinNo} onChange={handleChange} />
          <input type="text" placeholder="Trade Name" name="TradeName" value={form.TradeName} onChange={handleChange} />
        </section>

        {/* Personal Information */}
        <section>
          <h2>Personal Information</h2>
          <input type="text" placeholder="First Name" name="firstName" value={form.firstName} onChange={handleChange} />
          <input type="text" placeholder="Middle Name" name="middleName" value={form.middleName} onChange={handleChange} />
          <input type="text" placeholder="Last Name" name="lastName" value={form.lastName} onChange={handleChange} />
          <input type="text" placeholder="Ext Name" name="extName" value={form.extName} onChange={handleChange} />
          <input type="text" placeholder="Sex" name="sex" value={form.sex} onChange={handleChange} />
        </section>

        {/* Contact Information */}
        <section>
          <h2>Contact Information</h2>
          <input type="text" placeholder="Email Address" name="eMailAdd" value={form.eMailAdd} onChange={handleChange} />
          <input type="text" placeholder="Telephone Number" name="telNo" value={form.telNo} onChange={handleChange} />
          <input type="text" placeholder="Mobile Number" name="mobileNo" value={form.mobileNo} onChange={handleChange} />
        </section>

        {/* Business Address */}
        <section>
          <h2>Business Address</h2>
          <input type="text" placeholder="Region" name="region" value={form.region} onChange={handleChange} />
          <input type="text" placeholder="Province" name="province" value={form.province} onChange={handleChange} />
          <input type="text" placeholder="City/Municipality" name="cityOrMunicipality" value={form.cityOrMunicipality} onChange={handleChange} />
          <input type="text" placeholder="Barangay" name="barangay" value={form.barangay} onChange={handleChange} />
          <input type="text" placeholder="Address Line 1" name="addressLine1" value={form.addressLine1} onChange={handleChange} />
          <input type="text" placeholder="Zip Code" name="zipCode" value={form.zipCode} onChange={handleChange} />
          <input type="text" placeholder="Pin Address" name="pinAddress" value={form.pinAddress} onChange={handleChange} />
        </section>

        {/* Business Operation */}
        <section>
          <h2>Business Operation</h2>
          <input type="text" placeholder="Total Floor Area" name="totalFloorArea" value={form.totalFloorArea} onChange={handleChange} />
          <input type="text" placeholder="Total Employees" name="numberOfEmployee" value={form.numberOfEmployee} onChange={handleChange} />
          <input type="text" placeholder="Male Employees" name="maleEmployee" value={form.maleEmployee} onChange={handleChange} />
          <input type="text" placeholder="Female Employees" name="femaleEmployee" value={form.femaleEmployee} onChange={handleChange} />
          <input type="text" placeholder="Vehicle (Van)" name="numVehicleVan" value={form.numVehicleVan} onChange={handleChange} />
          <input type="text" placeholder="Vehicle (Truck)" name="numVehicleTruck" value={form.numVehicleTruck} onChange={handleChange} />
          <input type="text" placeholder="Vehicle (Motorcycle)" name="numVehicleMotor" value={form.numVehicleMotor} onChange={handleChange} />
          <input type="text" placeholder="Number of Nozzles" name="numNozzle" value={form.numNozzle} onChange={handleChange} />
          <input type="text" placeholder="Weighing Scale" name="weighScale" value={form.weighScale} onChange={handleChange} />
        </section>

        {/* Taxpayer’s Address */}
        <section>
          <h2>Taxpayer’s Address</h2>
          <input type="text" placeholder="Region" name="Taxregion" value={form.Taxregion} onChange={handleChange} />
          <input type="text" placeholder="Province" name="Taxprovince" value={form.Taxprovince} onChange={handleChange} />
          <input type="text" placeholder="City/Municipality" name="TaxcityOrMunicipality" value={form.TaxcityOrMunicipality} onChange={handleChange} />
          <input type="text" placeholder="Barangay" name="Taxbarangay" value={form.Taxbarangay} onChange={handleChange} />
          <input type="text" placeholder="Address Line 1" name="TaxaddressLine1" value={form.TaxaddressLine1} onChange={handleChange} />
          <input type="text" placeholder="Zip Code" name="TaxzipCode" value={form.TaxzipCode} onChange={handleChange} />
          <input type="text" placeholder="Pin Address" name="TaxpinAddress" value={form.TaxpinAddress} onChange={handleChange} />
          <input type="text" placeholder="Own Place" name="ownPlace" value={form.ownPlace} onChange={handleChange} />
        </section>

        {/* Business Activity */}
        <section>
          <h2>Business Activity</h2>
          <input type="text" placeholder="Tax Incentives from Gov't" name="tIGE" value={form.tIGE} onChange={handleChange} />
          <input type="text" placeholder="Office Type" name="officeType" value={form.officeType} onChange={handleChange} />
          <input type="text" placeholder="Line of Business" name="lineOfBusiness" value={form.lineOfBusiness} onChange={handleChange} />
          <input type="text" placeholder="Product/Service" name="productService" value={form.productService} onChange={handleChange} />
          <input type="text" placeholder="Units" name="Units" value={form.Units} onChange={handleChange} />
          <input type="text" placeholder="Capital" name="capital" value={form.capital} onChange={handleChange} />
        </section>

        {/* Business Requirements */}
        <section>
          <h2>Business Requirements</h2>
          <input type="text" placeholder="Proof of Registration" name="proofOfReg" value={form.proofOfReg} onChange={handleChange} />
          <input type="text" placeholder="Right to Use Location" name="proofOfRightToUseLoc" value={form.proofOfRightToUseLoc} onChange={handleChange} />
          <input type="text" placeholder="Location Plan" name="locationPlan" value={form.locationPlan} onChange={handleChange} />
          <input type="text" placeholder="Barangay Clearance" name="brgyClearance" value={form.brgyClearance} onChange={handleChange} />
          <input type="text" placeholder="Market Clearance" name="marketClearance" value={form.marketClearance} onChange={handleChange} />
          <input type="text" placeholder="Occupancy Permit" name="occupancyPermit" value={form.occupancyPermit} onChange={handleChange} />
          <input type="text" placeholder="CEDULA" name="cedula" value={form.cedula} onChange={handleChange} />
          <input type="text" placeholder="Photo (Interior)" name="photoOfBusinessEstInt" value={form.photoOfBusinessEstInt} onChange={handleChange} />
          <input type="text" placeholder="Photo (Exterior)" name="photoOfBusinessEstExt" value={form.photoOfBusinessEstExt} onChange={handleChange} />
        </section>

        <div className="form-actions">
          <button type="submit">Submit Form</button>
        </div>
      </form>
    </div>
  );
}

export default NewApp;
