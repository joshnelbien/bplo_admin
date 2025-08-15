import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "../NAV/nav";
import Side_bar from "../SIDE_BAR/side_bar";
import "./new_records.css";

function New_records() {
  const [applicants, setApplicants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPageButtons, setMaxPageButtons] = useState(
    window.innerWidth <= 600 ? 7 : 10
  );
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const recordsPerPage = 20;

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const res = await axios.get("http://localhost:5000/new");
        setApplicants(res.data);
      } catch (error) {
        console.error("Error fetching applicants:", error);
      }
    };

    fetchApplicants();

    
    const handleResize = () => {
      setMaxPageButtons(window.innerWidth <= 600 ? 7 : 10);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(applicants.length / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = applicants.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const getPageNumbers = () => {
    let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    let endPage = startPage + maxPageButtons - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPageButtons + 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

const handleApprove = async (id) => {
  try {
    await axios.post("http://localhost:5000/backroom", { id });
    setApplicants((prev) => prev.filter((applicant) => applicant.id !== id));
    alert("Applicant approved and moved to backroom");
    closeModal();
  } catch (error) {
    console.error("Error approving applicant:", error);
  }
};

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const openModal = (applicant) => {
    setSelectedApplicant(applicant);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedApplicant(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <Nav />
      <Side_bar />
      <div id="main_content">
        <h2>New Records</h2>

        <table className="custom-table">
          <thead>
            <tr>
              <th>Applicant ID</th>
              <th>Business Name</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((applicant) => (
              <tr
                key={applicant.id}
                onClick={() => openModal(applicant)}
                style={{ cursor: "pointer" }}
              >
                <td>{applicant.id}</td>
                <td>{applicant.businessName}</td>
                <td>{applicant.firstName}</td>
                <td>{applicant.lastName}</td>
                <td>{applicant.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {getPageNumbers().map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={currentPage === page ? "active" : ""}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {isModalOpen && selectedApplicant && (
  <div className="modal-overlay" onClick={closeModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <h3>Applicant Details</h3>

      {/* Business Information */}
      <p><strong>Status:</strong> {selectedApplicant.status}</p>
      <p><strong>ID:</strong> {selectedApplicant.id}</p>
      <p><strong>Business Type:</strong> {selectedApplicant.BusinessType}</p>
      <p><strong>DSC Registration No:</strong> {selectedApplicant.dscRegNo}</p>
      <p><strong>Business Name:</strong> {selectedApplicant.businessName}</p>
      <p><strong>TIN No:</strong> {selectedApplicant.tinNo}</p>
      <p><strong>Trade Name:</strong> {selectedApplicant.TradeName}</p>

      {/* Personal Information */}
      <p><strong>First Name:</strong> {selectedApplicant.firstName}</p>
      <p><strong>Middle Name:</strong> {selectedApplicant.middleName}</p>
      <p><strong>Last Name:</strong> {selectedApplicant.lastName}</p>
      <p><strong>Extension Name:</strong> {selectedApplicant.extName}</p>
      <p><strong>Sex:</strong> {selectedApplicant.sex}</p>

      {/* Contact Information */}
      <p><strong>Email:</strong> {selectedApplicant.eMailAdd}</p>
      <p><strong>Telephone No:</strong> {selectedApplicant.telNo}</p>
      <p><strong>Mobile No:</strong> {selectedApplicant.mobileNo}</p>

      {/* Business Address */}
      <p><strong>Region:</strong> {selectedApplicant.region}</p>
      <p><strong>Province:</strong> {selectedApplicant.province}</p>
      <p><strong>City/Municipality:</strong> {selectedApplicant.cityOrMunicipality}</p>
      <p><strong>Barangay:</strong> {selectedApplicant.barangay}</p>
      <p><strong>Address Line 1:</strong> {selectedApplicant.addressLine1}</p>
      <p><strong>Zip Code:</strong> {selectedApplicant.zipCode}</p>
      <p><strong>Pin Address:</strong> {selectedApplicant.pinAddress}</p>

      {/* Business Operation */}
      <p><strong>Total Floor Area:</strong> {selectedApplicant.totalFloorArea}</p>
      <p><strong>Number of Employees:</strong> {selectedApplicant.numberOfEmployee}</p>
      <p><strong>Male Employees:</strong> {selectedApplicant.maleEmployee}</p>
      <p><strong>Female Employees:</strong> {selectedApplicant.femaleEmployee}</p>
      <p><strong>Number of Vans:</strong> {selectedApplicant.numVehicleVan}</p>
      <p><strong>Number of Trucks:</strong> {selectedApplicant.numVehicleTruck}</p>
      <p><strong>Number of Motorcycles:</strong> {selectedApplicant.numVehicleMotor}</p>
      <p><strong>No. of Nozzles:</strong> {selectedApplicant.numNozzle}</p>
      <p><strong>Weigh Scale:</strong> {selectedApplicant.weighScale}</p>

      {/* Tax Payers Address */}
      <p><strong>Tax Region:</strong> {selectedApplicant.Taxregion}</p>
      <p><strong>Tax Province:</strong> {selectedApplicant.Taxprovince}</p>
      <p><strong>Tax City/Municipality:</strong> {selectedApplicant.TaxcityOrMunicipality}</p>
      <p><strong>Tax Barangay:</strong> {selectedApplicant.Taxbarangay}</p>
      <p><strong>Tax Address Line 1:</strong> {selectedApplicant.TaxaddressLine1}</p>
      <p><strong>Tax Zip Code:</strong> {selectedApplicant.TaxzipCode}</p>
      <p><strong>Tax Pin Address:</strong> {selectedApplicant.TaxpinAddress}</p>
      <p><strong>Own Place:</strong> {selectedApplicant.ownPlace}</p>

      {/* Tax Incentives */}
      <p><strong>Tax Incentives:</strong> {selectedApplicant.tIGE}</p>

      {/* Business Activity */}
      <p><strong>Office Type:</strong> {selectedApplicant.officeType}</p>
      <p><strong>Line of Business:</strong> {selectedApplicant.lineOfBusiness}</p>
      <p><strong>Product/Service:</strong> {selectedApplicant.productService}</p>
      <p><strong>Units:</strong> {selectedApplicant.Units}</p>
      <p><strong>Capital:</strong> {selectedApplicant.capital}</p>

      {/* Business Requirements */}
      <p><strong>Proof of Registration:</strong> {selectedApplicant.proofOfReg}</p>
      <p><strong>Proof of Right to Use Location:</strong> {selectedApplicant.proofOfRightToUseLoc}</p>
      <p><strong>Location Plan:</strong> {selectedApplicant.locationPlan}</p>
      <p><strong>Barangay Clearance:</strong> {selectedApplicant.brgyClearance}</p>
      <p><strong>Market Clearance:</strong> {selectedApplicant.marketClearance}</p>
      <p><strong>Occupancy Permit:</strong> {selectedApplicant.occupancyPermit}</p>
      <p><strong>Cedula:</strong> {selectedApplicant.cedula}</p>
      <p><strong>Photo (Interior):</strong> {selectedApplicant.photoOfBusinessEstInt}</p>
      <p><strong>Photo (Exterior):</strong> {selectedApplicant.photoOfBusinessEstExt}</p>

      <div style={{ marginTop: "15px" }}>
        <button onClick={closeModal}>Close</button>
        <button onClick={() => handleApprove(selectedApplicant.id)}>Approve</button>
        <button onClick={closeModal}>Decline</button>
      </div>
    </div>
  </div>
)}
    </>
  );
}

export default New_records;
