import Link from 'next/link';

import { capitelizeString } from 'utils';

import SeasonIcon from 'components/ui/season-icon';

import classes from './month-list-item.module.scss';

const MonthListItem = ({
    name,
    season,
}) => {

    const capitalizedName = capitelizeString(name);

    return (
        <Link
            href={ {
                pathname: '/months/[month]',
                query: {
                    month: name,
                },
            } }
        >
            <a
                className={ classes.month }
                title={ `Check ${capitalizedName} records` }
            >
                <h3
                    className={ classes['month-link'] }
                >
                    { capitalizedName }

                </h3>
                <SeasonIcon season={ season } />
            </a>
        </Link >
    );
}

export default MonthListItem;
