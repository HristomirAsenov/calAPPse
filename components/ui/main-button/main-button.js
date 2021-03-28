import Link from 'next/link';

import classes from './main-button.module.scss'

const MainButton = ({
    href,
    children,
    onClickHandler,
}) => {

    if (href) {
        return (
            <Link href={ href }>
                <a className={ classes['main-button'] }>
                    {children}
                </a>
            </Link>
        );
    }

    return (
        <button
            className={ classes['main-button'] }
            onClick={ onClickHandler }
        >
            {children}
        </button>
    );
};

export default MainButton;
