import { useRouter } from 'next/router';

function getMonthAsNumber( month ) {
    switch ( month ) {
        case 'january': return 1;
        case 'february': return 2;
        case 'march': return 3;
        case 'april': return 4;
        case 'may': return 5;
        case 'june': return 6;
        case 'july': return 7;
        case 'august': return 8;
        case 'september': return 9;
        case 'october': return 10;
        case 'november': return 11;
        case 'december': return 12;
    }
}

function SelectedMonthDaysPage() {
    const router = useRouter();
    const { month } = router.query;
    console.log(router.query)
    const daysInSelectedMonth = new Date( 2021, getMonthAsNumber( month ), 0 ).getDate();
    return (
        <section>
            <div>
                <h1>Selected Month page ({ router.query.month })</h1>
                <h3>Total days - { daysInSelectedMonth }</h3>
            </div>
        </section>
    )
}

export default SelectedMonthDaysPage;
