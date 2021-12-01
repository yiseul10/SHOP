import React from 'react';
import styled from 'styled-components';

const PageList = styled.li`
  text-decoration: none;
`;

const Pagination = ({ postsPerPage, totalPosts }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul>
        {pageNumbers.map(number => (
          <PageList key={number}>
            <a>{number}</a>
          </PageList>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
