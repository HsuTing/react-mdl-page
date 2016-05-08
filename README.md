# React mdl Page

## Props

You can give data to component like this:
```
  data = [
    {
      'id': 'pageId',
      'class': 'pageClass',
      'style': {}
    }
  ]

  <Page data={data} />
```

You will get like this:
```
<div>
  <div id="pageId" class="mdl-page pageClass">
  </div>
</div>
```

You can also add a component, like this:
```
  import YourComponent from 'your/path/to/component';

  'data' [
    {
      'component': 'YourComponent'
    }
  ]
```

- data can have `id`, `class`, `style`, `component`, `data`.
