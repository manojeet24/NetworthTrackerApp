import React from "react";
import infobean from "../images/infobean.jpg"
import macpower from "../images/macpower.jpg"
import affle from "../images/affle.png"
import adaniwilmar from "../images/adani-wilmar.png"
import happiestminds from "../images/happiest-minds.jpg"
import intellect from "../images/intellect.png"
import iex from "../images/iex.png"
import route from "../images/route.jpg"
import trident from "../images/trident.png"
import dharamsi from "../images/dharamsi.jpg"
import cgvak from "../images/cgvak.jpg"
import mtar from "../images/mtar.jpg"
import time from "../images/time.png"
import sonacoms from "../images/sonacoms.jpg"
import gujaratthemis from "../images/gujarat-themis.png"
import cams from "../images/cams.png"
import acrysil from "../images/acrysil.png"
import kpit from "../images/kpit.jpg"
import latentview from "../images/latent-view.png"
import kotak from "../images/kotak.png"
import clean from "../images/clean.png"


export default class Portfolio extends React.Component{

    render(){
        return(
            <div>&nbsp;
                <marquee behavior="scroll" direction="left" scrollamount="15">
					<img src = {infobean} alt="infobean Logo"  height="50px" hspace = "50px" loading="lazy"/> 
					<img src = {macpower} alt="macpower Logo"  height="50px" hspace = "50px" loading="lazy"/> 
				    <img src = {affle} alt="affle Logo"  height="50px" hspace = "50px" loading="lazy"/> 
					<img src = {adaniwilmar} alt="adaniwilmar Logo"  height="50px" hspace = "50px" loading="lazy"/>
					<img src = {happiestminds} alt="happiestminds Logo"  height="50px" hspace = "50px" loading="lazy"/> 
                    <img src = {kotak} alt="kotak Logo"  height="50px" hspace = "50px" loading="lazy"/> 
					<img src = {intellect} alt="intellect Logo"  height="50px" hspace = "50px" loading="lazy"/> 
					<img src = {mtar} alt="mtar Logo"  height="50px" hspace = "50px" loading="lazy"/> 
					<img src = {route} alt="route Logo"  height="50px" hspace = "50px" loading="lazy"/> 
					<img src = {iex} alt="iex Logo"  height="50px" hspace = "50px" loading="lazy"/> 
					<img src = {clean} alt="clean Logo"  height="50px" hspace = "50px" loading="lazy"/> 
					<img src = {latentview} alt="latent Logo"  height="50px" hspace = "50px" loading="lazy"/> 
					<img src = {kpit} alt="kpit Logo"  height="50px" hspace = "50px" loading="lazy"/> 
                    <img src = {sonacoms} alt="sonacoms Logo"  height="50px" hspace = "50px" loading="lazy"/> 
					<img src = {trident} alt="trident Logo"  height="50px" hspace = "50px" loading="lazy"/> 
					<img src = {time} alt="time Logo"  height="50px" hspace = "50px" loading="lazy"/> 
					<img src = {cams} alt="cams Logo"  height="50px" hspace = "50px" loading="lazy"/> 
					<img src = {acrysil} alt="acrysil Logo"  height="50px" hspace = "50px" loading="lazy"/> 
                </marquee>
            </div>
        )
    }
}