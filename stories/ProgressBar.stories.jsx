import Col from '../src/Col';
import ProgressBar from '../src/ProgressBar';
import Row from '../src/Row';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    docs: {
      description: {
        component:
          'If you have content that will take a long time to load, you should give the user feedback. For this reason we provide a number activity + progress indicators.'
      }
    }
  }
};

export const Default = {
  args: { progress: 70 },
  argTypes: { progress: { control: 'number' } },
  render: args => (
    <Row>
      <Col s={12}>
        <ProgressBar progress={args.progress} />
      </Col>
      <Col s={12}>
        <ProgressBar />
      </Col>
    </Row>
  )
};
