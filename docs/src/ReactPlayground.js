var React = require('react');

class ReactPlayground extends React.Component {
  static propTypes = {
    code: React.PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.trancate = this.truncate.bind(this);
  }

  render() {
    var {name, code, ...props} = this.props;
    return (
      <div className='playground'>
        {this.props.children}
        <pre><code className='language-markup'>
          {this.truncate(this.props.code)}
        </code></pre>
      </div>
    );
  }

  truncate(code) {
    var regex = /(<(.|\n)*>);/;
    var m = code.match(regex);
    if (m) {
      return m[1];
    }
    return "code no match";
  }
}

export default ReactPlayground;
