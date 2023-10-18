import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

function Table(props){
    if(props.data.length > 0){
        return (
           <table border="1">
                <TableHeader headers = {props.headers} />
                <TableBody data={props.data} />
            </table>
         );
     } else {
        return (<h1>No data ....</h1>);
    }
}

export default Table;
