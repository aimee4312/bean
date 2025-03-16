import "cally";
export default function DashBean() {
    return (
        <div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mx-8">
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
                            {/* <td><button popoverTarget="cally-popover1" className="input input-border" id="cally1" style="anchorName:--cally1">
                                Order Date
                            </button>
                                <div popover id="cally-popover1" className="dropdown bg-base-100 rounded-box shadow-lg" style="positionAnchor:--cally1">
                                    <calendar-date class="cally" onchange={document.getElementById('cally1').innerText = this.value}>
                                        <svg aria-label="Previous" className="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
                                        <svg aria-label="Next" className="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
                                        <calendar-month></calendar-month>
                                    </calendar-date>
                                </div>
                            </td> */}
                            <td><input type="date" placeholder="Order Date" className="input input-primary" /></td>
                            <td><input type="text" placeholder="Bean" className="input input-primary" /></td>
                            <td><input type="text" placeholder="Roaster" className="input input-primary" /></td>
                            <td><input type="number" placeholder="Quantity" className="input input-primary" /></td>
                            <td><input type="number" placeholder="Cost/Unit" className="input input-primary" /></td>
                            <td><input type="number" placeholder="Total Cost" className="input input-primary" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}