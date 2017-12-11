import React, { Component } from "react";
import { connect } from 'react-redux';
import { changeFiat } from "../actions/fiat";
import { Link } from "react-router-dom";

export class Settings extends Component {

    changeFiat = (e) => {
        const fiat = e.target.value
        this.props.changeFiat(fiat);
    };

    render() {

        return (
            <div className="columns is-mobile is-centered">
                <div className="column-12">
                    <div className="field settings">
                        <div className="control">
                            <div className="select is-primary change-fiat-select">
                                <select onChange={this.changeFiat} value={this.props.fiat.fiat}>
                                    <option value="eur">EUR</option>
                                    <option value="usd">USD</option>
                                    <option value="cny">CNY</option>
                                </select>
                            </div>
                        </div>
                        <Link to="/" className="button is-primary"> Back To Home</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ fiat }) => {
    return {
        fiat
    };
};

export default connect(mapStateToProps, { changeFiat })(Settings);