import { useEffect, useState } from 'react';
import Nav from '../NAV/nav';
import Side_bar from '../SIDE_BAR/side_bar';
import './new_records.css';

function New_records() {
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPageButtons, setMaxPageButtons] = useState(window.innerWidth <= 600 ? 7 : 10);
    const [selectedApplicant, setSelectedApplicant] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const recordsPerPage = 20;

    const applicants = Array.from({ length: 25 }, (_, i) => ({
        id: i + 1,
        businessName: `Business Name${i + 1}`,
        firstName: `First${i + 1}`,
        lastName: `Last${i + 1}`,
        age: 20 + (i % 10),
    }));

    const totalPages = Math.ceil(applicants.length / recordsPerPage);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = applicants.slice(indexOfFirstRecord, indexOfLastRecord);

    useEffect(() => {
        const handleResize = () => {
            setMaxPageButtons(window.innerWidth <= 600 ? 7 : 10);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getPageNumbers = () => {
        let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
        let endPage = startPage + maxPageButtons - 1;

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(1, endPage - maxPageButtons + 1);
        }

        const pageNumbers = [];
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
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
            <div id='main_content'>
                <h2>New Records</h2>

                <table className="custom-table">
                    <thead>
                        <tr>
                            <th>Applicant ID</th>
                            <th>Business Name</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRecords.map((applicant) => (
                            <tr key={applicant.id} onClick={() => openModal(applicant)} style={{ cursor: 'pointer' }}>
                                <td>{applicant.id}</td>
                                <td>{applicant.businessName}</td>
                                <td>{applicant.firstName}</td>
                                <td>{applicant.lastName}</td>
                                <td>{applicant.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="pagination">
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
                    {getPageNumbers().map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={currentPage === page ? 'active' : ''}
                        >
                            {page}
                        </button>
                    ))}
                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
                </div>
            </div>

            {isModalOpen && selectedApplicant && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>Applicant Details</h3>
                        <p><strong>ID:</strong> {selectedApplicant.id}</p>
                        <p><strong>Business Name:</strong> {selectedApplicant.businessName}</p>
                        <p><strong>First Name:</strong> {selectedApplicant.firstName}</p>
                        <p><strong>Last Name:</strong> {selectedApplicant.lastName}</p>
                        <p><strong>Age:</strong> {selectedApplicant.age}</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default New_records;
