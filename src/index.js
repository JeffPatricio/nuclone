import React, { Fragment } from 'react';
import '~/config/ReactotronConfig';
import Routes from '~/routes';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle='light-content' backgroundColor='#8B10AE' />
      <Routes />
    </Fragment>
  )
}

export default App;
