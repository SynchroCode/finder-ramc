import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  let [width, setWidth] = useState(window.innerWidth);

  let updateDimension = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimension);
    return () => window.removeEventListener('resize', updateDimension);
  }, []);
  return (
    <>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .next,
            .prev {
              display: none;
            }
            .pagination {
              font-size: 10px;
            }
          }
        `}
      </style>
      <ReactPaginate
        className={'pagination justify-content-center my-4 gap-4'}
        nextLabel={'Next'}
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel={'Prev'}
        nextClassName={'btn btn-primary next'}
        previousClassName={'btn btn-primary prev'}
        activeClassName={'active'}
        pageClassName={'page-item'}
        previousLinkClassName={'a'}
        nextLinkClassName={'a'}
        pageLinkClassName={'page-link'}
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        onPageChange={(data) => {
          setPageNumber(data.selected + 1);
        }}
        pageCount={info?.pages}
      />
    </>
  );
};

export default Pagination;
