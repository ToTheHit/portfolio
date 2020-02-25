import React, {Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import { Navigation, Route, fade, Screen } from "react-tiger-transition";
import "react-tiger-transition/styles/main.min.css";

import App from "./Pages/Main/App";
import Granit from "./Pages/Granit/Granit";
import BodyShop from "./Pages/BodyShop/BodyShop";
import Advogrand from "./Pages/Advogrand/Advogrand";
import Belaz from "./Pages/Belaz/Belaz";

fade({
    name: "default-fade",
    enter: {
        duration: 400,
        easing: 'ease-in',
        zIndex: 1,
        opacity: 0,
        scale: 1
    },
    exit: {
        duration: 400,
        easing: 'ease-in',
        opacity: 0,
        zIndex: 2,
        delay: 0,
        scale: 1
    }
});


class AppRouter extends Component {
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Navigation>
                    <Route exact path={'/'} >
                        <Screen>
                            <App/>
                        </Screen>
                    </Route>
                    <Route path={'/granit'}>
                        <Screen>
                            <Granit/>
                        </Screen>
                    </Route>
                    <Route path={'/bodyshop'}>
                        <Screen>
                            <BodyShop/>
                        </Screen>
                    </Route>
                    <Route path={'/advogrand'}>
                        <Screen>
                            <Advogrand/>
                        </Screen>
                    </Route>
                    <Route path={'/belaz'}>
                        <Screen>
                            <Belaz/>
                        </Screen>
                    </Route>
                </Navigation>
            </Router>
        );
    }
}

export default AppRouter;