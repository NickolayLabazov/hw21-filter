import React from 'react';
import PropTypes from 'prop-types';

export default function Toolbar(props) {

    const { filters } = props;
    const { selected } = props;
    const { onSelectFilter } = props;

    return (
        <div className='toolbar'>
            {filters.map(filt => <button

                onClick={onSelectFilter(filt)}
                key={filt}
                className={filt === selected ? 'selected' : 'noSelected'}>{filt}

            </button>)}
        </div>
    );
}

Toolbar.propTypes = {
    filters: PropTypes.array,
    selected: PropTypes.string,
    onSelectFilter: PropTypes.func
} 
