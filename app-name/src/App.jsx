import React, { useState, useEffect } from 'react';
import Creed from './Creed';
import UserProfile from './UserProfile';
import Test from './Test';
import ListObj from './List';

const App = () => {

    // state hook
    const handleClicker = e => {
        e.preventDefault();
        console.log('button has been clicked and form submitted');
    };
    const [count, setCount] = useState(0);
    const [email, setEmail] = useState('');
    const [emailTwo, setEmailTwo] = useState('');
    const handleClick = () => {
        setCount(count + 1);
    }
    // effect hook
    useEffect(() => {
        console.log('count effect running!');
        document.title = `# of clicks is ${count}`;
    }, [count]);
    useEffect(() => {
        console.log(`email effect running! ${email}`);
    }, [email]);

    useEffect(() => {
        console.log(`I only run once used for fecthing.then data`)
    }, []);

    // events for react
    // synthetic event wrap the item in a react style
    // handleEventFocus
    // handleEventBlur
    // handleEventKeyDown
    // handleEventKeyup
    // handleEventKeyPress
    // handleClick

    // 
    // onClick, onDoubleClick, onMouseEnter, onMouseLeave, etc. (mouse events)
    // onChange, onFocus, onBlur, onSubmit, etc. (form field and form events)
    // onCopy, onCut, onPaste (clipboard events)

    return (
        <div className="text-center p-3">
            <h2>This is the App component</h2>
            <p>The current count is: {count}</p>
            <button onClick={handleClick}>Click me to add one to the count</button>
            <Creed />
            <p>and this is still the App again</p>
            <Creed />
            <Creed />
            <UserProfile name="Blake" show="anything on" admin={true} />
            <UserProfile name="Sam" show="Who wants to be a millionaire" admin={false} />
            <Test
                string="this is a string"
                number={11}
                boolean={false}
                undefined={undefined}
                null={null}
                NaN={NaN}
                arr={['a', 'b', 'c']}
                obj={{ val: 'one', test: '2' }}
            />
            <input value={email} onChange={e => setEmail(e.target.value)} />
            <Creed />
            <form className='form-group container row col-4 border p-2'>
                <button className='btn btn-primary' onClick={handleClicker}>Submit Event item</button>
                <input className="form-control" value={emailTwo} onChange={e => setEmailTwo(e.target.value)} />
            </form>
            <ListObj />
        </div>
    );
}

export default App;

// Lets talk about State a KEY FEATURE allows UI to change and update items

// React uses immutable but able to be copy, think flip book and rendering

// Prop is Static & Passed into components
// State is dynamic & exists inside of the compoenets

// Syntax & Rules -
// 1. this is async
// 2. Setter function
// 3. Shows current Render Value
// Hooks
// from React,{useState} from 'react'
// must be called at top level of react func
//  // const [counter, setCounter] = useState(javascript); output [state,setstate]
//
// const handleClick =  ()=> {
//     console.log('it worked');
//     setCount(count+1);

// <h1>The current count is: {count}</h1>
//         <button onClick={handleClick}>Click me to add one to the count</button>

// Controlled React Input
// = input who value is tied to a piece of react state and has an onChange={e=>setVar(e.target.value)}

// useState

// useEffect = side effects of state renders

// lifecycle is old school