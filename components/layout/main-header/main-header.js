import Link from 'next/link';
import { useRouter } from 'next/router';

import {
    PITCHING_PHRASES,
    SLOGAN,
} from './main-header-constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import PitchingList from './pitching-list';
import MainButton from 'components/ui/main-button';

import classes from './main-header.module.scss';

const MainHeader = () => {
    const router = useRouter();

    const saveTodaysRecordHandler = () => {
        const today = new Date();
        const day = today.getDate();
        const month = (today.toLocaleString('en-EN', { month: 'long' })).toLowerCase();

        router.push(`/months/${month}/${day}`);
    };

    return (
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
                    <MainButton onClickHandler={ saveTodaysRecordHandler }>
                        <FontAwesomeIcon icon={ faPlus } />
                        <span>Save Today's Record</span>
                    </MainButton>
                </div>
            </div>
        </header>
    );
}

export default MainHeader;
