import React from 'react'
import './pagination.css'

const Pagination = () => {
    return (
        <div className="pagination">
            <a href="#">&laquo; Prev</a>
            <a href="/users1">1</a>
            <a href="/users2">2</a>
            <a href="/users3">3</a>
            <a href="/users4">4</a>
            <a href="/users5">5</a>
            <a href="/users6">6</a>
            <a href="#">Next  &raquo;</a>
        </div>
    )
}

export default Pagination
