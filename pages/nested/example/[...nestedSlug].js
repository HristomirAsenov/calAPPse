import { useRouter } from 'next/router';

function NestedExample() {
    const router = useRouter();
    const { nestedSlug } = router.query;
    return (
        <section>
            <div>
                <h1>Nested example - {nestedSlug && nestedSlug.join(' / ')}</h1>
            </div>
        </section>
    );
}

export default NestedExample;

