import { useRouter } from 'next/router';

const SelectedMonthDayPage = () => {
    const router = useRouter();
    const { month, day } = router.query;
    
    return (
        <div className='container'>
            <h1>Selected Month ({ month })</h1>
            <h1>Selected Day  ({ day })</h1>
        </div>
    );
};

export default SelectedMonthDayPage;
