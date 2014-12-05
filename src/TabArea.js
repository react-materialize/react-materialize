var React = require('react/addons'),
    cx = React.addons.classSet,
    joinClasses = require('react/lib/joinClasses');

var TabArea = React.createClass({
  render() {
    return (
      <ul className='tabs'>
        {
          React.Children.map(child, idx => {
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
