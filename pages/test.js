import { Input } from 'antd';
import { Col, Row } from 'antd';

export default function test() {
  return (
    <>
      <Row>
        <Col>
          <label className='title'>DAY</label>
          <Input placeholder="Basic usage" />
        </Col>
        <Col>
          <label className='title'>MONTH</label>
          <Input placeholder="Basic usage" />
        </Col>
        <Col>
          <label className='title'>YEAR</label>
          <Input placeholder="Basic usage" />
        </Col>
      </Row>
      <hr/>
      <h1><span>--</span>years</h1>
      <h1><span>--</span>months</h1>
      <h1><span>--</span>days</h1>
      
    </>
  )
}
