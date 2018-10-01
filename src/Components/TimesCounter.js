import React from 'react';
import { TiWaves, TiWeatherPartlySunny } from 'react-icons/ti';
import { GoCalendar } from 'react-icons/go';
import '../Styles/ui.scss'

const percentToDecimal = decimal => ((decimal * 100) + '%');

const calcGoalProgress = (total, goal) => percentToDecimal(total / goal);


export const TimesCounter = ({ surf, goal, sunny, total }) => (
    <div className="ski-day-count">
        <div className="total-days">
            <span>{total} </span>
            <GoCalendar />
            <span>days</span>
        </div>
        <div className="powder-days">
            <span>{sunny}</span>
            <TiWeatherPartlySunny />
            <span>days</span>
        </div>
        <div className="backcountry-days">
            <span>{surf}</span>
            <TiWaves />
            <span>days</span>
        </div>
        <div>
            <span>
                {calcGoalProgress(
                    total,
                    goal
                )}
            </span>
        </div>
    </div>
);

TimesCounter.defaultProps = {
    total: 20,
    sunny: 10,
    surf: 25,
    goal: 50
}