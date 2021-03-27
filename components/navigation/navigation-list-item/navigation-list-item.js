import Link from 'next/link';

import classes from './navigation-list-item.module.scss';

const NavigationListItem = ({
    name,
    href,
}) => (
    <li className={ classes['navigation-list-item'] }>
        <Link href={ href }>
            { name }
        </Link>
    </li>
);

export default NavigationListItem;
