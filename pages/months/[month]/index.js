import fs from 'fs/promises';
import path from 'path';

import { useRouter } from 'next/router';
import { capitelizeString, getDaysInMonth } from 'utils';

import MonthDayList from 'components/month-day-list';

import classes from './index.module.scss';

const SelectedMonthPage = ({
    days,
    months,
}) => {
    const router = useRouter();
    const { month } = router.query;
    const monthObj = months.find(({ name }) => name === month);

    return (
        <div className={ `${classes['month-container']} container` }>
            <h1>{ month && capitelizeString(month) }</h1>
            <MonthDayList
                month={ monthObj }
                days={ days }
            />
        </div>
    );
};

export default SelectedMonthPage;

export const getStaticProps = async (context) => {

    const { month } = context.params;
    const months = await getMonths();
    const daysInSelectedMonth = getDaysInMonth(month, months);
    const days = Array.from([...Array(daysInSelectedMonth)].keys());

    return {
        props: {
            days,
            months,
        },
    };
};

export const getStaticPaths = async () => {

    const months = await getMonths();
    const pathsWithParams = months.map(({ name }) => ({ params: { month: name } }));

    return {
        paths: pathsWithParams,
        fallback: false,
    };
}

const getMonths = async () => {
    const monthsPath = path.join(process.cwd(), 'globalConstants', 'months.json');
    const jsonMonths = await fs.readFile(monthsPath);
    return JSON.parse(jsonMonths);
};
