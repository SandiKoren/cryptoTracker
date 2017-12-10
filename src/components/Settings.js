import React, { Component } from "react";
import { connect } from 'react-redux';
import { startFetchCurrencies } from "../actions/currency";
import { changeLanguage } from "../actions/language";
import { Link } from "react-router-dom";

class Settings extends Component {

    languageChange = (e) => {
        const language = e.target.value
        this.props.changeLanguage(language);
    };

    render() {

        return (
            <div className="columns is-mobile is-centered">
                <div className="column-12">
                    <div className="field settings">
                        <div className="control">
                            <div className="select is-primary change-language-select">
                                <select onChange={this.languageChange} value={this.props.language.language}>
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

const mapStateToProps = (state) => {
    return {
        currencies: state.currencies,
        language: state.language
    };
};

export default connect(mapStateToProps, { startFetchCurrencies, changeLanguage })(Settings);