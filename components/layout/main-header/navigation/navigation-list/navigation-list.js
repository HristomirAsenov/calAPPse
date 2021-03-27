import NavigationListItem from './navigation-list-item';

import classes from './navigation-list.module.scss';

const NavigationList = ({
    links,
}) => (
    <ul className={classes['navigation-list']}>
        {
            links.map(({ name, href }) => (
                <NavigationListItem
                    name={name}
                    href={href}
                    key={ href }
                />)
            )
        }
    </ul>
);

export default NavigationList;
