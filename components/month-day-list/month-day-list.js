import MonthDayListItem from './month-day-list-item';

import classes from './month-day-list.module.scss';

const MonthDayList = ({
    days,
    month,
}) => (
    <div className={ classes['month-days-container'] }>
        {
            days.map(day => <MonthDayListItem
                key={ `month-day-${day + 1}` }
                day={ day + 1 }
                month={ month }
            />)
        }
    </div>
);

export default MonthDayList;
