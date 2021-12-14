import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Tabs, Tab } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    '@media (max-width: 768px)': {
      padding: '20px'
    },

    container: {}
  }
}));

const AppTabs = () => {
  const classes = useStyles();
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Tabs
          value={type}
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }}
        >
          <Tab label='Details' />
          가볍지만 따뜻한 소재의 가디건입니다. 코트안에 착용하거나 환절기 시즌에
          단독으로 착용하기 좋습니다.
          <Tab label='Care' />
          소재: 아크릴90%, 레이온 10%
          <Tab label='Etc' />
          자수/패치만 가능.
        </Tabs>
      </div>
    </div>
  );
};

export default AppTabs;
