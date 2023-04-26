import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../JS/Actions/actions';

const Filter = ({ filter, dispatch }) => {
    const handleFilterChange = (e) => dispatch(setFilter(e.target.value));

    return (
        <div className='filter'>
            <label>
                <input type="radio" name="filter" value="all" 
                checked={filter === 'all'} 
                onChange={handleFilterChange}
                />
                All
            </label>
            <label>
                <input type="radio" name="filter" value="done"
                    checked={filter === 'done'}
                    onChange={handleFilterChange}
                />
                Done
            </label>
            <label>
                <input type="radio" name="filter" value="notDone"
                    checked={filter === 'notDone'}
                    onChange={handleFilterChange}
                />
                Not Done
            </label>
        </div>
    );
};

const mapStateToProps = (state) => ({ filter: state.filter });

export default connect(mapStateToProps)(Filter);