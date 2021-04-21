import { useRouter } from 'next/router';
import { capitelizeString } from 'utils';

import classes from './index.module.scss';

const SelectedMonthDayPage = () => {
    const router = useRouter();
    const { month, day } = router.query;

    const capitalizedMonth = capitelizeString(month);
    const selectedDay = `${day}`.padStart(2, '0');
    const currentYear = new Date().getFullYear();

    return (
        <div className={ `container ${classes['selected-date-container']}` }>
            <time
                className={ classes['selected-date'] }
            >
                { `${selectedDay} ${capitalizedMonth} ${currentYear}` }
            </time>
            <section className={ classes['day-stages'] }>
                <article>
                    <div className={ classes['day-stage-img-container'] }>
                        <img
                            alt='Morning'
                            title='Morning'
                            src='/pics/morning-bg.jpg'
                        />
                    </div>
                </article>
                <article>
                    <div className={ classes['day-stage-img-container'] }>
                        <img
                            alt='Noon'
                            title='Noon'
                            src='/pics/noon-bg.jpg'
                        />
                    </div>
                </article>
                <article>
                    <div className={ classes['day-stage-img-container'] }>
                        <img
                            alt='Night'
                            title='Night'
                            src='/pics/night-bg.jpg'
                        />
                    </div>
                </article>
            </section>
        </div>
    );
};

export default SelectedMonthDayPage;
