import { useRouter } from 'next/router';

function SelectedMonthPage() {
    const router = useRouter();

    return (
        <section>
            <div>
                <h1>Selected Month page ({ router.query.month })</h1>
            </div>
        </section>
    )
}

export default SelectedMonthPage;
