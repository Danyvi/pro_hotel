import React, {Component}  from 'react';
import GlobalStyles from './components/globals/GlobalStyles';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Home />
      </>
    );
  }
}

export default App;

// Instead of <React.Fragment></React.Fragment> we can use the shortcut <></>