import classes from './main-footer.module.scss';

const MainFooter = () => {
    const currentYear = new Date().getFullYear();
    return (
        <section className={ `${classes['main-footer-section']} main-section` }>
            <div className={ `${classes['main-footer-container']} container` }>
                <h3 className={ classes['main-footer-heading'] }>
                    Stay focused with &copy; <span>calAPPse</span> { currentYear }
                </h3>
            </div>
        </section>
    );
}

export default MainFooter;
