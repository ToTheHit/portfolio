import React, {Component, lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

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

const ScrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'instant'});
    return null;
};


class AppRouter extends Component {
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Suspense fallback={<div/>}> {/*Заглушка пока грузится бандл и стили*/}
                    <Route component={ScrollToTop} />
                    <Switch>
                        <Route exact path={'/'}>
                            <App/>
                        </Route>

                        <Route path={'/granit/:NotFound'}>
                            <Redirect to="/404" />
                        </Route>
                        <Route path={'/granit'}>
                            <Granit/>
                        </Route>

                        <Route path={'/bodyshop/:NotFound'}>
                            <Redirect to="/404" />
                        </Route>
                        <Route path={'/bodyshop'}>
                            <BodyShop/>
                        </Route>

                        <Route path={'/advogrand/:NotFound'}>
                            <Redirect to="/404" />
                        </Route>
                        <Route path={'/advogrand'}>
                            <Advogrand/>
                        </Route>

                        <Route path={'/belaz/:NotFound'}>
                            <Redirect to="/404" />
                        </Route>
                        <Route path={'/belaz'}>
                            <Belaz/>
                        </Route>

                        <Route path={'/bicycle/:NotFound'}>
                            <Redirect to="/404" />
                        </Route>
                        <Route path={'/bicycle'}>
                            <Bicycle/>
                        </Route>

                        <Route path={'/binary/:NotFound'}>
                            <Redirect to="/404" />
                        </Route>
                        <Route path={'/binary'}>
                            <Binary/>
                        </Route>

                        <Route path={'/3dmodeling/:NotFound'}>
                            <Redirect to="/404" />
                        </Route>
                        <Route path={'/3dmodeling'}>
                            <ThreeDModeling/>
                        </Route>

                        <Route path={'/404'}>
                            <div>404</div>
                        </Route>
                        <Route>
                            <Redirect to="/404" />
                        </Route>
                    </Switch>
                </Suspense>
            </Router>
        );
    }
}

export default AppRouter;