import React from 'react'
import './Profile.css'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import RoutingPath from '../routes/RoutingPath'
import { useUserContext } from '../shared/global/provider/UserProvider'

const Profile = () => {
	const navigate = useNavigate()
	const {authenticatedUser, setAuthenticatedUser} = useUserContext()
	const imgUrl = 'https://thispersondoesnotexist.com/image'
	
	const logout = () => {
		localStorage.removeItem('username')
		setAuthenticatedUser('')
		navigate(RoutingPath.homeView)
	}
	
	return (
		<ProfileWrapper className='profileWrapper'>
			<Img src={ imgUrl }/>
			<SpanUserName>{ authenticatedUser }</SpanUserName>
			
			<div className='profileDropdown'>
				<Span onClick={ () => navigate(RoutingPath.settingsView) }>Settings</Span>
				<Span onClick={ () => navigate(RoutingPath.profileView) }>Profile</Span>
				<hr/>
				<Span onClick={ () => logout() }>Logout</Span>
			</div>
		</ProfileWrapper>
	)
}

export default Profile

const ProfileWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 64px;
`

const Img = styled.img`
  align-self: center;
  width: 50px;
  border-radius: 50%;
`

const Span = styled.span`
  display: block;
  align-self: center;
  cursor: pointer;
  padding: 5px 10px;
`

const SpanUserName = styled.span`
  display: block;
  align-self: center;
  cursor: pointer;
  padding: 5px 10px;
  color: yellowgreen;
`
