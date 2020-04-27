import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import './index.css';
import Page404 from "./Pages/Page404/Page404";
// import App from "./Pages/Main/App";
// import Granit from "./Pages/Granit/Granit";
/*import BodyShop from "./Pages/BodyShop/BodyShop";
import Advogrand from "./Pages/Advogrand/Advogrand";
import Belaz from "./Pages/Belaz/Belaz";
import Bicycle from "./Pages/Bicycle/Bicycle";
import Binary from "./Pages/Binary/Binary";*/

const App = lazy(() => import('./Pages/Main/App'))
const Granit = lazy(() => import('./Pages/Granit/Granit'));
const BodyShop = lazy(() => import('./Pages/BodyShop/BodyShop'));
const Advogrand = lazy(() => import('./Pages/Advogrand/Advogrand'));
const Belaz = lazy(() => import('./Pages/Belaz/Belaz'));
const Bicycle = lazy(() => import('./Pages/Bicycle/Bicycle'));
const Binary = lazy(() => import('./Pages/Binary/Binary'));
const ThreeDModeling = lazy(() => import('./Pages/ThreeDModeling/ThreeDModeling'));
const IDcard = lazy(() => import('./Pages/IDcard/IDcard'));
const Empty = lazy(() => import('./Pages/Empty/Empty'))

const ScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'instant' });
  return null;
};

const routes = [
  { path: '/bodyshop', Component: BodyShop },
  { path: '/granit', Component: Granit },
  { path: '/advogrand', Component: Advogrand },
  { path: '/belaz', Component: Belaz },
  { path: '/bicycle', Component: Bicycle },
  { path: '/binary', Component: Binary },
  { path: '/3dmodeling', Component: ThreeDModeling },
  { path: '/idcard', Component: IDcard },
  { path: '/empty', Component: Empty }
]

class AppRouter extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Suspense fallback={<div />}> {/*Заглушка пока грузится бандл и стили*/}
          <Route component={ScrollToTop} />

          <Switch>
            <Route exact path={'/'}>
              <App />
            </Route>

            {routes.map(({ path }) => {
              return <Route path={path + '/:NotFound'} key={Math.random()}>
                <Redirect to="/404" />
              </Route>
            })}
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                {({ match }) => {
                  return <Component />
                }}
              </Route>
            ))}

{/*            <Route path={'/404'}>
              <div>404</div>
            </Route>
            <Route>
              <Redirect to="/404" />
            </Route>*/}

            <Route component={Page404}/>
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default AppRouter;
