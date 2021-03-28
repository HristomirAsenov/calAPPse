import dynamic from 'next/dynamic';

const getDynamicComponent = (type, name) => dynamic(
    () => import(`./icons/${type}/${name}.svg`),
    { loading: () => <p>...</p> }
);

const SvgIcon = ({
    type = 'solid',
    name,
}) => {
    const DynamicComponent = getDynamicComponent(type, name);
    const style = {
        // TODO
    };

    return <DynamicComponent { ...style } />
};

export default SvgIcon;
