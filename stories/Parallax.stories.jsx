import Parallax from '../src/Parallax';

export default {
  title: 'Javascript/Parallax',
  component: Parallax,
  parameters: {
    docs: {
      description: {
        component:
          'Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling. Check out the demo to get a better idea of it.'
      }
    }
  }
};

export const Default = {
  render: () => (
    <div>
      <Parallax
        image={
          <img src="http://materializecss.com/images/parallax1.jpg" alt="" />
        }
      />
      <div className="section white">
        <div className="row container">
          <h2 className="header">Parallax</h2>
          <p className="grey-text text-darken-3 lighten-3">
            Parallax is an effect where the background content or image in this
            case, is moved at a different speed than the foreground content
            while scrolling.
          </p>
        </div>
      </div>
      <Parallax
        image={
          <img src="http://materializecss.com/images/parallax2.jpg" alt="" />
        }
      />
    </div>
  )
};
