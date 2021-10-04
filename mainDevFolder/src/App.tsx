import React, { ReactText } from 'react'
import { Layout } from 'antd'
import Home from './views/HomePage'
import Booking_1 from './views/Booking_1'
import Booking_2 from './views/Booking_2'
import Booking_3 from './views/Booking_3'
import Booking_4 from './views/Booking_4'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footers from './components/Footer'
import About from './views/About'

const { Content, Header, Footer } = Layout

function App () {
  // const [greeting, setGreeting] = React.useState([])
  // ;(async () => {
  //   const reply = await fetch('http://localhost:3001/booking')
  //   const body = await reply.json()
  //   setGreeting(body)
  // })()
  return (
    <Layout style={{ backgroundColor: 'white' }}>
      <BrowserRouter>
        <Header
          style={{
            backgroundColor: 'white',
            position: 'fixed',
            width: '100vw',
            zIndex: 2
          }}
        >
          <NavBar />
        </Header>

        <Content style={{ backgroundImage: 'white' }}>
          <Switch>
            <Route component={Home} exact path='/'></Route>
            <Route component={About} path='/about'></Route>
            <Route component={Booking_1} exact path='/booking'></Route>
            <Route component={Booking_2} exact path='/booking/1'></Route>
            <Route component={Booking_3} exact path='/booking/2'></Route>
            <Route component={Booking_4} exact path='/booking/3'></Route>
          </Switch>
        </Content>
        <Footer
          style={{
            backgroundImage:
              'linear-gradient(-225deg, #D4FFEC 0%, #57F2CC 48%, #4596FB 100%)',
            marginTop: '12rem'
          }}
        >
          <Footers />
        </Footer>
      </BrowserRouter>
    </Layout>
  )
}

export default App
