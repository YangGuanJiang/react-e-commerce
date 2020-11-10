import './App.css';
import React from "react";
import {Route, Switch} from 'react-router-dom';
import {auth} from './firebase/firebase.utils'
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shop.component";
import Header from "./components/header/header.component";
import SignPage from "./pages/signpage/signpage.compoent";

const NotFound = () => (
    <div>
        <h1>This Page is not Found</h1>
    </div>
)

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        }
    }

    unsubscribeAuth = null;

    componentDidMount() {
        this.unsubscribeAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});
        })
    }

    componentWillUnmount() {
        this.unsubscribeAuth();
    }

    render() {
        return (
            <div className="App">
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/shop" component={ShopPage} />
                    <Route exact path="/sign" component={SignPage} />
                    <Route exact path="/" component={HomePage} />
                    <Route path="*" component={NotFound} />
                </Switch>

            </div>
        );
    }

}

export default App;


