import Side_bar from "../SIDE_BAR/side_bar";
import { useEffect, useState } from 'react';
import Nav from '../NAV/nav';
import './renew_records.css';


function Renew_records() {
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPageButtons, setMaxPageButtons] = useState(window.innerWidth <= 600 ? 7 : 10);
    const recordsPerPage = 20;

    // Simulated 200 records
    const applicants = Array.from({ length: 1000 }, (_, i) => ({
        id: i + 1,
        firstName: `First${i + 1}`,
        lastName: `Last${i + 1}`,
        age: 20 + (i % 10),
    }));

    const totalPages = Math.ceil(applicants.length / recordsPerPage);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = applicants.slice(indexOfFirstRecord, indexOfLastRecord);

    // Watch for window resize to update maxPageButtons
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

    return (
        <>
            <Nav />
            <Side_bar />
            <div id='main_content'>
                <h2>Renew Records</h2>

                <table className="custom-table">
                    <thead>
                        <tr>
                            <th>Applicant ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRecords.map((applicant) => (
                            <tr key={applicant.id}>
                                <td>{applicant.id}</td>
                                <td>{applicant.firstName}</td>
                                <td>{applicant.lastName}</td>
                                <td>{applicant.age}</td>
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
                            className={currentPage === page ? 'active' : ''}
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
        </>
    );
}

export default Renew_records