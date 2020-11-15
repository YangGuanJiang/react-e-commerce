import './App.css';
import React from "react";
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user.action'
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

    unsubscribeAuth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;

        this.unsubscribeAuth = auth.onAuthStateChanged(async (userAuth) => {
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                })
            }
            setCurrentUser(userAuth);
        });

    }

    componentWillUnmount() {
        this.unsubscribeAuth();
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/shop" component={ShopPage} />
                    <Route exact path="/sign"
                           render={() => {
                        return this.props.currentUser ? (<Redirect to='/'/>) : (<SignPage/>)
                    }} />
                    <Route exact path="/" component={HomePage} />
                    <Route path="*" component={NotFound} />
                </Switch>

            </div>
        );
    }

}

const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
})
const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


