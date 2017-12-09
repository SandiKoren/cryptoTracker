import _ from "lodash";
import React, { Component } from "react";
import { connect } from 'react-redux';
import { startFetchCurrencies } from "../actions/currency";
import { changeLanguage } from "../actions/language";
import { Link } from "react-router-dom";

class CurrenciesList extends Component {
    componentDidMount() {
        const { language } = this.props.language;
        this.props.startFetchCurrencies(language);
    }  

    renderCurrencies = () => {     
        const { language } = this.props.language;
        const settingsLangPrice = `price_${language}`;

        return _.map(this.props.currencies, currency => {
            return (
                <tr className="currencies-table-row" key = {currency.id}>
                    <th>{currency.rank}</th>
                    <td>{currency.name}</td>
                    <td>{currency.symbol}</td>
                    <td>{Math.round(currency[settingsLangPrice] * 100) / 100} {language.toUpperCase()}</td>
                    <td>{currency.percent_change_24h}%</td>
                </tr>
            );
        });
    }

    languageChange = (e) => {
        const language = e.target.value
        this.props.changeLanguage(language);
        this.props.startFetchCurrencies(language)
    };

    refreshCurrencies = () => {
        const { language } = this.props.language;
        this.props.startFetchCurrencies(language);
    }

    render() {
        return (
            <div className="columns is-mobile is-centered">
                <div className="column-12">
                    <div className="field">
                        <Link to="/settings" className="button is-primary">Settings</Link>
                        <a className="button is-primary" onClick={this.refreshCurrencies}>Refresh</a>
                    </div>
                   
                    <table className="table is-bordered">
                        <thead>
                            <tr>
                                <th>
                                    Rank
                                </th>
                                <th>
                                   Currency
                                </th>
                                <th>
                                    Symbol
                                </th>
                                <th>
                                   Price
                                </th>
                                <th>
                                    24h change
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderCurrencies()}
                        </tbody>
                     </table>
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

export default connect(mapStateToProps, { startFetchCurrencies, changeLanguage })(CurrenciesList);