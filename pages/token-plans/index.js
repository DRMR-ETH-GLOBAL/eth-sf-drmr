import Link from 'next/link'
import { supabase } from '../../supabase-client'
import { Row, Col, Button } from 'reactstrap'

const TokenPlans = ({ tokenPlans }) => {
  return (
    <div>
      <h1>Token Plans</h1>
      <Row>
        <Col>
          <ul>
            {
              (tokenPlans || []).map(tokenPlan =>
                <li key={tokenPlan.id}>
                  <a href={`/token-plans/${tokenPlan.id}`}>{tokenPlan.name} - {tokenPlan.token_name}</a>
                </li>
              )
            }
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <Button color='primary' outline href='/token-plans/create'>Create New Token Plan</Button>
          </p>
        </Col>
      </Row>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const { data: tokenPlans, error } = await supabase.from('token_plans').select();

  if (error) {
    // Return 404 response.
    return {
      notFound: true,
    }
  }

  return {
    props: {
      tokenPlans,
    }
  }
}

export default TokenPlans