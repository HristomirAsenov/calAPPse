import Link from 'next/link';

const NavigationListItem = ({
    name,
    href,
}) => (
    <li>
        <Link href={ href } >
            { name }
        </Link>
    </li>
);

export default NavigationListItem;
