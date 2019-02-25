import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import Quize from "./containers/Quize/Quize";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Quize />
        </Layout>
      </div>
    );
  }
}

export default App;
