import { useRouter } from 'next/router';
import { getDaysInMonth, capitelizeString } from 'utils';

import MonthDayList from 'components/month-day-list';

import classes from './index.module.scss';

const SelectedMonthPage = () => {
    const router = useRouter();
    const { month } = router.query;

    const daysInSelectedMonth = getDaysInMonth(month);
    const days = Array.from([...Array(daysInSelectedMonth)].keys());

    return (
        <div className={ `${classes['month-container']} container` }>
            <h1>{ month && capitelizeString(month) }</h1>
            <MonthDayList days={ days } />
        </div>
    );
};

export default SelectedMonthPage;
