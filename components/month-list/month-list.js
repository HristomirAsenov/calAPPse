import MonthListItem from './month-list-item';

import classes from './month-list.module.scss';

const MonthList = ({
    months,
}) => (
    <div className={ classes.months }>
        {
            months.map((month) => <MonthListItem key={ month.name } { ...month } />)
        }
    </div>
);


export default MonthList;
