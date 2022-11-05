import { Form, Input, Button } from 'reactstrap'
import { supabase } from '../../supabase-client'
import { useRouter } from 'next/router'

// TODO: Need to update this as forms can't be in table rows

const TokenPlanAllocationItemEdit = ({
  allocationItem,
  onGroupChange,
  onAmountChange,
  onSubmit
}) => {
  const router = useRouter()
  return (
    <tr>
      <td>
        <Input
          name='group'
          value={allocationItem.group}
          placeholder='Group'
          onChange={onGroupChange}
        />
      </td>
      <td>
        <Input
          name='amount'
          value={allocationItem.amount}
          placeholder='Amount'
          onChange={onAmountChange}
        />
      </td>
      <td>
        {/* Not yet working */}
        <Button type='submit'>Save</Button>
      </td>
      <td>
        <Button color='danger' outline onClick={async (evt) => {
          const { data, error } = await supabase
            .from('token_plan_allocations')
            .delete()
            .match({ id: allocationItem.id })

          router.replace(`/token-plans/${allocationItem.token_plan_id}/allocations/edit`)
        }}>Delete Allocation
        </Button>
      </td>
    </tr >
  )
}

export default TokenPlanAllocationItemEdit