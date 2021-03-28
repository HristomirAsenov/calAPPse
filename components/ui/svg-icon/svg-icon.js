import dynamic from 'next/dynamic';

import classes from './svg-icon.module.scss';

const getDynamicComponent = (type, name) => dynamic(
    () => import(`./icons/${type}/${name}.svg`),
    { loading: () => <p>...</p> }
);

const SvgIcon = ({
    type = 'solid',
    name,
    primary = false,
}) => {
    const DynamicComponent = getDynamicComponent(type, name);

    return <DynamicComponent
        className={ `${classes['svg-icon']} ${classes[!primary ? 'secondary' : 'primary']}` }
    />
};

export default SvgIcon;
