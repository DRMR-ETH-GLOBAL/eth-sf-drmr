import { useRouter } from 'next/router'
import { useState } from 'react';
import { Row, Col, Button, Form, Label, Input } from 'reactstrap'
import TokenPlanAllocationsEdit from '../../../../components/token-plan-allocations/token-plan-allocations-edit'
import { supabase } from '../../../../supabase-client'

const Allocations = ({ tokenPlan }) => {
  const router = useRouter()
  const [group, setGroup] = useState('')
  const [amount, setAmount] = useState('')
  const { id } = router.query

  return (
    <div>
      <Row style={{ paddingTop: 50 }}>
        <Col>
          <h1>
            {tokenPlan.name} Allocations
          </h1>
        </Col>
      </Row>

      <TokenPlanAllocationsEdit allocations={tokenPlan.allocations} />

      <Row style={{ paddingTop: 50 }}>
        <Col>
          <h1>
            Add new allocation
          </h1>
        </Col>
      </Row>

      <Row style={{ paddingTop: 50 }}>
        <Col>
          <Form>
            <Col>
              <Label>Group
                <Input
                  name='group'
                  value={group}
                  placeholder='Group'
                  onChange={(evt) => setGroup(evt.target.value)}
                />
              </Label>
            </Col>

            <Col>
              <Label>Amount
                <Input
                  name='Amount'
                  value={amount}
                  placeholder='Amount'
                  onChange={(evt) => setAmount(evt.target.value)}
                />
              </Label>
            </Col>

            <Button color='primary' outline onClick={async (evt) => {
              const { data, error } = await supabase
                .from('token_plan_allocations')
                .insert({
                  token_plan_id: tokenPlan.id,
                  group: group,
                  amount: amount
                })

              router.push(`/token-plans/${tokenPlan.id}/allocations/edit`)
            }}>Create New Allocation
            </Button>
          </Form>
        </Col>
      </Row>

    </div>
  )
}

export const getServerSideProps = async (context) => {
  const { data: tokenPlan, error } = await supabase
    .from('token_plans')
    .select('*, allocations:token_plan_allocations(*)')
    .eq('id', context.query.id)
    .single()

  if (error) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      tokenPlan
    }
  }
}

export default Allocations