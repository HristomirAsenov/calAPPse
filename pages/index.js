import classes from './index.module.scss';

function HomePage() {
    return (
        <section className={ `${classes['home-section']} main-section` }>
            <div className={ `${classes['home-container']} container` }>
                <img
                    className={classes['home-hero-banner']}
                    src={'/images/home-hero-banner.jpg'}
                    alt='calAPPse'
                />
            </div>
        </section>
    );
}

export default HomePage;
