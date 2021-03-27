import Link from 'next/link';

import classes from './404.module.scss';

function PageNotFound() {
    return (
        <div className={ `${classes['page-not-found-container']} container` }>
            <h1>404 | Page not found</h1>
            <Link href='/'>Go back home</Link>
        </div>
    );
}

export default PageNotFound;
