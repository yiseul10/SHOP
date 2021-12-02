import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(them => ({
  root: {
    position: 'fixed',

    '& .Mui-selected': {
      backgroundColor: 'transparent'
    },
    '& .Mui-selected:hover': {
      backgroundColor: 'transparent'
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      left: '50%'
    }
  }
}));

const AppPagination = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Pagination
          size='small'
          count={5}
          style={{ display: 'flex', justifyContent: 'center' }}
        />
      </div>
    </div>
  );
};

export default AppPagination;
