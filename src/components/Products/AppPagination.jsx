import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(them => ({
  root: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    zIndex: 999,
    padding: '60px',
    width: '100%',
    justifyContent: 'center',

    '@media (max-width: 768px)': {
      padding: '20px'
    },

    '& .Mui-selected': {
      backgroundColor: 'transparent'
    },
    '& .Mui-selected:hover': {
      backgroundColor: 'transparent'
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
}));

const AppPagination = ({ setPage, pageNumber }) => {
  const classes = useStyles();

  const handleChange = page => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Pagination
          onChange={e => handleChange(e.target.textContent)}
          size='small'
          count={pageNumber}
          style={{ display: 'flex', justifyContent: 'center' }}
        />
      </div>
    </div>
  );
};

export default AppPagination;
