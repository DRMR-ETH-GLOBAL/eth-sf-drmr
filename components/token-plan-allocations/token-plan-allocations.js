
import TokenPlanAllocationItem from './token-plan-allocation-item'
import { Row, Col, Table } from 'reactstrap'

const TokenPlanAllocations = ({ allocations }) => {
  return (
    <Row>
      <Col>
        <Table>
          <thead>
            <tr>
              <th>Group</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {
              (allocations || []).map(allocationItem =>
                <TokenPlanAllocationItem allocationItem={allocationItem} />
              )
            }
          </tbody>
        </Table>
      </Col>
    </Row>
  )
}

export default TokenPlanAllocations