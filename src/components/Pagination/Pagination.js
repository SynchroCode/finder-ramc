import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
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
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      pageCount={info?.pages}
    />
  );
};

export default Pagination;
