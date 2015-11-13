import React from 'react';

class ComponentLayout extends React.Component {
  render() {
    let child = React.Children.only(this.props.children);
    let { component } = child.props.params;
    return (
      <div>
        <h1>{ component }</h1>
        {this.props.children}
      </div>
    );
  }
}

export default ComponentLayout;
