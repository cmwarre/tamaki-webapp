import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class AppLayout extends Component {

    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <Navbar inverse collapseOnSelect>
                        <Navbar.Header>
                            <IndexLinkContainer to="/">
                                <Navbar.Brand>
                                    Tamaki Webapp
                                </Navbar.Brand>
                            </IndexLinkContainer>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <LinkContainer to="/">
                                    <NavItem eventKey={1}>
                                        Home
                                    </NavItem>
                                </LinkContainer>
                                <LinkContainer to="/about">
                                    <NavItem eventKey={2}>
                                        About
                                    </NavItem>
                                </LinkContainer>
                                <LinkContainer to="/contact">
                                    <NavItem eventKey={3}>
                                        Contact
                                    </NavItem>
                                </LinkContainer>
                            </Nav>
                            <Nav pullRight>
                                <LinkContainer to="/login">
                                    <NavItem eventKey={4}>
                                        Login
                                    </NavItem>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <div className="app-layout-content">
                        <div className="container-fluid">
                            <div className="row">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="container-fluid">
                            <div className="app-layout-footer">
                                <p className="text-muted text-center">© 2017 Tamaki Control Ltd. All rights reserved</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default AppLayout;