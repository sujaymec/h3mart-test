import React from "react";
import logo from "../h3martlogo.png";

export default function Landingpage(){
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
            </nav>
            <ul id="banner-list">
                <li>Market Cap<br /><span>$2.59T</span></li>
                <li>Market Cap<br /><span>$2.59T</span></li>
                <li>Market Cap<br /><span>$2.59T</span></li>
                <li>Market Cap<br /><span>$2.59T</span></li>
                <li>Market Cap<br /><span>$2.59T</span></li>
                <li>Market Cap<br /><span>$2.59T</span></li>
            </ul>
            <table id="crypto-list">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Market Cap</th>
                        <th>VWAP 24Hr</th>
                        <th>Change 24Hr</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Rank</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Market Cap</td>
                        <td>VWAP 24Hr</td>
                        <td>Change 24Hr</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </React.Fragment>
}