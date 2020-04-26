import React from 'react'
import './pagination.css'

const Pagination = () => {
    return (
        <div className="pagination">
            <a href="#">&laquo; Prev</a>
            <a href="#">1</a>
            <a class="active" href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">Next  &raquo;</a>
        </div>
    )
}

export default Pagination
