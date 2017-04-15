import React from 'react';
import PropTypes from 'prop-types';

class ReactPlayground extends React.Component {
  constructor (props) {
    super(props);
    this.trancate = this.truncate.bind(this);
  }

  render () {
    const { code, children } = this.props;

    return (
      <div className='playground'>{children}
        <pre>
          <code className='language-markup'>
            {this.truncate(code)}
          </code>
        </pre>
      </div>
    );
  }

  truncate (code) {
    var regex = /(<(.|\n)*>);/;
    var m = code.match(regex);
    if (m) {
      return m[1];
    }
    return 'code no match';
  }
}

ReactPlayground.propTypes = {
  code: PropTypes.string.isRequired,
  children: PropTypes.element
};

export default ReactPlayground;
