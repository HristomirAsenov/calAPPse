import Link from 'next/link';

import { capitelizeString } from 'utils';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faLeaf, faCloudSunRain, faSnowflake } from '@fortawesome/free-solid-svg-icons'

import classes from './month-list-item.module.scss';

const MonthListItem = ({
    name,
    season,
}) => {

    const SeasonIcon = () => {
        switch (season) {
            case 'spring': return <FontAwesomeIcon icon={ faLeaf } />
            case 'summer': return <FontAwesomeIcon icon={ faSun } />
            case 'autumn': return <FontAwesomeIcon icon={ faCloudSunRain } />
            case 'winter': return <FontAwesomeIcon icon={ faSnowflake } />
        }
    };

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
            <SeasonIcon />
        </div>
    );
}

export default MonthListItem;
