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
        <div className={ classes.month }>
            <Link
                href={ {
                    pathname: '/months/[month]',
                    query: {
                        month: name,
                    },
                } }
            >
                <a
                    title={ `Check ${capitalizedName} records` }
                    className={ classes['month-link'] }
                >
                    { capitalizedName }
                </a>
            </Link>
            <SeasonIcon season={ season } />
        </div>
    );
}

export default MonthListItem;
