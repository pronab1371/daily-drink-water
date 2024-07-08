import React from "react";

export const LargeCup = ({goalInLiter, consumedWater, totalCups, unitCupQty}:
                             { goalInLiter: number, consumedWater: number, totalCups: number, unitCupQty: number }) =>
{
    const fullCups = Math.round(consumedWater / unitCupQty);
    const percentageHeight = fullCups === 0 ? 0 : (fullCups / totalCups * 330);
    const percentageVal = fullCups === 0 ? 0 : (fullCups / totalCups * 100);
    const remainedLiter = fullCups === totalCups ? 0 : (goalInLiter - (unitCupQty * fullCups / 1000));

    return (
        <React.Fragment>
            {fullCups === totalCups ? (
                <div className="remained" id="remained" style={{visibility: "hidden", height: 0}}>
                    <span id="liters"></span>
                    <small>Remained</small>
                </div>
            ) : (
                <div className="remained" id="remained" style={{visibility: "visible"}}>
                    <span id="liters">{remainedLiter}L</span>
                    <small>Remained</small>
                </div>
            )}


            {fullCups === 0 ? (
                <div className="percentage" id="percentage" style={{visibility: 'hidden'}}>
                    <span id="percentage-value"></span>
                </div>
            ) : (
                <div className="percentage" id="percentage"
                     style={{visibility: 'visible', height: `${percentageHeight}px`}}>
                    <span id="percentage-value">{percentageVal}%</span>
                </div>
            )}

        </React.Fragment>
    );
};