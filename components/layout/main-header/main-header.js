import Navigation from './navigation';

import classes from './main-header.module.scss';

const MainHeader = () => (
    <header className={ `${classes['main-header-section']} main-section` }>
        <Navigation />
    </header>
);

export default MainHeader;
