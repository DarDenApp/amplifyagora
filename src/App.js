import React from "react";
import {Authenticator, AmplifyTheme} from 'aws-amplify-react'
import {Auth, Hub} from 'aws-amplify'
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import MarketPage from "./pages/MarketPage";
import Navbar from "./components/Navbar";
import "./App.css";

class App extends React.Component {
    state = {
        user: null
    };

    componentDidMount() {
        this.getUserData()
        Hub.listen('auth', this, 'onHubCapsule')
    }

    getUserData = async () => {
        const user = await Auth.currentAuthenticatedUser()
        user ? this.setState({user}) : this.setState({user: null})
    }

    onHubCapsule = capsule => {
        switch (capsule.payload.event) {
            case "signIn":
                console.log('signed in')
                this.getUserData()
                break
            case 'signUp':
                console.log('signed up')
                break
            case 'signOut':
                console.log('signed out')
                this.setState({user: null})
                break
            default:
                return
        }
    }

    render() {
        const {user} = this.state
        return !user ? (
            <Authenticator theme={theme}/>
        ) : (
            <Router>
                <>
                    {/*Navigation*/}
                    <Navbar/>


                    {/*Routes*/}
                    <div className={'app-container'}>
                        <Route exact path={'/'} component={HomePage}/>
                        <Route exact path={'/profile'} component={ProfilePage}/>
                        <Route exact path={'/markets/:marketId'} component={({match}) => {
                            return <MarketPage marketId={match.params.marketId}/>
                        }}/>
                    </div>
                </>

            </Router>

        )
    }
}

const theme = {
    ...AmplifyTheme,
    button: {
        ...AmplifyTheme.button,
        backgroundColor: 'cyan'
    },
    navBar: {
        ...AmplifyTheme.navBar,
        backgroundColor: "#413d41",
        color: 'white'
    },
    sectionBody: {
        ...AmplifyTheme.sectionBody,
        padding: "5px"
    },
    sectionHeader: {
        ...AmplifyTheme.sectionHeader,
        backgroundColor: 'var(--squidInk)'
    },
}

// export default withAuthenticator(App, true, [], null, theme);
export default App
