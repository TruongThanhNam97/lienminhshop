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
                <Route path="/" exact component={ListAccounts}/>
                <Route path="/lienminhshop/listaccounts"  component={ListAccounts} />
                <Route path="/lienminhshop/ownershop" component={OwnerShop} />
                <Route path="/lienminhshop/checkskin" component={CheckSkin} />
                <Route path="/lienminhshop/login" component={Login} />
                <Route path="/lienminhshop/conductbuyaccount" component={ConductBuyAccount} />
                <Route path="/lienminhshop/securityaccount" component={SecurityAccount} />
                <Route path="/lienminhshop/question" component={Question} />
                <Route path="/lienminhshop/seedetail/:slug.:id.html" component={SeeDetail} />
            </div>
        );
    }
}

export default DieuHuongURL;