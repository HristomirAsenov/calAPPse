import NavigationListItem from './navigation-list-item';

import classes from './navigation-list.module.scss';

const NavigationList = ({
    links,
}) => (
    <ul className={ classes['navigation-list'] }>
        {
            links.map((navLink) => (
                <NavigationListItem
                    name={ navLink.name }
                    { ...navLink }
                />)
            )
        }
    </ul>
);

export default NavigationList;
