import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./renewApp.css";

import Step1BusinessInfo from "../components/BusinessForm/Step1BusinessInfo";
import Step2PersonalInfo from "../components/BusinessForm/Step2PersonalInfo";
import Step3ContactInfo from "../components/BusinessForm/Step3ContactInfo";
import Step4BusinessAddress from "../components/BusinessForm/Step4BusinessAddress";
import Step5BusinessOperation from "../components/BusinessForm/Step5BusinessOperation";
import Step6TaxpayerAddress from "../components/BusinessForm/Step6TaxpayerAddress";
import Step7BusinessActivity from "../components/BusinessForm/Step7BusinessActivity";
import Step8BusinessRequirements from "../components/BusinessForm/Step8BusinessRequirements";

function RenewApp() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

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
    status: "pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
  const { name, files } = e.target;
  setForm((prev) => ({
    ...prev,
    [name]: files[0], // store the actual File object
  }));
};

 const isNextDisabled = () => {
    if (step === 1) {
      return !(
        form.BusinessType &&
        form.dscRegNo.trim() !== "" &&
        form.businessName.trim() !== "" &&
        form.tinNo.trim() !== ""
      );
    }

    if (step === 2) {
    return !(
      form.firstName.trim() !== "" &&
      form.lastName.trim() !== "" &&
      form.sex.trim() !== ""
    );
  }

  if (step === 3) {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.eMailAdd.trim());
    return !(emailValid && form.mobileNo.trim() !== "");
  }

   if (step === 4) {
    return !(
      form.addressLine1.trim() !== "" &&
      form.zipCode.trim() !== "" &&
      form.pinAddress.trim() !== ""
    );
  }

    if (step === 5) {
    return !(
      form.totalFloorArea.trim() !== "" &&
      form.numberOfEmployee.trim() !== "" &&
      form.maleEmployee.trim() !== "" &&
      form.femaleEmployee.trim() !== "" &&
      form.numVehicleVan.trim() !== "" &&
      form.numVehicleTruck.trim() !== "" &&
      form.numVehicleMotor.trim() !== "" &&
      form.numNozzle.trim() !== "" &&
      form.weighScale.trim() !== ""
    );
  }

  if (step === 6) {
    return !(
      form.Taxregion.trim() !== "" &&
      form.Taxprovince.trim() !== "" &&
      form.TaxcityOrMunicipality.trim() !== "" &&
      form.Taxbarangay.trim() !== "" &&
      form.TaxaddressLine1.trim() !== "" &&
      form.TaxzipCode.trim() !== "" &&
      form.TaxpinAddress.trim() !== ""
    );
  }

  if (step === 7) {
    return !(
      form.tIGE.trim() !== "" &&
      form.officeType.trim() !== "" &&
      form.lineOfBusiness.trim() !== "" &&
      form.productService.trim() !== "" &&
      form.Units.trim() !== "" &&
      form.capital.trim() !== "" 
    );
  }

   if (step === 8) {
    return !(
      form.tIGE.trim() !== "" &&
      form.officeType.trim() !== "" &&
      form.lineOfBusiness.trim() !== "" &&
      form.productService.trim() !== "" &&
      form.Units.trim() !== "" &&
      form.capital.trim() !== "" 
    );
  }

    // Add similar checks for other steps if needed
    return false;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://bplo-admin.onrender.com/renewApplications", form);
      alert("Form submitted successfully!");
      console.log(response.data);
      navigate("/home");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit the form.");
    }
  };

  return (
    <div className="container">
      <button className="back-button" onClick={() => navigate("/home")}>
        ← Back to Home
      </button>
      <h1>Renew Business Application Form</h1>
      <form onSubmit={handleSubmit}>
        {step === 1 && <Step1BusinessInfo form={form} handleChange={handleChange} />}
        {step === 2 && <Step2PersonalInfo form={form} handleChange={handleChange} />}
        {step === 3 && <Step3ContactInfo form={form} handleChange={handleChange} />}
        {step === 4 && <Step4BusinessAddress form={form} handleChange={handleChange} />}
        {step === 5 && <Step5BusinessOperation form={form} handleChange={handleChange} />}
        {step === 6 && <Step6TaxpayerAddress form={form} handleChange={handleChange} />}
        {step === 7 && <Step7BusinessActivity form={form} handleChange={handleChange} />}
        {step === 8 && <Step8BusinessRequirements form={form} handleChange={handleFileChange} />}

        <div className="form-actions">
          {step > 1 && (
            <button type="button" onClick={() => setStep(step - 1)}>
              Back
            </button>
          )}
          {step < 8 && (
            <button type="button" onClick={() => setStep(step + 1)}disabled={isNextDisabled()} >
              Next
            </button>
          )}
          {step === 8 && (
            <button type="submit">
              Submit Form
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default RenewApp;
