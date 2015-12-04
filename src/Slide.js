import React from 'react';
import cx from 'classnames';
import constants from './constants';

class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.renderCaption = this.renderCaption.bind(this);
  }

  render() {
    return (
      <li>
        <img src={this.props.src}/>
        {this.renderCaption()}
      </li>
    );
  }

  renderCaption() {
    let {title, className, alignment, children, ...props} = this.props;
    let classes = {
      caption: true,
    };
    classes[alignment + '-align'] = true;

    if (typeof title !== 'undefined' || typeof children !== 'undefined') {
      return (
        <div className={cx(classes)} {...props}>
          <h3>{title}</h3>
          <h5 className={className}>{children}</h5>
        </div>
      );
    } else return null;
  }
}

Slide.propTypes = {
  /**
  * Aliment of the caption
  * @default 'center'
  */
  alignment: React.PropTypes.oneOf(constants.PLACEMENTS),
  /**
  * The tagline of the caption
  */
  title: React.PropTypes.string,
  /**
   * The path of the background image
   */
  src: React.PropTypes.string.isRequired,
};

Slide.defaultProps = {
  placement: 'center'
};

export default Slide;
