
const Table = ({netIncomes}) => {
    const mappedTable = netIncomes.map(item => {
        return (
        <tr key={item.brand}>
            <td >{item.brand}</td>
            <td>{item.income}</td>
        </tr>
        )
    })

    const incomes = netIncomes.map(item => item.income);

    let avgIncomeNum =  incomes.length;
    
    let incomesSum = incomes.reduce((a, b) => {
        return a + b;
    });
    
    let avgIncome = (incomesSum / avgIncomeNum).toFixed(2);
    

    return <>
        <table>
           <thead>
            <tr>
                <th>Marca</th>
                <th>Ingresos</th>
            </tr>
           </thead>
           <tbody>
                {mappedTable}
           </tbody>
        </table>

        <p>El promedio de ingreso neto entre todas las marcas es de: {avgIncome}</p>
    </>
}

export default Table;