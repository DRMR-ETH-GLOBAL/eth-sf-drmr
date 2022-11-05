
import TokenPlanAllocationItemEdit from './token-plan-allocation-item-edit'
import { Row, Col, Table, Form } from 'reactstrap'

const TokenPlanAllocationsEdit = ({ allocations }) => {
  return (
    <Row>
      <Col>
        <Table>
          <thead>
            <tr>
              <th>Group</th>
              <th>Amount</th>
              <th>Save</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              (allocations || []).map(allocationItem =>
                <TokenPlanAllocationItemEdit allocationItem={allocationItem} />
              )
            }
          </tbody>
        </Table>
      </Col>
    </Row>
  )
}

export default TokenPlanAllocationsEdit