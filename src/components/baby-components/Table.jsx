const Table = ({ columns, data, newRow, onInputChange, onSubmitNew }) => {
    return (
        <div className="rounded-box border border-base-content/5 bg-base-100 mx-8 mb-8">
            <table className="table table-xs">
                <thead>
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index}>{col.header}</th>
                        ))}
                        <th></th> {/* Submit column */}
                    </tr>
                </thead>
                <tbody>
                    {/* Existing data rows */}
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((col, colIndex) => (
                                <td key={colIndex}>{row[col.accessor]}</td>
                            ))}
                            <td></td>
                        </tr>
                    ))}

                    {/* Input row */}
                    <tr className="bg-base-200">
                        {columns.map((col, colIndex) => {
                            const key = col.accessor;
                            const value = newRow[key];

                            // Date input
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

                            // Bean name input
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

                            // Roaster dropdown
                            if (key === 'roaster') {
                                return (
                                    <td key={colIndex}>
                                        <div className="dropdown dropdown-bottom dropdown-center">
                                            <div tabindex="0" role="button" className="btn m-1">{value || "Select Roaster"}</div>
                                            <ul tabindex="0" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                                <li>
                                                    <a onClick={() => onInputChange(prev => ({ ...prev, roaster: 'Bird and Bear' }))}>Bird and Bear</a>
                                                </li>
                                                <li>
                                                    <a onClick={() => onInputChange(prev => ({ ...prev, roaster: 'Cosmic Dust' }))}>Cosmic Dust</a>
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

                            // Size dropdown
                            if (key === 'size') {
                                return (
                                    <td key={colIndex}>
                                        <div className="dropdown dropdown-bottom dropdown-center">
                                            <div tabindex="0" role="button" className="btn m-1">{value || "Select Size"}</div>
                                            <ul tabindex="0" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
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

                            // Quantity input
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

                            // Unit cost input
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

                            return null; // Default case for other columns
                        })}

                        {/* Submit button */}
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
