import Navigation from '../components/navigation';

import '../styles/globals.scss';

function MyApp( { Component, pageProps } ) {
    return (
        <section className='site-wrapper'>
            <Navigation />
            <Component { ...pageProps } />
        </section>
    );
}

export default MyApp;
