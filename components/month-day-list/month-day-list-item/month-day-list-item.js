import { useRouter } from 'next/router';

import { MONTHS, DAYS_OF_WEEK } from 'globalConstants';

import classes from './month-day-list-item.module.scss';

const MonthDayListItem = ({
    day,
}) => {
    const router = useRouter();
    const { month } = router.query;

    const today = new Date();
    const currentMonth = MONTHS.find((m) => m.name === month.toLocaleLowerCase());
    const currentDate = new Date(today.getFullYear(), currentMonth.order - 1, day);

    const isToday = day === today.getDate() && currentMonth.order - 1 === today.getMonth();
    const classNames = [classes['month-day'], isToday ? classes.today : ''].filter(Boolean).join(' ');

    return (<div className={classNames }>
        <time>
            { `${day}`.padStart(2, '0') } - { DAYS_OF_WEEK[currentDate.getDay()] }
        </time>
    </div>);
};

export default MonthDayListItem;
