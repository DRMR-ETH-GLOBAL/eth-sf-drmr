import { Button, Label, Input, Form } from 'reactstrap'

export default function TokenPlanAllocationForm({
  group,
  onGroupChange,
  amount,
  onAmountChange,
  onSubmit
}) {
  return (
    <Form onSubmit={onSubmit}>
      <Label>Group
        <Input
          name='Group'
          value={group}
          placeholder='Group'
          onChange={onGroupChange}
        />
      </Label>

      <Label>Amount
        <Input
          name='Amount'
          value={amount}
          placeholder='Amount'
          onChange={onAmountChange}
        />
      </Label>

      <Button type='submit'>Save Allocation</Button>
    </Form>
  )
}