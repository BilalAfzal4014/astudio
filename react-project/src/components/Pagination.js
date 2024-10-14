import React from "react";

const TotalPages = ({totalRows, currPageSize, pageNumber, setPageNumber}) => {
    let printDots = true;
    const totalPages = React.useMemo(() => {
        return [...Array(Math.ceil(totalRows / currPageSize))].map((_, index) => index + 1)
    }, [currPageSize])

    return (
        <div className='pagination-container'>
            <button
                className='arrow-button'
                onClick={() => setPageNumber(pageNumber - 1)}
                disabled={pageNumber === 1 || totalRows === 0}
            >
                &lt;
            </button>
            <div className='pagination'>
                {
                    totalPages.map((page) => {
                        const shouldRenderPaginationBtn = [1, 2, 3].indexOf(page) > -1 || totalPages.length - page < 3 || [-2, -1, 0, 1, 2].indexOf(pageNumber - page) > -1;
                        if (shouldRenderPaginationBtn) {
                            printDots = true;
                            return (
                                <span key={page} className={pageNumber === page ? 'active' : ''}
                                      onClick={() => setPageNumber(page)}>{page}</span>
                            )
                        }

                        if (printDots) {
                            printDots = false;
                            return <React.Fragment key={page}>....</React.Fragment>
                        }

                        return null;
                    })
                }
                <button
                    className='arrow-button'
                    onClick={() => setPageNumber(pageNumber + 1)}
                    disabled={pageNumber === totalPages.length || totalRows === 0}
                >
                    &gt;
                </button>
            </div>
        </div>
    )
}

export default TotalPages;