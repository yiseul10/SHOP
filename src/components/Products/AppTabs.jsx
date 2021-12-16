import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: '20px',
    width: '100%',
    '& .MuiTab-root': {
      fontSize: '0.5rem',
      minWidth: '78px',
      backgroundColor: 'transparent'
    },
    '& .Mui-selected': {
      color: '#E2E2E2'
    },
    '& .MuiTab-textColorPrimary': {
      backgroundColor: 'transparent'
    },
    '& .MuiTabs-indicator': {
      backgroundColor: '#1F1F1F'
    },
    '& .MuiTypography-root': {
      color: '#1F1F1F',
      fontSize: '12px',
      fontWeight: '300'
    },

    container: {}
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const AppTabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'
            >
              <Tab label='Details' {...a11yProps(0)} />
              <Tab label='Care' {...a11yProps(1)} />
              <Tab label='Etc' {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            코트안에 착용하거나 환절기 시즌에 단독으로 착용하기 좋습니다.
          </TabPanel>
          <TabPanel value={value} index={1}>
            소재: 아크릴90%, 레이온 10%
          </TabPanel>
          <TabPanel value={value} index={2}>
            자수/패치만 가능.
          </TabPanel>
        </Box>
      </div>
    </div>
  );
};

export default AppTabs;

// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core';
// import { Tabs, Tab } from '@material-ui/core';

// const useStyles = makeStyles(() => ({
//   root: {
//     width: '100%',
//     '& .MuiTab-root': {
//       fontSize: '0.5rem',
//       minWidth: '78px',
//       backgroundColor: 'transparent'
//     },
//     '& .Mui-selected': {
//       color: '#E2E2E2'
//     },

//     '& .PrivateTabIndicator-colorSecondary-4': {
//       backgroundColor: 'grey'
//     },

//     container: {}
//   }
// }));

// const AppTabs = () => {
//   const classes = useStyles();
//   const [type, setType] = useState(0);
//   const [page, setPage] = useState(1);

//   const [value, setValue] = React.useState('1');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.container}>
//       <div className={classes.root}>
//         <Tabs
//           value={type}
//           onChange={(event, newValue) => {
//             setType(newValue);
//             setPage(1);
//           }}
//         >
//           <Tab label='Details' />
//           가볍지만 따뜻한 소재의 가디건입니다. 코트안에 착용하거나 환절기 시즌에
//           단독으로 착용하기 좋습니다.
//           <Tab label='Care' />
//           소재: 아크릴90%, 레이온 10%
//           <Tab label='Etc' />
//           자수/패치만 가능.
//         </Tabs>
//       </div>
//     </div>
//   );
// };

// export default AppTabs;
