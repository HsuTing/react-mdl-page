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
          let components = d.components === undefined ? [] : d.components;

          return (
            <div key={i}
                 id={ pageId }
                 className={ pageClass }
                 style={ pageStyle }
            >
              {components.map((dd, ii) => {
                let Component = dd.component === undefined ? Null : dd.component;
                let Data = dd.data === undefined ? {} : dd.data;

                return (
                  <Component data={ Data } />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
};
