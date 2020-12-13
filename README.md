### Setup
npm init
npm install react --save
npm install react-dom --save
npm start 

### React Component 
* use props and state as input
* state input can be change
* props represent fixed values 

<img src="image/1.PNG">

### JSX 

```
class Hello extends React.Component{
    render(){
        return(
            <div className="container">
                <h1>Getting Started</h1>
            </div>
        )
    }
}

ReactDOM.render(<Hello/>,mountNode);
```
### React Hooks

useState() results return 

* state object (getter)
* updater function (setter)

```
const [currentStateValue, functionToSetNewStateValue] = useState(initialStateValue)
```

i.e 

function Name(){
  const [counter, setCounter] = useState(0);
  return <button onClick={() => setCounter(counter+1)}>{counter}</button>;
}

ReactDOM.render(
    <Button />,
    document.getElementById('mountNode)
)


--- 

### JS Promise
Promise can have 3 states
1. Pending
2. Fulfilled : when async has completed
3. Rejected : when async failed 

### API Entities

* Addresses
* Items
* Orders
* Users
* ItemCategories
* OrderStatuses
