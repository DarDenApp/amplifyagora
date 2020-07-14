import React from "react";
import {Menu as Nav, Icon, Button} from "element-react";
import {NavLink} from "react-router-dom";


const Navbar = () => (
    <Nav mode={'horizontal'} theme={'dark'} defaultActive={'1'}>
        <div className={'nav-container'}>
            {/*App Title/Icon*/}
            <Nav.Item index={'1'}>
                <NavLink to={'/'} className={'nav-link'}>
                    <span className={'app-title'}>
                        <img src={'https://icon.now.sh/account_balance/f90'} alt={'App Icon'}
                        className={'app-icon'}/>
                        AmplifyAgora
                    </span>
                </NavLink>
            </Nav.Item>
        </div>

    </Nav>
)


export default Navbar;
