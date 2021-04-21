import { useRouter } from 'next/router';
import { capitelizeString } from 'utils';

import classes from './index.module.scss';

const SelectedMonthDayPage = () => {
    const router = useRouter();
    const { month, day } = router.query;

    const capitalizedMonth = capitelizeString(month);
    const selectedDay = `${day}`.padStart(2, '0');
    const currentYear = new Date().getFullYear();

    return (
        <div className={`container ${classes['selected-date-container']}`}>
            <time
                className={ classes['selected-date'] }
            >
                { `${selectedDay} ${capitalizedMonth} ${currentYear}` }
            </time>
        </div>
    );
};

export default SelectedMonthDayPage;
