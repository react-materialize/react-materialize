import React from 'react';

// Material design implementation of the Lightbox plugin
class MediaBox extends React.Component {
    render() {
        let {src, caption,  ...props} = this.props;
        return (
                <img className="materialboxed" data-caption={caption} {...props} src={src} />
        );
    }
}

MediaBox.propTypes = {
    caption: React.PropTypes.string,
    src: React.PropTypes.string
};

export default MediaBox;
