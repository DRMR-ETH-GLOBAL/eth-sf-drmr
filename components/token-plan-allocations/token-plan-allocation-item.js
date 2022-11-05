
const TokenPlanAllocationItem = ({ allocationItem }) => {

  return (
    <tr>
      <td>
        {allocationItem.group}
      </td>
      <td>
        {allocationItem.amount}
      </td>
    </tr>
  )
}

export default TokenPlanAllocationItem