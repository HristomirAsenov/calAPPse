import Navigation from '../components/navigation';
import Footer from '../components/footer';

import '../styles/globals.scss';

function MyApp( { Component, pageProps } ) {
    return (
        <section className='site-wrapper'>
            <Navigation />
            <Component { ...pageProps } />
            <Footer />
        </section>
    );
}

export default MyApp;
