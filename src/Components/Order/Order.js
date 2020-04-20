import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { setCheckedOutItems } from '../../Redux/Actions'
import StripeCheckout from 'react-stripe-checkout'

const mapStateToProps = state => {
  return {
    checkedOutItems: state.checkedOutItems
  }
}

// This component shows the items user checked out from the cart.
class ConnectedOrder extends Component {
  onToken = (token, addresses) => {
    // TODO: Send the token information and any other
    // relevant information to your payment process
    // server, wait for the response, and update the UI
    // accordingly. How this is done is up to you. Using
    // XHR, fetch, or a GraphQL mutation is typical.
  }
  render () {
    let totalPrice = this.props.checkedOutItems.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity
    }, 0)

    return (
      <div style={{ padding: 10 }}>
        <div style={{ fontSize: 24, marginTop: 10 }}>รายการสินค้า</div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>สินค้า</TableCell>
              <TableCell>ราคา</TableCell>
              <TableCell>จำนวน</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.checkedOutItems.map((item, index) => {
              return (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>

        <div
          style={{
            color: '#504F5A',
            marginLeft: 5,
            marginTop: 50,
            fontSize: 22
          }}
        >
          ยอดรวม : {totalPrice} บาท
        </div>
        <Button
          color='secondary'
          variant='outlined'
          disabled={totalPrice === 0}
          onClick={() => {
            this.props.dispatch(setCheckedOutItems([]))
          }}
          style={{ margin: 5, marginTop: 30 }}
        >
          ละทิ้ง
        </Button>
        <div className='payment'>
          <StripeCheckout
            stripeKey='pk_test_ez08krnCey8Ibzx5byDVbGNZ00R2hD7ps4'
            token={this.onToken}
          />
        </div>
      </div>
    )
  }
}
const Order = withRouter(connect(mapStateToProps)(ConnectedOrder))

export default Order
