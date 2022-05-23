

const TechTable = ({ data, actions }) => {

    console.log(data)
    console.log(actions)

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Technology Name</th>
                        <th>Technology Descriptions</th>
                        <th>Options</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.map(item =>
                            <tr key={item.id}>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.descriptions}
                                </td>
                                <td>
                                    <button
                                        onClick={(e) => actions.RemoveTech(e, item.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
    )
}


export default TechTable;