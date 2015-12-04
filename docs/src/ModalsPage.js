import React from 'react';
import Row from '../../src/Row';
import Col from '../../src/Col';
import ReactPlayground from './ReactPlayground';
import PropTable from './PropTable';
import store from './store';
import Samples from './Samples';
import modal from '../../examples/Modal';
import modalWithBottomSheet from '../../examples/ModalWithBottomSheet';
import modalWithFixedFooter from '../../examples/ModalWithFixedFooter';

class TabsPage extends React.Component {
  componentDidMount() {
    store.emit('component', 'Modals');
  }

  render() {
    return (
      <Row>
        <Col m={9} s={12} l={10}>
          <p className='caption'>
            Use a modal for dialog boxes, confirmation messages, or other content that can be called up.
          </p>
          <Col s={12}>
            <ReactPlayground code={ Samples.modal }>
              {modal}
            </ReactPlayground>
          </Col>

          <Col s={12}>
            <ReactPlayground code={ Samples.modalWithBottomSheet }>
              {modalWithBottomSheet}
            </ReactPlayground>
          </Col>

          <Col s={12}>
            <ReactPlayground code={ Samples.modalWithFixedFooter }>
              {modalWithFixedFooter}
            </ReactPlayground>
          </Col>

          <Col s={12}>
            <PropTable component='Modal'/>
          </Col>
        </Col>
      </Row>
    );
  }
}

export default TabsPage;
