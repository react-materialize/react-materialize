import React from 'react';
import Footer from 'Footer';

const PageFooter = () => {
  render() {
    let links = (
      <ul>
        <li>
          <a className="grey-text text-lighten-3" href='https://github.com/react-materialize/react-materialize'>GitHub</a>
        </li>
      </ul>
    );
    let moreLinks = <a href='https://github.com/react-materialize/react-materialize/blob/master/LICENSE'>Code licensed under MIT</a>;

    return (
      <Footer links={links} copyrights="© 2015 React Materialize, All rights reserved" moreLinks={moreLinks}>
        <h5 className="white-text">Join the Discussion</h5>
        <p className="grey-text text-lighten-4">
          We have a Gitter chat room set up where you can talk directly with us. Come in and discuss new features, future goals, general problems or questions, or anything else you can think of.
        </p>
        <a href="https://gitter.im/react-materialize/react-materialize?utm_source=badge&amp;utm_medium=badge&amp;utm_campaign=pr-badge&amp;utm_content=badge"><img src="https://camo.githubusercontent.com/da2edb525cde1455a622c58c0effc3a90b9a181c/68747470733a2f2f6261646765732e6769747465722e696d2f4a6f696e253230436861742e737667" alt="Join the chat at https://gitter.im/react-materialize/react-materialize" data-canonical-src="https://badges.gitter.im/Join%20Chat.svg"/>
        </a>
      </Footer>
    );
  }
}

export default PageFooter;
