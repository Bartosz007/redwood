
function BetterTag(props){

    const selfDestroy = props.removeTag

    return(
        <div className="tag" onClick={e => selfDestroy(e,props.value)}>
            <div>{props.value}</div>
            <img src="../icons/delete.svg" alt="delete"/>
        </div>
    );

}

export default BetterTag;