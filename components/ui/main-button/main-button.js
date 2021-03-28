import Link from 'next/link';
import SvgIcon from '../svg-icon';

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
                    <SvgIcon name='plus' />
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
            <SvgIcon name='plus' />
            <span>{ children }</span>
        </button>
    );
};

export default MainButton;
