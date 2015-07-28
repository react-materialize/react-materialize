var React = require('react/addons'),
    joinClasses = require('react/lib/joinClasses'),
    constants = require('./constants');
var cx = React.addons.classSet;
var Preloader = React.createClass({
  propTypes: {
    size: React.PropTypes.oneOf(constants.SCALES),
    active: React.PropTypes.bool,
    colors: React.PropTypes.array
  },

  getDefaultProps() {
    return {
      active: true,
      colors: ['blue', 'red', 'yellow', 'green']
    };
  },

  render() {
    var classes = {
      'preloader-wrapper': true,
      active: this.props.active
    };
    if (this.props.size) {
      classes[this.props.size] = true;
    }
    return (
      <div className={joinClasses(this.props.className, cx(classes))}>
        {this.props.colors.map(color => {
          var spinnerClasses = {
            'spinner-layer': true
          };
          spinnerClasses['spinner-' + color] = true;
          return (
            <div className={cx(spinnerClasses)}>
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
});

module.exports = Preloader;
