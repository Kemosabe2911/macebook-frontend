import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NoMatch from "./pages/NoMatch/NoMatch";
import Profile from "./pages/Profile/Profile";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Signup from "./pages/Signup/Signup";
import CompleteProfile from "./pages/complete-profile/Complete-profile";
import Jobs from "./pages/Jobs/Jobs";
import JobApplicationForm from "./pages/JobApplicationForm/JobApplicationForm";
import Posts from "./pages/Posts/Posts";
import Settings from "./pages/Settings/Settings";
import Dashboard from "./pages/Dashboard/Dashboard";
function App() {
    return (
        <div>
            <Helmet>
                <title>Macebook</title>
            </Helmet>
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path={["/", "/index", "/home"]} component={Home} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/jobs" component={Jobs} />
                    <Route exact path="/settings" component={Settings} />
                    <Route exact path="/posts" component={Posts} />
                    <Route exact path="/job-application-form" component={JobApplicationForm} />
                    <Route exact path="/forgot-password" component={ForgotPassword} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/complete-profile" component={CompleteProfile} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route path="*" component={NoMatch} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
