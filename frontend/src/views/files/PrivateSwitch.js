import { Card, CardHeader, CardTitle, CardBody, Input, Label } from 'reactstrap'

const PrivateSwitch = () => {
  return (
          <div className='form-check form-switch'>
            <Input type='switch' name='customSwitch' id='exampleCustomSwitch' />
            <Label for='exampleCustomSwitch' className='form-check-label'>
              Make these files private
            </Label>
          </div>
  )
}
export default PrivateSwitch