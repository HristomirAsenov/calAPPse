import Link from 'next/link';
import '../styles/globals.css';

function MyApp( { Component, pageProps } ) {
    return (
        <section>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/months">Months</Link>
                </li>
                <li>
                    <Link href={ {
                        pathname: '/months/[month]',
                        query: { month: 'june' }
                    } }
                    >
                        June
                    </Link>
                </li>
                <li>
                    <Link href="/months/june/days/20"> 20 June</Link>
                </li>
                <li>
                    <Link
                        href="/nested/example/so/fking/nested/query/im/lost"
                    >
                        Nested Example (you may try it with different query)
                    </Link>
                </li>
            </ul>
            <Component { ...pageProps } />
        </section>
    );
}

export default MyApp;
