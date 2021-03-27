
import { MONTHS } from 'globalConstants'

import MonthListItem from './month-list-item';

import classes from './month-list.module.scss';

const MonthList = () => (
    <div className={ classes.months }>
        {
            MONTHS.map((month) => <MonthListItem key={ month.name } { ...month } />)
        }
    </div>
);

export default MonthList;
