import React from "react";
import logo from "../h3martlogo.png";

export default function Landingpage(props){

    return <React.Fragment>
        <div className="container">
            <nav>
                <ul>
                    <li>Coins</li>
                    <li>Exchanges</li>
                    <li>Swap</li>
                </ul>
                <div id="logo">
                    <img src={logo} alt="" />
                </div>
                <div id="refresh-btn">
                    <button>Refresh</button>
                </div>
            </nav>
            <ul id="banner-list">
                <li>Market Cap<br /><span>$2.59T</span></li>
                <li>Exchange Vol<br /><span>$91.51B</span></li>
                <li>Assets<br /><span>2,124</span></li>
                <li>Exchanges<br /><span>73</span></li>
                <li>Markets<br /><span>12,469</span></li>
                <li>BTC DOM Index<br /><span>44.5%</span></li>
            </ul>
            <table id="crypto-list" style={{borderCollapse: "collapse"}}>
                <thead>
                    <tr>
                        <th style={{textAlign: 'center'}}><b>Rank</b></th>
                        <th style={{textAlign: 'left'}}>Name</th>
                        <th>Price</th>
                        <th>Market Cap</th>
                        <th>VWAP (24Hr)</th>
                        <th>Change (24Hr)</th>
                    </tr>
                </thead>
                <tbody>
                    {props.coinData.data ? props.coinData.data.map((item, index) => (
                    <tr key={index}>
                        <td style={{textAlign: 'center', width: '80px'}}>{item.rank}</td>
                        <td style={{textAlign: 'left', lineHeight: '18px'}}>{item.name}<br /><span style={{color: 'grey'}}>{item.symbol}</span></td>
                        <td>${parseFloat(item.priceUsd).toFixed(2)}</td>
                        <td>${parseFloat((item.marketCapUsd)/1000000000).toFixed(2)}b</td>
                        <td>${parseFloat((item.vwap24Hr)/1000000000).toFixed(2)}</td>
                        <td className="green-increase">{parseFloat(item.changePercent24Hr).toFixed(2)}</td>
                    </tr>
                    )) : ''}
                </tbody>
            </table>
        </div>

    </React.Fragment>
}