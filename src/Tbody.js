import React from 'react'

function Tbody(props) {
    const { start, index } = props;
    return (
        <tr className="text-center">
            <th>{start}</th>
            <td>*</td>
            <th>{index + 1}</th>
            <th>{parseInt(start) * (index + 1)}</th>
        </tr>
    )


}
export default Tbody