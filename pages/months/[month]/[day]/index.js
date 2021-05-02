import fs from 'fs/promises';
import path from 'path';

import { capitelizeString, getDaysInMonth } from 'utils';

import classes from './index.module.scss';

const SelectedMonthDayPage = ({
    month,
    day,
}) => {

    const capitalizedMonth = capitelizeString(month);
    const selectedDay = `${day}`.padStart(2, '0');
    const currentYear = new Date().getFullYear();

    return (
        <div className={ `container ${classes['selected-date-container']}` }>
            <time
                className={ classes['selected-date'] }
            >
                { `${selectedDay} ${capitalizedMonth} ${currentYear}` }
            </time>
            <h2>When did you train?</h2>
            <section className={ classes['day-stages'] }>
                <article>
                    <p>Morning
                        <span>(05:00 AM - 12:00 PM)</span>
                    </p>
                    <div className={ classes['day-stage-img-container'] }>
                        <img
                            alt='Morning'
                            title='Morning'
                            src='/pics/morning-bg.jpg'
                        />
                    </div>
                </article>
                <article>
                    <p>Noon <span>
                        (12:00 PM - 06:00 PM)</span>
                    </p>
                    <div className={ classes['day-stage-img-container'] }>
                        <img
                            alt='Noon'
                            title='Noon'
                            src='/pics/noon-bg.jpg'
                        />
                    </div>
                </article>
                <article>
                    <p>Night
                        <span>(after 06:00 PM)</span>
                    </p>
                    <div className={ classes['day-stage-img-container'] }>
                        <img
                            alt='Night'
                            title='Night'
                            src='/pics/night-bg.jpg'
                        />
                    </div>
                </article>
            </section>
        </div>
    );
};

export const getStaticProps = async (context) => {

    const { month, day } = context.params;

    return {
        props: {
            month,
            day,
        },
    };
};

export const getStaticPaths = async () => {

    const months = await getMonths();

    const pathsWithParams = months.reduce((acc, month) => {
        const daysInSelectedMonth = getDaysInMonth(month.name, months);
        const days = Array.from([...Array(daysInSelectedMonth)].keys());

        acc.push(...days.map(day => ({ params: { month: month.name, day: `${day + 1}` } })));

        return acc;
    }, []);

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


export default SelectedMonthDayPage;
