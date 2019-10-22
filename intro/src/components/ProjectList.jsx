import React from 'react';
import PropTypes from 'prop-types';

export default function ProjectList(props) {

    const { projects } = props;

    return (
        <div className='projects'>
            {projects.map(proj => <img src={proj.img} alt={proj.category} className='card' />)}
        </div>
    );
}

ProjectList.propTypes = {
    projects: PropTypes.array
} 