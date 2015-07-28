var React = require('react/addons'),
    joinClasses = require('react/lib/joinClasses');

var cx = React.addons.classSet;
var TabArea = React.createClass({
  render() {
    return (
      <ul className='tabs'>
        {
          React.Children.map((child, idx) => {
            var target = '#tab_' + idx;
            return (
              <li className='tab col s2'>
                <a href={target}>{child.props.tab}</a>
              </li>
            );
          })
        }
      </ul>
    );
  }
});
