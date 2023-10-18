import React from 'react';

const TableHeader = ({headers}) => {
    console.log('headers:', headers);
    return (
        <thead className='table-header'>
        <tr>
            {headers.map(header => <th key={header}>{header}</th>)}
        </tr>
        </thead>
    );
};

export default TableHeader;
