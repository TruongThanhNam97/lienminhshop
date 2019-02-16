import React, { Component } from 'react';
import ListAccounts from './ListAccounts';
import OwnerShop from './OwnerShop';
import CheckSkin from './CheckSkin';
import Login from './Login';
import ConductBuyAccount from "./ConductBuyAccount";
import SecurityAccount from "./SecurityAccount";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Question from "./Question";
import SeeDetail from "./SeeDetail";


class DieuHuongURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={ListAccounts} />
                <Route exact path="/listaccounts" component={ListAccounts} />
                <Route exact path="/ownershop" component={OwnerShop} />
                <Route exact path="/checkskin" component={CheckSkin} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/conductbuyaccount" component={ConductBuyAccount} />
                <Route exact path="/securityaccount" component={SecurityAccount} />
                <Route exact path="/question" component={Question} />
                <Route exact path="/seedetail/:slug.:id.html" component={SeeDetail} />
            </div>
        );
    }
}

export default DieuHuongURL;