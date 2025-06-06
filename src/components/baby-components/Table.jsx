const Table = ({ columns, data, newRow, onInputChange, onSubmitNew, onDeleteRow }) => {
    return (
        <div className="rounded-box border border-base-content/5 bg-base-100 mx-8 mb-8 text-lg">
            <table className="table table-xs">
                <thead>
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index}>{col.header}</th>
                        ))}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((col, colIndex) => {
                                const value = row[col.accessor];

                                if (col.accessor === 'unit_cost') {
                                    return <td key={colIndex}>${parseFloat(value).toFixed(2)}</td>;
                                }

                                return <td key={colIndex}>{value}</td>;
                            })}

                            <td>
                                <button
                                    className="btn btn-xs btn-error flex items-center justify-center"
                                    onClick={() => onDeleteRow(row._id)}
                                    title="Delete"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m2 0a2 2 0 00-2-2H9a2 2 0 00-2 2m3 0V4h4v3" />
                                    </svg>
                                </button>
                            </td>

                        </tr>
                    ))}
                    <tr className="bg-base-200">
                        {columns.map((col, colIndex) => {
                            const key = col.accessor;
                            const value = newRow[key];
                            if (key === 'date_ordered') {
                                return (
                                    <td key={colIndex}>
                                        <input
                                            type="date"
                                            className="input input-xs w-full"
                                            value={value}
                                            onChange={e => onInputChange(prev => ({ ...prev, [key]: e.target.value }))}
                                        />
                                    </td>
                                );
                            }
                            if (key === 'bean_name') {
                                return (
                                    <td key={colIndex}>
                                        <input
                                            type="text"
                                            className="input input-xs w-full"
                                            value={value}
                                            onChange={e => onInputChange(prev => ({ ...prev, [key]: e.target.value }))}
                                        />
                                    </td>
                                );
                            }
                            if (key === 'roaster') {
                                return (
                                    <td key={colIndex}>
                                        <div className="dropdown dropdown-bottom dropdown-center">
                                            <div tabIndex="0" role="button" className="btn m-1">{value || "Select Roaster"}</div>
                                            <ul tabIndex="0" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                                <li>
                                                    <a onClick={() => onInputChange(prev => ({ ...prev, roaster: 'Bird and Bear' }))}>Bird and Bear</a>
                                                </li>
                                                <li>
                                                    <a onClick={() => onInputChange(prev => ({ ...prev, roaster: 'Cosmic Dust' }))}>Cosmic Dust</a>
                                                </li>
                                                <li>
                                                    <a onClick={() => onInputChange(prev => ({ ...prev, roaster: 'Flower Child' }))}>Flower Child</a>
                                                </li>
                                                <li>
                                                    <a onClick={() => onInputChange(prev => ({ ...prev, roaster: 'Hydrangea' }))}>Hydrangea</a>
                                                </li>
                                                <li>
                                                    <a onClick={() => onInputChange(prev => ({ ...prev, roaster: 'Moonwake' }))}>Moonwake</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                );
                            }
                            if (key === 'size') {
                                return (
                                    <td key={colIndex}>
                                        <div className="dropdown dropdown-bottom dropdown-center">
                                            <div tabIndex="0" role="button" className="btn m-1">{value || "Select Size"}</div>
                                            <ul tabIndex="0" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                                <li>
                                                    <a onClick={() => onInputChange(prev => ({ ...prev, size: '4oz' }))}>4oz</a>
                                                </li>
                                                <li>
                                                    <a onClick={() => onInputChange(prev => ({ ...prev, size: '8oz' }))}>8oz</a>
                                                </li>
                                                <li>
                                                    <a onClick={() => onInputChange(prev => ({ ...prev, size: '250g' }))}>250g</a>
                                                </li>
                                                <li>
                                                    <a onClick={() => onInputChange(prev => ({ ...prev, size: '1lb' }))}>1lb</a>
                                                </li>
                                                <li>
                                                    <a onClick={() => onInputChange(prev => ({ ...prev, size: '5lb' }))}>5lb</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                );
                            }
                            if (key === 'quantity') {
                                return (
                                    <td key={colIndex}>
                                        <input
                                            type="text"
                                            className="input input-xs w-full"
                                            value={value}
                                            onChange={e => onInputChange(prev => ({ ...prev, [key]: e.target.value }))}
                                        />
                                    </td>
                                );
                            }
                            if (key === 'unit_cost') {
                                return (
                                    <td key={colIndex}>
                                        <input
                                            type="text"
                                            className="input input-xs w-full"
                                            value={value}
                                            onChange={e => onInputChange(prev => ({ ...prev, [key]: e.target.value }))}
                                        />
                                    </td>
                                );
                            }
                            // if (key === 'cost_per_lb') {
                            //     return (
                            //         <td key={colIndex}>
                            //             <input
                            //                 type="text"
                            //                 className="input input-xs w-full"
                            //                 value={value}
                            //                 onChange={e => onInputChange(prev => ({ ...prev, [key]: e.target.value }))}
                            //             />
                            //         </td>
                            //     );
                            // }
                            
                            return null;
                        })}
                        <td>
                            <button className="btn btn-xs btn-primary" onClick={onSubmitNew}>➕</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
