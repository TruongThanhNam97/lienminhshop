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
                <Route path="/listaccounts"  component={ListAccounts}/>
                {/* <Route path="/listaccounts"  component={ListAccounts} /> */}
                <Route path="/ownershop" component={OwnerShop} />
                <Route path="/checkskin" component={CheckSkin} />
                <Route path="/login" component={Login} />
                <Route path="/conductbuyaccount" component={ConductBuyAccount} />
                <Route path="/securityaccount" component={SecurityAccount} />
                <Route path="/question" component={Question} />
                <Route path="/seedetail/:slug.:id.html" component={SeeDetail} />
            </div>
        );
    }
}

export default DieuHuongURL;