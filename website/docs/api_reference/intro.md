---
sidebar_position: 1
---

# Intro
State pool API is divided into two parts. 
1. High Level API(Store based API)
2. Low Level API(Non-Store based API)

In a high level API, states are stored in a container that we call "store". With high level API, State pool allows you to create as many stores as you want and use them anywhere in your application, it doesn't enforce having a single central store.

Here is a simple example using high level API

```jsx
import React from 'react';
import { createStore } from 'state-pool';

// Create a store
const store = createStore();

// Create count state and initialize it with 0
const count = store.setState("count", 0);

function ClicksCounter(props){
    // Use count state
    const [count, setCount] = store.useState("count");

    const incrementCount = (e) => {
        setCount(count+1);
    }

    return (
        <div>
            Count: {count}
            <br/>
            <button onClick={incrementCount}>Click</button>
        </div>
    );
}

ReactDOM.render(ClicksCounter, document.querySelector("#root"));
```

<br/>

On the other hand, low level API doesn't use the concept of a store, You simply store your state wherever you want. In low level API **state-pool** doesn't care where you store your state as long as you can access them, for-instance I could choose to store my state in a global variable and it would still work just fine.

So basically the low level API gives you a way to create and use state, it doesn't matter where you store them as long as you can access them.

Here is the same example as the previous one re-written using low level API

```jsx
import React from 'react';
import { createState } from 'state-pool';


// Create count state and initialize it with 0
const count = createState(0);

function ClicksCounter(props){
    // Use count state
    const [count, setCount] = count.useState();

    const incrementCount = (e) => {
        setCount(count+1);
    }

    return (
        <div>
            Count: {count}
            <br/>
            <button onClick={incrementCount}>Click</button>
        </div>
    );
}

ReactDOM.render(ClicksCounter, document.querySelector("#root"));
```

Or if you want to import `useState` from **state-pool**

```jsx
import React from 'react';
import { createState, useState } from 'state-pool';


// Create count state and initialize it with 0
const count = createState(0);

function ClicksCounter(props){
    // Use count state
    const [count, setCount] = useState(count);

    const incrementCount = (e) => {
        setCount(count+1);
    }

    return (
        <div>
            Count: {count}
            <br/>
            <button onClick={incrementCount}>Click</button>
        </div>
    );
}

ReactDOM.render(ClicksCounter, document.querySelector("#root"));
```

Now let's explore these two APIs
