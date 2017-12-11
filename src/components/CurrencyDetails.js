import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { startFetchCurrency } from "../actions/currency";

export class CurrencyDetails extends Component {
    constructor(props) {
        super(props);
        const { id } = this.props.match.params;
        const { fiat } = this.props.fiat;

        this.props.startFetchCurrency(id, fiat);
    }

    renderCurrencies = () => {
        const { currency } = this.props;
        const { fiat } = this.props.fiat;
        const settingsFiatPrice = `price_${fiat}`;
            return (
                <div className="columns is-mobile is-centered">
                    <div className="column-12 currency-details">
                        <div><span className="currency-details-text">rank:</span> {currency.rank}</div>
                        <div><span className="currency-details-text">name:</span> {currency.name}</div>
                        <div><span className="currency-details-text">price:</span> {Math.round(currency[settingsFiatPrice] * 100) / 100} {fiat.toUpperCase()}</div>
                        <div><span className="currency-details-text">symbol:</span> {currency.symbol}</div>
                        <div><span className="currency-details-text">price BTC:</span>{currency.price_btc}</div>
                        <div><span className="currency-details-text">change 1H:</span>{currency.percent_change_1h}%</div>
                        <div><span className="currency-details-text">change 7D:</span>{currency.percent_change_7d}%</div>
                        <div><span className="currency-details-text">change 24H:</span>{currency.percent_change_24h}%</div>
                        <div><span className="currency-details-text">total supply:</span>{currency.total_supply}</div>
                        <div><span className="currency-details-text">available supply:</span>{currency.available_supply}</div>
                    </div>
                </div>
            );
    }

    refreshCurrency = () => {
        const { id } = this.props.match.params;
        const { fiat } = this.props.fiat;

        this.props.startFetchCurrency(id, fiat);
    }


    render() {
        const { currency } = this.props;

        if (!currency) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <div className="columns is-mobile is-centered">
                    <div className="column-12 currency-details-site">
                        <div className="button is-primary"><Link className="currency-details-back-button" to="/">Back To Index</Link></div>
                        <a className="button is-info refresh-site" onClick={this.refreshCurrency}>Refresh</a>
                    </div>
                </div>    
                {this.renderCurrencies()}
            </div>
        );
    }
}

function mapStateToProps({currencies, fiat}, ownProps) {
    return { 
        currency: currencies[ownProps.match.params.id],
        fiat
    };
}

export default connect(mapStateToProps, { startFetchCurrency })(CurrencyDetails);
