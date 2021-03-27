import Link from 'next/link';

import classes from './navigation-list-item.module.scss';

const NavigationListItem = ({
    name,
    href,
    prefix,
}) => (
    <li className={ classes['navigation-list-item'] }>
        <Link href={ href }>
            <a>
                { prefix && prefix() }
                <span>
                    { name }
                </span>
            </a>
        </Link>
    </li>
);

export default NavigationListItem;
