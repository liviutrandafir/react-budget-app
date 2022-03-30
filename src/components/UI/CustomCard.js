import "./CustomCard.scss"

function CustomCard(props) {
    const classes = 'custom-card ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    )
}

export default CustomCard;