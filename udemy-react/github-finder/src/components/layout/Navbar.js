import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Navbar extends Component {

    static defaultProps = {
        title: "Github Finder",
        icon: "fab fa-github"
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    }

    render() {
        return (
            <div className="navbar bg-primary">
                <h1>
                    <i className={this.props.icon}> {this.props.title}</i>
                </h1>
            </div>
        )
    }
}