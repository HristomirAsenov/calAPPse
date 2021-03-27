import classes from './index.module.scss';

function HomePage() {
    return (
        <div className={ `${classes['home-container']} container` }>
            <img
                className={ classes['home-hero-banner'] }
                src={ '/images/home-hero-banner.jpg' }
                alt='calAPPse'
            />
        </div>
    );
}

export default HomePage;
