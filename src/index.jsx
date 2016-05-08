'use strict';

import React from 'react';
import Null from 'react-null';

export default class Page extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map((d, i) => {
          let pageId = d.id === undefined ? "" : d.id;
          let pageClass = d.class === undefined ? "page-content" : "page-content "+d.class;
          let pageStyle = d.style === undefined ? {} : d.style;
          let Component = d.component === undefined ? Null : d.component;
          let Data = d.data === undefined ? {} : d.data;

          return (
            <div key={i}
                 id={ pageId }
                 className={ pageClass }
                 style={ pageStyle }
            >
              <Component data={ Data } />
            </div>
          );
        })}
      </div>
    );
  }
};
