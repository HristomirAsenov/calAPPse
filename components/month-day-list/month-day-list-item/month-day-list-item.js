import Link from 'next/link';
                           
import { DAYS_OF_WEEK } from 'globalConstants';

import classes from './month-day-list-item.module.scss';

const MonthDayListItem = ({
    day,
    month,
}) => {
    const today = new Date();

    if (!month) {
        return <p>Invalid month</p>;
    }

    const currentDate = new Date(today.getFullYear(), month.order - 1, day);
    const currentDay = currentDate.getDay();

    const isToday = day === today.getDate() && month.order - 1 === today.getMonth();
    const classNames = [classes['month-day'], isToday ? classes.today : ''].filter(Boolean).join(' ');

    return (< Link href={`/months/${month.name}/${day}`} 
    >
        <a className={ classNames }>
            <time>
                { `${day}`.padStart(2, '0') } - { DAYS_OF_WEEK[currentDay] }
            </time>
        </a>
    </Link>);
};

export default MonthDayListItem;
