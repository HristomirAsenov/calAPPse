import Link from 'next/link';

import classes from './index.module.scss';

import { MONTHS } from 'globalConstants'
import { capitelizeString } from 'utils';

function HomePage() {
    return (
        <div className={ `${classes['home-container']} container` }>

            <div className={ classes.months }>
                {
                    MONTHS.map(({ name, order }) => <div className={ classes.month } key={ name }>
                        <Link
                            href={ {
                                pathname: '/months/[month]',
                                query: {
                                    month: name,
                                },
                            } }
                        >
                            <a className={ classes['month-link'] }>
                                { capitelizeString(name) }
                            </a>
                        </Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HomePage;
