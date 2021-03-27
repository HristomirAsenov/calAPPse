import Link from 'next/link';

import {
    PITCHING_PHRASES,
    SLOGAN,
} from './main-header-constants';

import PitchingList from './pitching-list';
import MainButton from 'components/ui/main-button';

import classes from './main-header.module.scss';

const MainHeader = () => (
    <header className={ `${classes['main-header-section']} main-section` }>

        <div className={ `${classes['logo-container']} container` }>
            <Link href='/'>
                <a className={ classes.logo } >calAPPse</a>
            </Link>
        </div>

        <div className={ `${classes['summary-container']} container` }>
            <div className={ classes['pitching-container'] }>
                <PitchingList phrases={ PITCHING_PHRASES } />
                <h3 className={ classes.slogan }>{ SLOGAN }</h3>
            </div>

            <div className={ classes['save-record-button-container'] }>
                <MainButton href='/save-record'>
                    Save Record
                </MainButton>
            </div>
        </div>
    </header>
);

export default MainHeader;
