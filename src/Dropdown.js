import React, {
  Fragment,
  Children,
  cloneElement,
  useRef,
  useEffect
} from 'react';
import PropTypes from 'prop-types';
import idgen from './idgen';
import cx from 'classnames';

const Dropdown = ({ children, className, trigger, options, ...props }) => {
  const _dropdownContent = useRef(null);

  useEffect(() => {
    const instance = M.Dropdown.init(
      document.querySelector(`[data-target="${props.id}"]`),
      options
    );

    return () => {
      instance && instance.destroy();
    };
  }, [options, props.id, children]);

  const renderTrigger = () =>
    cloneElement(trigger, {
      'data-target': props.id,
      className: cx(trigger.props.className, 'dropdown-trigger')
    });

  const renderItems = c =>
    Children.map(c, element => {
      if (!element || element.type === 'li') {
        // Skip null, undefined, or li children
        return element;
      } else if (element.type === Fragment) {
        // Recurse here for Fragments
        return renderItems(element.props.children);
      } else if (
        element.type.name === 'Divider' ||
        element.type.displayName === 'Divider'
      ) {
        // Replace <Divider/> component with proper semantics
        return <li key={idgen()} className="divider" tabIndex="-1" />;
      } else {
        // Wrap child element in <li/>
        return <li key={idgen()}>{element}</li>;
      }
    });

  return (
    <Fragment>
      {renderTrigger()}
      <ul
        {...props}
        className={cx('dropdown-content', className)}
        ref={_dropdownContent}
      >
        {renderItems(children)}
      </ul>
    </Fragment>
  );
};

export const dropdownOptions = PropTypes.shape({
  alignment: PropTypes.oneOf(['left', 'right']),
  autoTrigger: PropTypes.bool,
  constrainWidth: PropTypes.bool,
  container: PropTypes.node,
  coverTrigger: PropTypes.bool,
  closeOnClick: PropTypes.bool,
  hover: PropTypes.bool,
  inDuration: PropTypes.number,
  outDuration: PropTypes.number,
  onOpenStart: PropTypes.func,
  onOpenEnd: PropTypes.func,
  onCloseStart: PropTypes.func,
  onCloseEnd: PropTypes.func
});

Dropdown.propTypes = {
  id: PropTypes.string,
  /**
   * The node to trigger the dropdown
   */
  trigger: PropTypes.node.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,

  /**
   * Options hash for the dropdown
   * <a target="_blank" href="http://materializecss.com/dropdown.html#options">http://materializecss.com/dropdown.html</a>
   */
  options: dropdownOptions
};

Dropdown.defaultProps = {
  get id() {
    return `Dropdown_${idgen()}`;
  },
  options: {
    alignment: 'left',
    autoTrigger: true,
    constrainWidth: true,
    container: null,
    coverTrigger: true,
    closeOnClick: true,
    hover: false,
    inDuration: 150,
    outDuration: 250,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null
  }
};

export default Dropdown;
