import './App.css'
import React, {useState} from "react";
import {SmallCup} from "./components/SmallCup.tsx";
import {LargeCup} from "./components/LargeCup.tsx";

function App() {
    const cupData = [
        {
            id: 1,
            quantity: 250,
            isFull: false,
        }, {
            id: 2,
            quantity: 250,
            isFull: false,
        }, {
            id: 3,
            quantity: 250,
            isFull: false,
        }, {
            id: 4,
            quantity: 250,
            isFull: false,
        }, {
            id: 5,
            quantity: 250,
            isFull: false,
        }, {
            id: 6,
            quantity: 250,
            isFull: false,
        }, {
            id: 7,
            quantity: 250,
            isFull: false,
        }, {
            id: 8,
            quantity: 250,
            isFull: false,
        }
    ];

    const goalInLiter = 2;
    const unitCupQuantityInMl = 250;

    const [consumedWater, setConsumedWater] = useState(0);

    return (
        <React.Fragment>
            <h1 className="center">Drink Water</h1>
            <h3 className="center padding-bottom-25">Goal: {goalInLiter} Liters</h3>
            <h4 className="center padding-bottom-25"><b>Today is {new Date().toDateString()}</b></h4>

            {consumedWater === goalInLiter * 1000 ? (
                <h2 className="center padding-bottom-25">
                    👍 You've reached your goal!
                </h2>
            ) : (
                <h2 className="center padding-bottom-25">
                    Today's total consumed Water: {consumedWater} ml
                </h2>
            )}


            <div className="cup center">
                <LargeCup
                    goalInLiter={goalInLiter}
                    consumedWater={consumedWater}
                    totalCups={cupData.length}
                    unitCupQty={unitCupQuantityInMl}
                />
            </div>

            <p className="text center padding-bottom-25 padding-up-25">Select how many glasses of water that you have
                drank</p>

            <div className="cups center">
                {cupData.map((glass) => (
                    <SmallCup key={glass.id}
                              id={glass.id}
                              qty={glass.quantity}
                              onGlassClick={setConsumedWater}
                    />
                ))}
            </div>
        </React.Fragment>
    )
}

export default App
