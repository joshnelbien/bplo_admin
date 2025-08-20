import axios from "axios";
import { useEffect, useState } from "react";

import Side_bar from "../../SIDE_BAR/side_bar";
import "./obo.css";

function Obo() {
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
        const res = await axios.get("http://localhost:5000/backroom");
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

      <Side_bar />
      <div id="main_content">
        <h2>OBO</h2>

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
                <td>{applicant.obo}</td>
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

             <p>
              <strong>Status:</strong> {selectedApplicant.obo}
            </p>

            <p>
              <strong>ID:</strong> {selectedApplicant.id}
            </p>
            <p>
              <strong>Business Name:</strong> {selectedApplicant.businessName}
            </p>
            <p>
              <strong>Business Type:</strong> {selectedApplicant.BusinessType}
            </p>
            <p>
              <strong>Trade Name:</strong> {selectedApplicant.TradeName}
            </p>
            <p>
              <strong>First Name:</strong> {selectedApplicant.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {selectedApplicant.lastName}
            </p>
            <p>
              <strong>DSC Registration No:</strong> {selectedApplicant.dscRegNo}
            </p>
            <p>
              <strong>TIN Number:</strong> {selectedApplicant.tinNo}
            </p>
            {/* Add other fields here if needed */}
            <button onClick={closeModal}>Close</button>
            <button onClick={closeModal}>Approved</button>
            <button onClick={closeModal}>Decline</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Obo;
