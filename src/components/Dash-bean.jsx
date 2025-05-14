import { useEffect, useState } from "react";
import Table from './baby-components/Table';
import { beanColumn } from './baby-components/data/columnDefinitions';

export default function DashBean() {
    const [beanData, setBeanData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [newBean, setNewBean] = useState({
        date_ordered: '',
        bean_name: '',
        roaster: '',
        size: '',
        unit_cost: '',
        quantity: '',
    });
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        fetch('http://localhost:5001/api/beans')
            .then(res => res.json())
            .then(data => {
                const sorted = [...data].sort((a, b) => {
                    const roasterA = a.roaster?.toLowerCase() || '';
                    const roasterB = b.roaster?.toLowerCase() || '';
                    if (roasterA < roasterB) return -1;
                    if (roasterA > roasterB) return 1;

                    const nameA = a.bean_name?.toLowerCase() || '';
                    const nameB = b.bean_name?.toLowerCase() || '';
                    if (nameA < nameB) return -1;
                    if (nameA > nameB) return 1;
                    return 0;
                });

                setBeanData(sorted);
                setFilteredData(sorted);
            });
    }, []);


    const handleDateFilterChange = (event) => {
        const selectedDate = event.target.value;
        setSelectedDate(selectedDate);

        if (selectedDate === '') {
            setFilteredData(beanData);
        } else {
            const filtered = beanData.filter(bean => bean.date_ordered === selectedDate);
            const sortedFiltered = [...filtered].sort((a, b) => {
                const roasterA = a.roaster?.toLowerCase() || '';
                const roasterB = b.roaster?.toLowerCase() || '';
                if (roasterA < roasterB) return -1;
                if (roasterA > roasterB) return 1;

                const nameA = a.bean_name?.toLowerCase() || '';
                const nameB = b.bean_name?.toLowerCase() || '';
                return nameA.localeCompare(nameB);
            });

            setFilteredData(sortedFiltered);
            setFilteredData(filtered);
        }
    };

    const mostRecentDate = beanData.length > 0
        ? [...beanData].sort((a, b) => new Date(b.date_ordered) - new Date(a.date_ordered))[0]?.date_ordered
        : '';

    useEffect(() => {
        if (mostRecentDate) {
            setSelectedDate(mostRecentDate);
            setFilteredData(beanData.filter(bean => bean.date_ordered === mostRecentDate));
        }
    }, [beanData, mostRecentDate]);

    const handleAddBean = () => {
        fetch('http://localhost:5001/api/beans', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBean),
        })
            .then(res => {
                if (!res.ok) throw new Error('Failed to add bean');
                return res.json();
            })
            .then(added => {
                setBeanData(prev => [...prev, added.newBean]);
                setNewBean({
                    date_ordered: '',
                    bean_name: '',
                    roaster: '',
                    size: '',
                    unit_cost: '',
                    quantity: '',
                });
            })
            .catch(err => {
                console.error('Error posting new bean:', err);
                alert('Something went wrong adding the bean.');
            });
    };

    return (
        <div>
            <div className="mx-8 mb-4">
                <label htmlFor="date-filter" className="mr-2">Week of </label>
                <select
                    id="date-filter"
                    value={selectedDate}
                    onChange={handleDateFilterChange}
                    className="select select-bordered"
                >
                    <option value="">All Dates</option>
                    {[...new Set(beanData.map(bean => bean.date_ordered))].map((date) => (
                        <option key={date} value={date}>{date}</option>
                    ))}
                </select>
            </div>

            <Table
                columns={beanColumn}
                data={filteredData}
                newRow={newBean}
                onInputChange={setNewBean}
                onSubmitNew={handleAddBean}
            />
        </div>
    );
}
