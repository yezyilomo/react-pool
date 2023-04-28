---
sidebar_position: 1
---

# Store
A store is a container for states. Store implements and encapsulates everything you need to easily manage your states including `store.setState`, `store.getState`, `store.useState`, `store.subscribe` and other functionalities. A store is created by using `createStore` API as 

```js
import { createStore } from 'state-pool';

const store = createStore();
```

## Adding states to a store

Since a store is just a container for our state, we would eventually need to add states to it. Store provides `store.setState` API which is used to create a state and add it to a store by mapping it to a key. `store.setState` takes two required parameters, a key(string) to map to a state object and the initial value, In addition to those two parameters it takes a third optional parameter which is the configuration object.

```js
// Signature
store.setState(key: String, initialState: Any, config?: {persist: Boolean})
```

Here is an example showing how to use `store.setState`

```js
store.setState("count", 0);
```

<br/>

Another way to add state in a store is using `createStore`, in this way we're creating a store and initializing it at the same time. i.e

```js
import { createStore } from 'state-pool';

const store = createStore({"count": 0});
```

```js
// createStore Signature
createStore({key1: stateValue1, key1, stateValue2, ...})
```


:::important

`store.setState` should be used outside of a react component to make sure that it's executed only once. If you use it inside a react component make sure it's executed only once in order to avoid overriding state in a store.

:::