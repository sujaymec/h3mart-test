import React from "react";
import logo from "../h3martlogo.png";

export default function Landingpage(props){

    console.log('this log is from the landing page ', props)

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
            <table id="crypto-list">
                <thead>
                    <tr>
                        <th style={{textAlign: 'center'}}>Rank</th>
                        <th style={{textAlign: 'left'}}>Name</th>
                        <th>Price</th>
                        <th>Market Cap</th>
                        <th>VWAP (24Hr)</th>
                        <th>Change (24Hr)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{textAlign: 'center', width: '80px'}}>1</td>
                        <td style={{textAlign: 'left', lineHeight: '18px'}}>Bitcoin<br /><span style={{color: 'grey'}}>BTC</span></td>
                        <td>$61,265.35</td>
                        <td>$1.15t</td>
                        <td>$61,118.61</td>
                        <td className="green-increase">1.06%</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </React.Fragment>
}