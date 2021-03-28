import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

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
                    <FontAwesomeIcon icon={ faPlus } />
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
            <FontAwesomeIcon icon={ faPlus } />
            <span>{ children }</span>
        </button>
    );
};

export default MainButton;
