import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './RenewApp.css';

function RenewApp() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1); // Step tracker

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
      navigate('/home');
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit the form.");
    }
  };

  // Validation for each step
  const stepValid = () => {
    switch (step) {
      case 1:
        return form.BusinessType && form.dscRegNo && form.businessName && form.tinNo && form.TradeName;
      case 2:
        return form.firstName && form.middleName && form.lastName && form.extName && form.sex;
      case 3:
        return form.eMailAdd && form.telNo && form.mobileNo;
      case 4:
        return form.region && form.province && form.cityOrMunicipality && form.barangay && form.addressLine1 && form.zipCode && form.pinAddress;
      case 5:
        return form.totalFloorArea && form.numberOfEmployee && form.maleEmployee && form.femaleEmployee && form.numVehicleVan && form.numVehicleTruck && form.numVehicleMotor && form.numNozzle && form.weighScale;
      case 6:
        return form.Taxregion && form.Taxprovince && form.TaxcityOrMunicipality && form.Taxbarangay && form.TaxaddressLine1 && form.TaxzipCode && form.TaxpinAddress && form.ownPlace;
      case 7:
        return form.tIGE && form.officeType && form.lineOfBusiness && form.productService && form.Units && form.capital;
      case 8:
        return form.proofOfReg && form.proofOfRightToUseLoc && form.locationPlan && form.brgyClearance && form.marketClearance && form.occupancyPermit && form.cedula && form.photoOfBusinessEstInt && form.photoOfBusinessEstExt;
      default:
        return false;
    }
  };

  return (
    <div className="container">
      <button className="back-button" onClick={() => navigate("/home")}>← Back to Home</button>
      <h1>Renew Business Application Form</h1>
      <form onSubmit={handleSubmit}>

        {/* Step 1: Business Information */}
        {step === 1 && (
          <section>
            <h2>Business Information</h2>

            <label>
              Business Type
              <input
                type="text"
                name="BusinessType"
                value={form.BusinessType}
                onChange={handleChange}
              />
            </label>

            <label>
              DSC Reg No
              <input
                type="text"
                name="dscRegNo"
                value={form.dscRegNo}
                onChange={handleChange}
              />
            </label>

            <label>
              Business Name
              <input
                type="text"
                name="businessName"
                value={form.businessName}
                onChange={handleChange}
              />
            </label>

            <label>
              TIN No
              <input
                type="text"
                name="tinNo"
                value={form.tinNo}
                onChange={handleChange}
              />
            </label>

            <label>
              Trade Name
              <input
                type="text"
                name="TradeName"
                value={form.TradeName}
                onChange={handleChange}
              />
            </label>
          </section>
        )}

        {/* Step 2: Personal Information */}
        {step === 2 && (
          <section>
            <h2>Personal Information</h2>

            <label>
              First Name
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
              />
            </label>

            <label>
              Middle Name
              <input
                type="text"
                name="middleName"
                value={form.middleName}
                onChange={handleChange}
              />
            </label>

            <label>
              Last Name
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
              />
            </label>

            <label>
              Ext Name
              <input
                type="text"
                name="extName"
                value={form.extName}
                onChange={handleChange}
              />
            </label>

            <label>
              Sex
              <input
                type="text"
                name="sex"
                value={form.sex}
                onChange={handleChange}
              />
            </label>
          </section>
        )}

        {/* Step 3: Contact Information */}
        {step === 3 && (
          <section>
            <h2>Contact Information</h2>

            <label>
              Email Address
              <input
                type="text"
                name="eMailAdd"
                value={form.eMailAdd}
                onChange={handleChange}
              />
            </label>

            <label>
              Telephone Number
              <input
                type="text"
                name="telNo"
                value={form.telNo}
                onChange={handleChange}
              />
            </label>

            <label>
              Mobile Number
              <input
                type="text"
                name="mobileNo"
                value={form.mobileNo}
                onChange={handleChange}
              />
            </label>
          </section>
        )}

        {/* Step 4: Business Address */}
        {step === 4 && (
          <section>
            <h2>Business Address</h2>

            <label>
              Region
              <input
                type="text"
                name="region"
                value={form.region}
                onChange={handleChange}
              />
            </label>

            <label>
              Province
              <input
                type="text"
                name="province"
                value={form.province}
                onChange={handleChange}
              />
            </label>

            <label>
              City/Municipality
              <input
                type="text"
                name="cityOrMunicipality"
                value={form.cityOrMunicipality}
                onChange={handleChange}
              />
            </label>

            <label>
              Barangay
              <input
                type="text"
                name="barangay"
                value={form.barangay}
                onChange={handleChange}
              />
            </label>

            <label>
              Address Line 1
              <input
                type="text"
                name="addressLine1"
                value={form.addressLine1}
                onChange={handleChange}
              />
            </label>

            <label>
              Zip Code
              <input
                type="text"
                name="zipCode"
                value={form.zipCode}
                onChange={handleChange}
              />
            </label>

            <label>
              Pin Address
              <input
                type="text"
                name="pinAddress"
                value={form.pinAddress}
                onChange={handleChange}
              />
            </label>
          </section>
        )}

        {/* Step 5: Business Operation */}
        {step === 5 && (
          <section>
            <h2>Business Operation</h2>

            <label>
              Total Floor Area
              <input
                type="text"
                name="totalFloorArea"
                value={form.totalFloorArea}
                onChange={handleChange}
              />
            </label>

            <label>
              Total Employees
              <input
                type="text"
                name="numberOfEmployee"
                value={form.numberOfEmployee}
                onChange={handleChange}
              />
            </label>

            <label>
              Male Employees
              <input
                type="text"
                name="maleEmployee"
                value={form.maleEmployee}
                onChange={handleChange}
              />
            </label>

            <label>
              Female Employees
              <input
                type="text"
                name="femaleEmployee"
                value={form.femaleEmployee}
                onChange={handleChange}
              />
            </label>

            <label>
              Vehicle (Van)
              <input
                type="text"
                name="numVehicleVan"
                value={form.numVehicleVan}
                onChange={handleChange}
              />
            </label>

            <label>
              Vehicle (Truck)
              <input
                type="text"
                name="numVehicleTruck"
                value={form.numVehicleTruck}
                onChange={handleChange}
              />
            </label>

            <label>
              Vehicle (Motorcycle)
              <input
                type="text"
                name="numVehicleMotor"
                value={form.numVehicleMotor}
                onChange={handleChange}
              />
            </label>

            <label>
              Number of Nozzles
              <input
                type="text"
                name="numNozzle"
                value={form.numNozzle}
                onChange={handleChange}
              />
            </label>

            <label>
              Weighing Scale
              <input
                type="text"
                name="weighScale"
                value={form.weighScale}
                onChange={handleChange}
              />
            </label>
          </section>
        )}

        {/* Step 6: Taxpayer’s Address */}
        {step === 6 && (
          <section>
            <h2>Taxpayer’s Address</h2>

            <label>
              Region
              <input
                type="text"
                name="Taxregion"
                value={form.Taxregion}
                onChange={handleChange}
              />
            </label>

            <label>
              Province
              <input
                type="text"
                name="Taxprovince"
                value={form.Taxprovince}
                onChange={handleChange}
              />
            </label>

            <label>
              City/Municipality
              <input
                type="text"
                name="TaxcityOrMunicipality"
                value={form.TaxcityOrMunicipality}
                onChange={handleChange}
              />
            </label>

            <label>
              Barangay
              <input
                type="text"
                name="Taxbarangay"
                value={form.Taxbarangay}
                onChange={handleChange}
              />
            </label>

            <label>
              Address Line 1
              <input
                type="text"
                name="TaxaddressLine1"
                value={form.TaxaddressLine1}
                onChange={handleChange}
              />
            </label>

            <label>
              Zip Code
              <input
                type="text"
                name="TaxzipCode"
                value={form.TaxzipCode}
                onChange={handleChange}
              />
            </label>

            <label>
              Pin Address
              <input
                type="text"
                name="TaxpinAddress"
                value={form.TaxpinAddress}
                onChange={handleChange}
              />
            </label>

            <label>
              Own Place
              <input
                type="text"
                name="ownPlace"
                value={form.ownPlace}
                onChange={handleChange}
              />
            </label>
          </section>
        )}

        {/* Step 7: Business Activity */}
        {step === 7 && (
          <section>
            <h2>Business Activity</h2>

            <label>
              Tax Incentives from Gov't
              <input
                type="text"
                name="tIGE"
                value={form.tIGE}
                onChange={handleChange}
              />
            </label>

            <label>
              Office Type
              <input
                type="text"
                name="officeType"
                value={form.officeType}
                onChange={handleChange}
              />
            </label>

            <label>
              Line of Business
              <input
                type="text"
                name="lineOfBusiness"
                value={form.lineOfBusiness}
                onChange={handleChange}
              />
            </label>

            <label>
              Product/Service
              <input
                type="text"
                name="productService"
                value={form.productService}
                onChange={handleChange}
              />
            </label>

            <label>
              Units
              <input
                type="text"
                name="Units"
                value={form.Units}
                onChange={handleChange}
              />
            </label>

            <label>
              Capital
              <input
                type="text"
                name="capital"
                value={form.capital}
                onChange={handleChange}
              />
            </label>
          </section>
        )}

        {/* Step 8: Business Requirements */}
        {step === 8 && (
          <section>
            <h2>Business Requirements</h2>

            <label>
              Proof of Registration
              <input
                type="text"
                name="proofOfReg"
                value={form.proofOfReg}
                onChange={handleChange}
              />
            </label>

            <label>
              Right to Use Location
              <input
                type="text"
                name="proofOfRightToUseLoc"
                value={form.proofOfRightToUseLoc}
                onChange={handleChange}
              />
            </label>

            <label>
              Location Plan
              <input
                type="text"
                name="locationPlan"
                value={form.locationPlan}
                onChange={handleChange}
              />
            </label>

            <label>
              Barangay Clearance
              <input
                type="text"
                name="brgyClearance"
                value={form.brgyClearance}
                onChange={handleChange}
              />
            </label>

            <label>
              Market Clearance
              <input
                type="text"
                name="marketClearance"
                value={form.marketClearance}
                onChange={handleChange}
              />
            </label>

            <label>
              Occupancy Permit
              <input
                type="text"
                name="occupancyPermit"
                value={form.occupancyPermit}
                onChange={handleChange}
              />
            </label>

            <label>
              CEDULA
              <input
                type="text"
                name="cedula"
                value={form.cedula}
                onChange={handleChange}
              />
            </label>

            <label>
              Photo (Interior)
              <input
                type="text"
                name="photoOfBusinessEstInt"
                value={form.photoOfBusinessEstInt}
                onChange={handleChange}
              />
            </label>

            <label>
              Photo (Exterior)
              <input
                type="text"
                name="photoOfBusinessEstExt"
                value={form.photoOfBusinessEstExt}
                onChange={handleChange}
              />
            </label>
          </section>
        )}

        
        {/* Navigation buttons */}
        <div className="form-actions">
          {step > 1 && <button type="button" onClick={() => setStep(step - 1)}>Back</button>}
          {step < 8 && (
            <button type="button" disabled={!stepValid()} onClick={() => setStep(step + 1)}>Next</button>
          )}
          {step === 8 && <button type="submit" disabled={!stepValid()}>Submit Form</button>}
        </div>
      </form>
    </div>
  );
}

export default RenewApp;
