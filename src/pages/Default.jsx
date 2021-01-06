import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Default extends PureComponent {
    render() {
        return (
            <div>
                <h1> Hello Error Page </h1>
            </div>
        );
    }
}

Default.propTypes = {};

export default Default;
