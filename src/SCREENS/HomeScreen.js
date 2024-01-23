import React from 'react';
import CustomHead from '../COMPONENTS/CustomHead';
import TopTabs from '../NAVIGATION/HomeTopTab';

const HomeScreen = props => {
  return (
    <>
      <CustomHead {...props} />
      <TopTabs />
    </>
  );
};

export default HomeScreen;
