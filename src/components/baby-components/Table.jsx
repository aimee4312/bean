const Table = ({ columns, data }) => {
    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mx-8">
            <table className="table table-xs">
                <thead>
                    <tr>
                        {columns.map((col, index) => {
                            return <th key={index}>{col.header}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((col, colIndex) => (
                                <td key={colIndex}>{row[col.accessor]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
