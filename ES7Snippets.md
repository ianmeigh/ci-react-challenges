# ES7 Common Snippets

ES7+ React/Redux/React-Native snippets VSCode extension by 'dsznajder'

### `rfce` - Create a React Function

```jsx
import React from 'react'

function ES7Snippets() {
  return (
    <div>ES7Snippets</div>
  )
}

export default ES7Snippets
```

### `rafce` - Create a React Arrow Function

```jsx
import React from 'react'

const ES7Snippets = () => {
  return (
    <div>ES7Snippets</div>
  )
}

export default ES7Snippets
```

### `rce` - Create a React Class Export 

```jsx
import React, { Component } from 'react'

export class ES7Snippets extends Component {
  render() {
    return (
      <div>ES7Snippets</div>
    )
  }
}

export default ES7Snippets
```

### `rconst` - Create a React Constructor

```jsx
constructor(props) {
  super(props)

  this.state = {
    first
  }
}
```

### `clg` - console.log()

```jsx
console.log(first)
```

### `clo` - Console.log(name + object)

```jsx
console.log('first', first)
```

### `clj` - console.log() JOSN Data

```jsx
console.log('first', JSON.stringify(first, null, 2))
```
