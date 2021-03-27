import classes from './footer.module.scss';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <section className='main-section'>
            <div className={ `${classes['footer-container']} container` }>
                <h3 className={ classes['footer-heading'] }>
                    Stay focused with &copy; <span>calAPPse</span> { currentYear }
                </h3>
            </div>
        </section>
    );
}

export default Footer;
