# React MDL Page

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

You can also add components, like this:
```
  import YourComponent from 'your/path/to/component';

  'data' [
    {
      'components': [{ 'component': 'YourComponent' }, { 'component': 'YourComponent' }]
    }
  ]
```

- data can have `id`, `class`, `style`, `components`. `data` and component can be added in objects of component.
