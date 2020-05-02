
import React from 'react';
import { connect } from 'react-redux';
import TableHeader from './table-header';
import Button from '../button';
import './table.css';


const Table = (props) => {
    const { data, jsonData, addAction, editAction, deleteAction } = props;

    return (
        <table className="table table-bordered">
            <TableHeader />
            <tbody>
                {data && data.length > 0 && data.map((row, index) => {
                    const keyId = row.id ? row.id : index;
                    return (
                        <tr key={keyId}>
                            <td>
                                <input onChange={(e) => editAction(row, "incomeSource", e.currentTarget.value)}
                                    type='text'
                                    className='form-control'
                                    value={row.incomeSource}
                                    id={`${keyId}_incomeSource`} />
                            </td>
                            <td>
                                <input onChange={(e) => editAction(row, "expenditure",  e.currentTarget.value)}
                                    type='text'
                                    className='form-control'
                                    value={row.expenditure} 
                                    id={`${keyId}_expenditure`}/>
                            </td>
                            <td>
                                <input onChange={(e) => editAction(row, "proportion",  e.currentTarget.value)}
                                    type='number'
                                    className='form-control'
                                    placeholder=''
                                    value={row.proportion}
                                    id={`${keyId}_proportion`} />
                            </td>
                            <td>
                                 <Button
                                    buttonText={jsonData.deleteBtnText}
                                    clickHandler={(e) => deleteAction(row)}
                                />
                            </td>
                        </tr>
                    );
                })}
                <tr>
                    <td colSpan="4">
                        <Button
                            buttonText={jsonData.addBtnText}
                            clickHandler={addAction}
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
const mapStateToProps = (state) => ({
    data: state.appReducer,
    jsonData: state.langReducer.jsonData
})

const mapDispatchToProps = (dispatch) => ({
    editAction: (row, keyName, value) => dispatch({ 
        type: 'edit' , 
        payload: editRowData(row, keyName, value)
    }),
    deleteAction: (row) => dispatch({ 
        type: 'delete' , 
        payload: deleteRow(row)
    }),
    addAction: () => dispatch({ 
        type: 'add'
    })
})

const editRowData = (row, keyName, value) => {

    return { 
            ...row,
            [keyName] : value,
            keyName
        };
}

const deleteRow = (row) => row;


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Table);