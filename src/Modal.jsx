import {
  Fragment,
  Children,
  cloneElement,
  useRef,
  useEffect,
  useState
} from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';

import idgen from './idgen';
import Button from './Button';
import { safeJSONStringify } from './utils';

const defaultRoot = typeof window !== 'undefined' ? document.body : null;

const defaultOptions = {
  opacity: 0.5,
  inDuration: 250,
  outDuration: 250,
  onOpenStart: null,
  onOpenEnd: null,
  onCloseStart: null,
  onCloseEnd: null,
  preventScrolling: true,
  dismissible: true,
  startingTop: '4%',
  endingTop: '10%'
};

const defaultActions = [
  <Button key="close" waves="green" modal="close" flat>
    Close
  </Button>
];

const Modal = ({
  id: idProp,
  actions = defaultActions,
  bottomSheet = false,
  children,
  fixedFooter = false,
  header,
  className,
  trigger,
  options = defaultOptions,
  open = false,
  root = defaultRoot,
  ...props
}) => {
  const [generatedId] = useState(() => `Modal-${idgen()}`);
  const id = idProp === undefined ? generatedId : idProp;
  const _modalRoot = useRef(null);
  const _modalInstance = useRef(null);
  const _modalRef = useRef(null);
  if (root === null) {
    console.warn(
      'React Materialize: root should be a valid node element to render a Modal'
    );
  }

  // Attach the portal root in an effect, not during render, so that every
  // cleanup that detaches it is followed by a setup that re-attaches it.
  useEffect(() => {
    const modalRoot = _modalRoot.current;
    root.appendChild(modalRoot);

    return () => {
      modalRoot.remove();
    };
  }, [root]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: deep-compares options via its JSON string
  useEffect(() => {
    const instance = M.Modal.init(_modalRef.current, options);
    _modalInstance.current = instance;

    return () => {
      // `destroy` leaves an open modal's body scroll lock and document
      // listeners behind, so close it first.
      instance.close();
      instance.destroy();
      _modalInstance.current = null;
    };
  }, [safeJSONStringify(options), root]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: re-run when `open` changes or the instance is re-created; show/hide are recreated every render
  useEffect(() => {
    if (open) {
      showModal();
    } else {
      hideModal();
    }
  }, [open, safeJSONStringify(options), root]);

  const showModal = e => {
    e && e.preventDefault();

    _modalInstance.current && _modalInstance.current.open();
  };

  const hideModal = e => {
    e && e.preventDefault();

    _modalInstance.current && _modalInstance.current.close();
  };

  const classes = cx(
    'modal',
    {
      'modal-fixed-footer': fixedFooter,
      'bottom-sheet': bottomSheet
    },
    className
  );

  const renderModalPortal = () => {
    if (!_modalRoot.current) {
      _modalRoot.current = document.createElement('div');
    }

    return createPortal(
      <div className={classes} ref={_modalRef} id={id} {...props}>
        <div className="modal-content">
          <h4>{header}</h4>
          {children}
        </div>
        <div className="modal-footer">{Children.toArray(actions)}</div>
      </div>,
      _modalRoot.current
    );
  };

  return (
    <Fragment>
      {trigger && cloneElement(trigger, { onClick: showModal })}
      {renderModalPortal()}
    </Fragment>
  );
};

Modal.propTypes = {
  /**
   * Options
   * Object with options for modal
   */
  options: PropTypes.shape({
    /**
     * Opacity of the modal overlay.
     */
    opacity: PropTypes.number,
    /**
     * Transition in duration in milliseconds.
     */
    inDuration: PropTypes.number,
    /**
     * Transition out duration in milliseconds.
     */
    outDuration: PropTypes.number,
    /**
     * Callback function called before modal is opened.
     */
    onOpenStart: PropTypes.func,
    /**
     * Callback function called after modal is opened.
     */
    onOpenEnd: PropTypes.func,
    /**
     * Callback function called before modal is closed.
     */
    onCloseStart: PropTypes.func,
    /**
     * Callback function called after modal is closed.
     */
    onCloseEnd: PropTypes.func,
    /**
     * Prevent page from scrolling while modal is open.
     */
    preventScrolling: PropTypes.bool,
    /**
     * Allow modal to be dismissed by keyboard or overlay click.
     */
    dismissible: PropTypes.bool,
    /**
     * Starting top offset
     */
    startingTop: PropTypes.string,
    /**
     * Ending top offset
     */
    endingTop: PropTypes.string
  }),
  /**
   * Extra class to added to the Modal
   */
  className: PropTypes.string,
  /**
   * Modal is opened on mount
   * @default false
   */
  open: PropTypes.bool,
  /**
   * BottomSheet styled modal
   * @default false
   */
  bottomSheet: PropTypes.bool,
  /**
   * Component children
   */
  children: PropTypes.node,
  /**
   * FixedFooter styled modal
   * @default false
   */
  fixedFooter: PropTypes.bool,
  /**
   * Text to shown in the header of the modal
   */
  header: PropTypes.string,
  /**
   * The button to trigger the display of the modal
   */
  trigger: PropTypes.node,
  /**
   * The buttons to show in the footer of the modal
   * @default <Button>Close</Button>
   */
  actions: PropTypes.node,
  /**
   * The ID to trigger the modal opening/closing
   */
  id: PropTypes.string,
  /**
   * Root node where modal should be injected
   * @default document.body
   */
  root: PropTypes.any
};

export default Modal;
