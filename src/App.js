import React from "react";
import {withAuthenticator, AmplifyTheme} from 'aws-amplify-react'
import "./App.css";

class App extends React.Component {
  state = {};

  render() {
    return <div>App</div>;
  }
}

const theme = {
  ...AmplifyTheme,
  button: {
    ...AmplifyTheme.button,
    backgroundColor: 'cyan'
  },
  navBar: {
    ...AmplifyTheme.navBar,
    backgroundColor: "#413d41",
    color: 'white'
  },
  sectionBody: {
    ...AmplifyTheme.sectionBody,
    padding: "5px"
  },
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: 'var(--squidInk)'
  },
}

export default withAuthenticator(App, true, [], null, theme);
