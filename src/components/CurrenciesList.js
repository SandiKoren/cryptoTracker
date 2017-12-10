import React, { Component } from "react";
import { connect } from 'react-redux';
import { startFetchCurrencies } from "../actions/currency";
import { Link } from "react-router-dom";

class CurrenciesList extends Component {
    componentDidMount() {
        const { language } = this.props.language;
        this.props.startFetchCurrencies(language);
    }  

    renderCurrencies = () => {     
        const { language } = this.props.language;
        const settingsLangPrice = `price_${language}`;
        const { currencies } = this.props;


        return Object.keys(currencies).map((key) => {
            let currency = currencies[key];
            return (
                <tr className="currencies-table-row" key = {currency.id}>
                    <th>{currency.rank}</th>
                    <td><Link to={`/currencies/${currency.id}`}>{currency.name}</Link></td>
                    <td>{currency.symbol}</td>
                    <td>{Math.round(currency[settingsLangPrice] * 100) / 100} {language.toUpperCase()}</td>
                    <td>{currency.percent_change_24h}%</td>
                </tr>
            );
        });
    }

    refreshCurrencies = () => {
        const { language } = this.props.language;
        this.props.startFetchCurrencies(language);
    }

    render() {
        const { currencies } = this.props;

        if (Object.keys(currencies).length === 0) {
            return <div className="loading">Loading...</div>;
        }

        return (
            <div className="columns is-mobile is-centered">
                <div className="column-12">
                    <div className="field">
                        <Link to="/settings" className="button is-primary">Settings</Link>
                        <a className="button is-info" onClick={this.refreshCurrencies}>Refresh</a>
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

export default connect(mapStateToProps, { startFetchCurrencies })(CurrenciesList);