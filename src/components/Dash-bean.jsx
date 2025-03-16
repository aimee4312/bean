import "cally";
import Table from './baby-components/Table'
import { useEffect, useState } from "react";

const beanColumn = [
    { header: 'Order Date', accessor: 'date_ordered'},
    { header: 'Bean', accessor: 'bean_name'},
    { header: 'Roaster', accessor: 'roaster'},
    { header: 'Quantity', accessor: 'quantity'},
    { header: 'Cost/Unit', accessor: 'unit_cost'},
    { header: 'Total Cost', accessor: 'total_cost'},
]
export default function DashBean() {
    const [beanData, setBeanData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/api/beans')
        .then(res => res.json())
        .then(setBeanData);
    }, []);

    return (
        <div>
            {/* <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mx-8">
                <table className="table table-xs">
                    <thead >
                        <tr>
                            <th>Order Date</th>
                            <th>Bean</th>
                            <th>Roaster</th>
                            <th>Quantity</th>
                            <th>Cost/Unit</th>
                            <th>Total Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>02/12/2024</td>
                            <td>Bean name</td>
                            <td>Roaster name</td>
                            <td>21</td>
                            <td>$12</td>
                            <td>$123</td>
                        </tr>
                        <tr>
                            <td>02/12/2024</td>
                            <td>Bean name</td>
                            <td>Roaster name</td>
                            <td>21</td>
                            <td>$12</td>
                            <td>$123</td>
                        </tr>
                        <tr>
                            <td>02/12/2024</td>
                            <td>Bean name</td>
                            <td>Roaster name</td>
                            <td>21</td>
                            <td>$12</td>
                            <td>$123</td>
                        </tr>
                        <tr>
                            <td>02/12/2024</td>
                            <td>Bean name</td>
                            <td>Roaster name</td>
                            <td>21</td>
                            <td>$12</td>
                            <td>$123</td>
                        </tr>
                        <tr>
                            <td>02/12/2024</td>
                            <td>Bean name</td>
                            <td>Roaster name</td>
                            <td>21</td>
                            <td>$12</td>
                            <td>$123</td>
                        </tr>
                        <tr>
                            <td><input type="date" placeholder="Order Date" className="input input-primary" /></td>
                            <td><input type="text" placeholder="Bean" className="input input-primary" /></td>
                            <td><input type="text" placeholder="Roaster" className="input input-primary" /></td>
                            <td><input type="number" placeholder="Quantity" className="input input-primary" /></td>
                            <td><input type="number" placeholder="Cost/Unit" className="input input-primary" /></td>
                            <td><input type="number" placeholder="Total Cost" className="input input-primary" /></td>
                        </tr>
                    </tbody>
                </table>
            </div> */}
            <h2>Beans</h2>
            <Table columns={beanColumn} data={beanData} />
        </div>
    );
}