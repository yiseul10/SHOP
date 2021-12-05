import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(them => ({
  root: {
    // position: 'fixed',
    bottom: 0,
    zIndex: 999,
    left: 0,
    width: '100%',
    justifyContent: 'center',

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
      // left: '50%'
    }
  }
}));

const AppPagination = ({ setPage, page }) => {
  const classes = useStyles();

  const handleChange = page => {
    setPage(page);
  };

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Pagination
          onChange={e => handleChange(e.target.textContent)}
          size='large'
          count={5}
          style={{ display: 'flex', justifyContent: 'center' }}
        />
      </div>
    </div>
  );
};

export default AppPagination;
