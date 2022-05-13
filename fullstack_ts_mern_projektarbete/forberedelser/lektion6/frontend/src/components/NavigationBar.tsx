import React from 'react'
import styled from 'styled-components'
import { Link, Outlet } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import { useUserContext } from '../shared/global/provider/UserProvider'
import Profile from './Profile'

const NavigationBar = () => {
	const {authenticatedUser} = useUserContext()
	
	const displayUserIfAuthenticated = () => {
		return (authenticatedUser)
			? <LiRight><Profile/></LiRight>
			: <LiRight><Link to={ RoutingPath.signInView }>Sign In</Link></LiRight>
	}
	
	return (
		<>
			<nav>
				<Ul>
					<LiLeft><Link to={ RoutingPath.homeView }>Home</Link></LiLeft>
					<LiLeft><Link to={ RoutingPath.counterView }>Counter</Link></LiLeft>
					<LiLeft><Link to={ RoutingPath.somethingElseView }>Not found</Link></LiLeft>
					<LiLeft><Link to={ RoutingPath.axiosView }>AxiosView</Link></LiLeft>
					<LiLeft><Link to={ RoutingPath.usersView }>UsersView</Link></LiLeft>
					
					{ displayUserIfAuthenticated() }
				</Ul>
			</nav>
			<Outlet/>
		</>
	)
}

export default NavigationBar

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`

const LiLeft = styled.li`
  float: left;

  a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  a:hover {
    background-color: #111;
  }
`

const LiRight = styled.li`
  float: right;
  width: 200px;

  a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  a:hover {
    background-color: #111;
  }
`
