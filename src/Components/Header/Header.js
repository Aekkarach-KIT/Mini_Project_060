import React, { Component } from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import './Header.css'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Badge from '@material-ui/core/Badge'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { showCartDlg, toggleMenu } from '../../Redux/Actions'
import { categories } from '../../Data'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'


const mapStateToProps = state => {
  return {
    nrOfItemsInCard: state.cartItems.length
  }
}

const categoryOptions = categories.map(x => {
  return (
    <MenuItem key={x.name} value={x.name}>
      {x.name}
    </MenuItem>
  )
})

class ConnectedHeader extends Component {
  state = {
    searchTerm: '',
    anchorEl: null,
    categoryFilterValue: categories[0].name
  }

  render () {
    return (
      <AppBar
        position='static'
        style={{ backgroundColor: '#12c2e9', padding: 10 }}
      >
        <Toolbar>
          <div className='left-part'>
            <IconButton
              onClick={() => {
                this.props.dispatch(toggleMenu())
              }}
            >
              <MenuIcon size='medium' />
            </IconButton>
            <div>PSU HARDWARE ONLINE</div>

            <TextField
              label='ค้นหาสินค้า'
              value={this.state.searchTerm}
              onChange={e => {
                this.setState({ searchTerm: e.target.value })
              }}
              style={{ marginLeft: 30, width: 250, marginBottom: 15 }}
            />

            <Select
              style={{ maxWidth: 200, marginLeft: 20 }}
              value={this.state.categoryFilterValue}
              MenuProps={{
                style: {
                  maxHeight: 500
                }
              }}
              onChange={e => {
                this.setState({ categoryFilterValue: e.target.value })
              }}
            >
              {categoryOptions}
            </Select>

            <Button
              style={{ marginLeft: 20 }}
              variant='outlined'
              color='primary'
              onClick={() => {
                this.props.history.push(
                  '/?category=' +
                    this.state.categoryFilterValue +
                    '&term=' +
                    this.state.searchTerm
                )
              }}
            >
              {' '}
              ค้นหา
            </Button>
          </div>
 
          <div>
            <p>Create by Aekkarach Kitkanna 6035512060</p>
          </div>
          <div className='right-part'>
            <Button
              variant='outlined'
              style={{ marginRight: 20 }}
              color='primary'
              onClick={() => {
                this.props.history.push('/login')
              }}
            >
              ลงชื่อเข้าใช้
            </Button>
            <IconButton
              aria-label='Cart'
              onClick={() => {
                this.props.dispatch(showCartDlg(true))
              }}
            >
              <Badge badgeContent={this.props.nrOfItemsInCard} color='primary'>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

const Header = withRouter(connect(mapStateToProps)(ConnectedHeader))
export default Header
