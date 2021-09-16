import React from 'react'
import "../styles/gtaStyle.scss"
import drums from "../assets/images/drums.png";

export default function GtaStyle() {
return (
<React.Fragment>       
<div className="location">Ocean Beach </div>
<div className="stats">
    <div className="stats-player-info">
        <div className="stats-player-info-time">18:32</div>
        <div className="stats-player-info-money">$00154921</div>
        <div className="stats-player-info-armor"><i class="fas fa-shield-alt"></i> 100</div>
        <div className="stats-player-info-health"><i class="fas fa-heart"></i> 100</div>
        <div className="stats-player-info-wanted-level">
            <div className="stats-player-info-wanted-star"><i class="fas fa-star"></i></div>
            <div className="stats-player-info-wanted-star"><i class="fas fa-star"></i></div>
            <div className="stats-player-info-wanted-star"><i class="fas fa-star"></i></div>
            <div className="stats-player-info-wanted-star active"><i class="fas fa-star"></i></div>
            <div className="stats-player-info-wanted-star active"><i class="fas fa-star"></i></div>
            <div className="stats-player-info-wanted-star active"><i class="fas fa-star"></i></div>
        </div>
    </div>
    <div className="stats-player-weapon">
        <div className="stats-player-weapon-icon">
            <img className="stats-player-weapon-icon-gun" src={drums} alt="drums"/> 
        </div>
    </div>
</div>
</React.Fragment> 
);
}