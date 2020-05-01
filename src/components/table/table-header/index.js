import React from 'react';
import './table-header.css';

const TableHeader = () => {
    const headerList = ['Income', 'Expenditure', 'Proportion', 'Delete'];

    return (
        <thead>
            <tr>
                {
                    headerList.map((headingItem, idx) => {
                        return (
                            <th key={idx}>{headingItem}</th>
                        )
                    })
                }
            </tr>
        </thead>
    )
}

export default TableHeader;