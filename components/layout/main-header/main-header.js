import Navigation from './navigation';

import classes from './main-header.module.scss';

const MainHeader = () => (
    <header className={ `${classes['main-header-section']} main-section` }>
        <div className={`${classes['main-header-container']} container`}>
            <Navigation />
        </div>
    </header>
);

export default MainHeader;
