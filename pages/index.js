
import MonthList from 'components/month-list/month-list';

import classes from './index.module.scss';

function HomePage() {
    return (
        <div className={ `${classes['home-container']} container` }>
            <MonthList />
        </div>
    );
};

export default HomePage;
