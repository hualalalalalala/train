import React , { lazy, Suspense } from 'react';
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import { hot } from "react-hot-loader/root";
import 'normalize.css/normalize.css';
import Popular from "./page/Popular";
import Nav from "./components/Nav";
import "font-awesome/css/font-awesome.min.css";
import '@/styles/index.less'
// import Combination from "./page/Battle/Combination";

const Combination = lazy(() => import('../src/page/Battle/Combination'));
class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Nav />
          <Switch>
            <Route path="/" component={Popular} exact />
            <Route exact path="/popular" component={Popular} />
            <Suspense fallback={<div style={{textAlign:"center"}}>Loading...</div>}>
              <Route path="/battle" component={Combination} />
            </Suspense>
            {/* <Route exact path="/battle" component={Combination} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}
export default hot(App);
ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
