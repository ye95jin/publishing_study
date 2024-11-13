function Pagination({ activePage, onPageChange }) {
    const pages = [0, 1]; 

    return (
        <div className="pagination">
            {pages.map((pageIndex) => (
                <button
                    key={pageIndex}
                    className={`page-indicator ${activePage === pageIndex ? "active" : ""}`}
                    onClick={() => onPageChange(pageIndex)}
                ></button>
            ))}
        </div>
    );
}

export default Pagination;