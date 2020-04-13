import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import 'assets/scss/material-kit-react.scss?v=1.8.0';

// pages for this product
// import Components from 'views/Components/Components.js';
import LandingPage from 'views/LandingPage/LandingPage.js';
import ProfilePage from 'views/ProfilePage/ProfilePage.js';
import LoginPage from 'views/LoginPage/LoginPage.js';
import SigninPage from 'views/SigninPage/SigninPage.js';

// import { withTranslation } from 'react-i18next';
// import { withSnackbar } from 'notistack';

var hist = createBrowserHistory();

const App = () => {
    // const [message, setMessage] = React.useState('React Web Project');

    // const handleClick = () => setMessage('Welcome!');

    return (
        <Router history={hist}>
            <Switch>
                <Route path="/landing-page" component={LandingPage} />
                <Route path="/profile-page" component={ProfilePage} />
                <Route path="/login-page" component={LoginPage} />
                <Route path="/signin-page" component={SigninPage} />
                {/* <Route path="/" component={Components} /> */}
                <Route path="/" component={LoginPage} />
            </Switch>
        </Router>
    );
};

// export default withTranslation()(App);
export default App;
