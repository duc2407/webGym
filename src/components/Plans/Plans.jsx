import React from 'react';
import './Plans.css';
import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
import rightArrow from '../../assets/rightArrow.png'
function Plans() {
    return (
    <div className="Plans">
        <div className="header-plans">
            <span className="stroke-text">READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className="stroke-text">NOW WITHUS</span>
        </div>
        <div className="blur plan-blur"></div>
        <div className="plans">
            {plansData.map((plan, i) => (
                <div className="plan" key={i}>
                    {plan.icon}
                    <span className="plan-name">{plan.name}</span>
                    <span className="plan-price"> $ {plan.price}</span>
                    <div className="feature">
                        {plan.features.map((feature, i) => (
                            <span key={i}><img src={whiteTick} alt="" />{feature}</span>
                        ))}
                    </div>
                    <span className="plan-demo">See more benefits <img src={rightArrow} alt="" /></span>
                    <button data-content={plan.sale} className="btn button-plan" >Join now</button>
                </div>
            ))}
        <div className="blur plan-blur"></div>
        </div>
    </div>
  )
}

export default Plans