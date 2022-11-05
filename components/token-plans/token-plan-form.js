import { Button, Label, Input, Form, Col } from 'reactstrap'

export default function TokenPlanForm({
  name,
  onNameChange,
  description,
  onDescriptionChange,
  tokenName,
  onTokenNameChange,
  onSubmit
}) {
  return (
    <Form onSubmit={onSubmit}>
      <Col>
        <Label>Name
          <Input
            name='name'
            value={name}
            placeholder='Name'
            onChange={onNameChange}
          />
        </Label>
      </Col>

      <Col>
        <Label>Description
          <Input
            name='Description'
            value={description}
            placeholder='Description'
            onChange={onDescriptionChange}
          />
        </Label>
      </Col>

      <Col>
        <Label>Token Name
          <Input
            name='Token Name'
            value={tokenName}
            placeholder='Token Name'
            onChange={onTokenNameChange}
          />
        </Label>
      </Col>

      <Button type='submit'>Save Token Plan</Button>
    </Form>
  )
}