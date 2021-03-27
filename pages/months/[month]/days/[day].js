import { useRouter } from 'next/router';

function SelectedMonthDayPage() {
    const router = useRouter();

    return (
        <section>
            <div>
                <h1>Selected Month ({ router.query.month })</h1>
                <h1>Selected Day  ({ router.query.day })</h1>
            </div>
        </section>
    )
}

export default SelectedMonthDayPage;
