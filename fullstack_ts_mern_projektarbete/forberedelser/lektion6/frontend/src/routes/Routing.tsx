import React from 'react'
import { Route } from 'react-router'
import { BrowserRouter, Navigate, Routes } from 'react-router-dom'
import AxiosView from '../view/AxiosView'
import CounterView from '../view/CounterView'
import HomeView from '../view/HomeView'
import { PageNotFoundView } from '../view/PageNotFoundView'
import ProfileView from '../view/ProfileView'
import SettingsView from '../view/SettingsView'
import { SignInView } from '../view/SignInView'
import UsersView from '../view/UsersView'
import RoutingPath from './RoutingPath'

export const Routing = (props: { children?: React.ReactChild }) => {
	
	return (
		<BrowserRouter>
			{ props.children }
			<Routes>
				<Route path={ RoutingPath.wildCardView } element={ <Navigate to={ RoutingPath.notFoundView }/> }/>
				<Route path={ RoutingPath.homeView } element={ <HomeView/> }/>
				<Route path={ RoutingPath.counterView } element={ <CounterView/> }/>
				<Route path={ RoutingPath.notFoundView } element={ <PageNotFoundView/> }/>
				<Route path={ RoutingPath.signInView } element={ <SignInView/> }/>
				<Route path={ RoutingPath.settingsView } element={ <SettingsView/> }/>
				<Route path={ RoutingPath.profileView } element={ <ProfileView/> }/>
				<Route path={ RoutingPath.axiosView } element={ <AxiosView/> }/>
				<Route path={ RoutingPath.usersView } element={ <UsersView/> }/>
			</Routes>
		</BrowserRouter>
	)
}
