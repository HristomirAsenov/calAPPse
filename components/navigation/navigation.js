import { MAIN_LINKS } from './navigation-constants.js';

import NavigationList from './navigation-list';

import classes from './navigation.module.scss';

const Navigation = () => (
    <section className='main-section'>
        <nav className={ `${classes['navigation-container']} container` }>
            <NavigationList
                links={ MAIN_LINKS }
            />
        </nav>
    </section>
);

export default Navigation;
