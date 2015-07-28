var React = require('react');

export default class ReactPlayground extends React.Component {
  static propTypes = {
    code: React.PropTypes.string.isRequired
  }

  render() {
    var {name, code, ...props} = this.props;
    return (
      <div className='playground'>
        <this.props.children />
        <pre><code className='language-markup'>
          {this.props.code}
        </code></pre>
      </div>
    );
  }
}
