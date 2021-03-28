import Link from 'next/link';

import { capitelizeString } from 'utils';

import classes from './month-list-item.module.scss';

const MonthListItem = ({
    name,
}) => (
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
                title={ name }
                className={ classes['month-link'] }
            >
                { capitelizeString(name) }
            </a>
        </Link>
    </div>
);

export default MonthListItem;
