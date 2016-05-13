# React MDL Page

You can use it to put your component in an array.

## Use

- This is a react class. As a result, you need to use `ReactDOM.render` to render.
```
  import React from 'ract';
  import ReactDOM from 'react-dom';
  import page from 'react-mdl-page';

  import Component from './path/to/component';

  let data = [
    {
      "id": "page-one",
      "components": [
        {
          "component": Component,
          "data": (data Copmonent use)
        }
      ]
    },
    {
      "id": "page-two",
      "components": [
        {
          "component": Component,
          "data": (data Copmonent use)
        }
      ]
    }
  ];

  ReactDOM.render(<Page data={ data }/>, document.getElementById("root"));
```

## Data

- data:
```
  data = {
    'id': 'pageId',
    'class': 'pageClass',
    'style': {color: 'black'},
    'cells': []
  }

// It will render a html like this
  <div id="pageId" class="page-content pageClass" style="color: black;"></div>
```
- you not need to set all `id`, `class`, `style` and `cells`. You just use attributes needed.
