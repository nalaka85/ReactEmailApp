import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Log in with Google</a></li>;


            default:
                return <li><a >Log out</a></li>;

        }

    }
    render() {

        return (
            <nav>
                <div class="nav-wrapper">
                    <a className="left brand-logo">Nalaka Email</a>
                    <ul className="right">

                        {this.renderContent()}

                    </ul>
                </div>
            </nav>

        );
    }
}
function mapStatetoProps({ auth }) {
    //return { auth: state.auth };
    return { auth };
}
export default connect(mapStatetoProps)(Header);