import { Fragment } from 'react';
import MainHeader from './main-header';
import MainFooter from './main-footer';

import classes from './layout.module.scss';

const Layout = ({
    children
}) => (
    <Fragment>
        <MainHeader />
        <main className={ `${classes['main-site-content']} main-section` }>
            { children }
        </main>
        <MainFooter />
    </Fragment>
);

export default Layout;
