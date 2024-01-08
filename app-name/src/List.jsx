import React from "react";


const ListObj = () => {
    
    const groceryList = [
        {
            id: `custom-1`,
            item: 'apples'
        },
        {
            id: `custom-2`,
            item: 'banana'
        },
        {
            id: `custom-3`,
            item: 'orange'
        }
    ];
    
    return (
        <>
            <ul>
                {groceryList.map(val => (
                    <li key={`${val.id}`}>{val.item}</li>
                    ))}
            </ul>
        </>
    );
};
export default ListObj;

// const ListHard = props => {
//     const item1 = <li key="unique-1">li item 1</li>;
//     const item2 = <li key="unique-2">li item 2</li>;
//     const item3 = <li key="unique-3">li item 3</li>;
//     const liArr = [item1,item2,item3];

//     return (
//     <ul>{liArr}</ul>
//     )
// };
// export default ListHard;


// const ListEasy = props => {
//     const groceryList = ['apples','oranges','bananas'];
//     const myElements = groceryList.map(val => {
//         return <li key={`custom-${val}`}>{val}</li>;
//     });
//     console.log(myElements);

//     return <ul>{myElements}</ul>

// };
// export default ListEasy;


