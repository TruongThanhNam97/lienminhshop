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
<<<<<<< HEAD
                <Route path="/lienminhshop" exact component={ListAccounts}/>
                <Route path="/listaccounts"  component={ListAccounts} />
                <Route path="/ownershop" component={OwnerShop} />
                <Route path="/checkskin" component={CheckSkin} />
                <Route path="/login" component={Login} />
                <Route path="/conductbuyaccount" component={ConductBuyAccount} />
                <Route path="/securityaccount" component={SecurityAccount} />
                <Route path="/question" component={Question} />
                <Route path="/seedetail/:slug.:id.html" component={SeeDetail} />
=======
                <Route path="/lienminhshop/" exact component={ListAccounts}/>
                <Route path="/lienminhshop/listaccounts"  component={ListAccounts} />
                <Route path="/lienminhshop/ownershop" component={OwnerShop} />
                <Route path="/lienminhshop/checkskin" component={CheckSkin} />
                <Route path="/lienminhshop/login" component={Login} />
                <Route path="/lienminhshop/conductbuyaccount" component={ConductBuyAccount} />
                <Route path="/lienminhshop/securityaccount" component={SecurityAccount} />
                <Route path="/lienminhshop/question" component={Question} />
                <Route path="/lienminhshop/seedetail/:slug.:id.html" component={SeeDetail} />
>>>>>>> 2e81dc54adb441386adc59a65a7d6621a7d2a245
            </div>
        );
    }
}

export default DieuHuongURL;