import { useRouter } from 'next/router';
import { getDaysInMonth } from 'utils';

function SelectedMonthPage() {
    const router = useRouter();
    const { month } = router.query;

    const daysInSelectedMonth = getDaysInMonth(month);
    return (
        <div className='container'>
            <h1>({ router.query.month }) - { daysInSelectedMonth }</h1>
        </div>
    )
}

export default SelectedMonthPage;
