import PitchingListItem from './pitching-list-item';

import classes from './pitching-list.module.scss';

const PitchingList = ({
    phrases,
}) => (
    <ul className={ classes['pitching-list'] }>
        {
            phrases.map((phrase) => <PitchingListItem key={ phrase } phrase={ phrase } />)
        }
    </ul>
);

export default PitchingList;
