import React, { Component } from "react";
import { connect } from 'react-redux';
import { startFetchCurrencies } from "../actions/currency";
import { Link } from "react-router-dom";

export class CurrenciesList extends Component {
    componentDidMount() {
        const { fiat } = this.props.fiat;
        this.props.startFetchCurrencies(fiat);
    }  

    renderCurrencies = () => {     
        const { fiat } = this.props.fiat;
        const settingsFiatPrice = `price_${fiat}`;
        const { currencies } = this.props;


        return Object.keys(currencies).map((key) => {
            let currency = currencies[key];
            return (
                <tr className="currencies-table-row" key = {currency.id}>
                    <th>{currency.rank}</th>
                    <td><Link to={`/currencies/${currency.id}`}>{currency.name}</Link></td>
                    <td>{currency.symbol}</td>
                    <td>{Math.round(currency[settingsFiatPrice] * 100) / 100} {fiat.toUpperCase()}</td>
                    <td>{currency.percent_change_24h}%</td>
                </tr>
            );
        });
    }

    refreshCurrencies = () => {
        const { fiat } = this.props.fiat;
        this.props.startFetchCurrencies(fiat);
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
                        <a className="button is-info button-refresh-site" onClick={this.refreshCurrencies}>Refresh</a>
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

const mapStateToProps = ({currencies, fiat}) => {
    return {
         currencies,
         fiat
    };
};

export default connect(mapStateToProps, { startFetchCurrencies })(CurrenciesList);