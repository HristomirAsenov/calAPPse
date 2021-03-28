import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faLeaf, faCloudSunRain, faSnowflake } from '@fortawesome/free-solid-svg-icons'

const SeasonIcon = ({
    season
}) => {
    switch (season) {
        case 'spring': return <FontAwesomeIcon icon={ faLeaf } />
        case 'summer': return <FontAwesomeIcon icon={ faSun } />
        case 'autumn': return <FontAwesomeIcon icon={ faCloudSunRain } />
        case 'winter': return <FontAwesomeIcon icon={ faSnowflake } />
    }
};

export default SeasonIcon;
