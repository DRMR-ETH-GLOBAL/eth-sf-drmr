import { useRouter } from 'next/router'
import Link from 'next/link'
import { supabase } from '../../../supabase-client'
import { Button, Row, Col, Table } from 'reactstrap'
import TokenPlanAllocations from '../../../components/token-plan-allocations/token-plan-allocations'

export default function ViewTokenPlan({ tokenPlan }) {
  const router = useRouter()

  return (
    <div>
      <h1>Token Plan Details</h1>
      <Row>
        <Col>Name: {tokenPlan.name}</Col>
      </Row>

      <Row>
        <Col>Description: {tokenPlan.description}</Col>
      </Row>

      <Row>
        <Col>Token Name: {tokenPlan.token_name}</Col>
      </Row>

      <Row>
        <Col>
          <Button color='primary' outline href={`/token-plans/${tokenPlan.id}/edit`}>
            Edit Token Plan Details
          </Button>
        </Col>
      </Row>

      <hr></hr>

      <h3>Allocations</h3>

      <TokenPlanAllocations allocations={tokenPlan.allocations} />
      <Row>
        <Col>
          <Button color='primary' outline href={`/token-plans/${tokenPlan.id}/allocations/edit`}>
            Edit Allocations
          </Button>
        </Col>
      </Row>

      <div style={{ marginTop: 50 }}>

        <span> </span>
        <Button color='danger' outline onClick={async (evt) => {

          // First delete the allocations. This should probably be a cascading delete.
          // https://stackoverflow.com/questions/69251891/delete-associated-records-in-supabase
          await supabase
            .from('token_plan_allocations')
            .delete()
            .match({ token_plan_id: tokenPlan.id })

          await supabase
            .from('token_plans')
            .delete()
            .match({ id: tokenPlan.id })

          router.replace('/token-plans')
        }}>Delete Token Plan
        </Button>

      </div>
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
