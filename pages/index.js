import fs from 'fs/promises';
import path from 'path';

import MonthList from 'components/month-list/month-list';

import classes from './index.module.scss';

const HomePage = ({
    months,
}) => (
    <div className={ `${classes['home-container']} container` }>
        <MonthList months={ months } />
    </div>
);

export const getStaticProps = async () => {

    const months = await getMonths();

    return {
        props: {
            months,
        },
        // revalidate: 10,
    };
};

const getMonths = async () => {
    const monthsPath = path.join(process.cwd(), 'globalConstants', 'months.json');
    const jsonMonths = await fs.readFile(monthsPath);
    return JSON.parse(jsonMonths);
};

export default HomePage;
