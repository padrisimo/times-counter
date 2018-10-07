import React from 'react';
import { TiWaves, TiAdjustBrightness } from 'react-icons/ti';
import { GoCalendar } from 'react-icons/go';
import PropTypes from 'prop-types';
import '../Styles/ui.scss';

const percentToDecimal = decimal => ((decimal * 100).toFixed(1) + '%');

const calcGoalProgress = (total, goal) => percentToDecimal(total / goal);


export const TimesCounter = ({ surf=25, goal=75, sunny=24, total=50 }) => (
    <div className="ski-day-count">
        <div className="total-days">
            <span>{total} </span>
            <GoCalendar style={{color: 'SlateGray'}}/>
            <span>days</span>
        </div>
        <div className="powder-days">
            <span>{sunny}</span>
            <TiAdjustBrightness style={{color: 'gold'}}/>
            <span>days</span>
        </div>
        <div className="backcountry-days">
            <span>{surf}</span>
            <TiWaves style={{color: 'DodgerBlue'}}/>
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

TimesCounter.propTypes = {
    total: PropTypes.number,
    sunny: PropTypes.number,
    surf: PropTypes.number,
    goal: PropTypes.number
}


/* 
TimesCounter.defaultProps = {
    total: 20,
    sunny: 10,
    surf: 25,
    goal: 50
} 
*/
