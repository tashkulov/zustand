import React from 'react';
import { useFilter } from "../../api/useFilter.ts";
import './Filter.scss'
const Filter: React.FC = () => {
    const { filter, setFilter } = useFilter(state => ({
        filter: state.filter,
        setFilter: state.setFilter
    }));

    return (
        <div className="filter">
            <button disabled={filter === 'all'} onClick={() => setFilter('all')}>All</button>
            <button disabled={filter === 'uncompleted'} onClick={() => setFilter('uncompleted')}>Not Completed</button>
            <button disabled={filter === 'completed'} onClick={() => setFilter('completed')}>Completed</button>
        </div>
    );
};

export default Filter;
