import React from "react";

const Test = (prop) =>  {
    return (
        <div className="text-center text-primary">
            <h2>This is the Prop components = properties</h2>
            <p>sting type: {prop.string}</p>
            <p>number type: {prop.number}</p>
            <p>boolean type: {prop.boolean}</p>
            <p>undefinded type: {prop.undefined}</p>
            <p>null type: {prop.null}</p>
            <p>NaN type: {prop.NaN}</p>
            <p>array type: {prop.arr}</p>
            <p>object type: {prop.obj.val}</p>
            <p>object type: an error will occur if the entire object is called, reference by key name ie: prop.obj = error, while prop.obj.val = success</p>
        </div>
    );
}

export default Test;

// The above is a componet using propz and the data types that flow into it sucessfully and unsuccessfully. See the App.jsx file for the use of props data types and there application