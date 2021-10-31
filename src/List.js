function List({ list, toggleList, removeList}){
    return (
        <div key={list.id} className="item-list">
            <div 
                className={list.complete ? "item-text strike" : "item-text"}
                onClick={() => toggleList(list.id)}
                >
                {list.task}
            </div>
            <div className="delete" onClick={() => removeList(list.id)}>
                X
            </div>
        </div>
    )
}

export default List