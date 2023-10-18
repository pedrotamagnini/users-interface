import React from 'react';

function TableBody({ body }) {
    return (
        <tbody>
        {body.map((item, index) => (
            <tr key={index.code} className='table-body'>
               {Object.values(item).map((value,i) => (
                <td key={i}>{value}</td>
               ))}
            </tr>
        ))}
        </tbody>
    );
}

export default TableBody;