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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span>{ children }</span>
                </a>
            </Link>
        );
    }

    return (
        <button
            className={ classes['main-button'] }
            onClick={ onClickHandler }
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>{ children }</span>
        </button>
    );
};

export default MainButton;
