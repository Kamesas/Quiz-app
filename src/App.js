import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import Quize from "./containers/Quize/Quize";
import Auth from "./containers/Auth/Auth";
import QuizeCreator from "./containers/QuizeCreator/QuizeCreator";
import QuizeLilst from "./containers/QuizeList/QuizeLIst";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/quize-creator" component={QuizeCreator} />
            <Route path="/quize/:id" component={Quize} />
            <Route path="/" component={QuizeLilst} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
