import React from 'react'

const Child = ({ list, deleteItem, taskComplete }) => {

    const names = list.map((n, i) =>

        <ol>
            <li key={i} value={i + 1}>{n}
                <button onClick={() => deleteItem(i)} className="btn btn-danger">Delete</button>
                <button onClick={() => taskComplete(i)} className="btn btn-success">Complete</button>
            </li>
        </ol>
    )
    
    return (
        <div>
            {names}
        </div>
    )
}

export default Child;