import React, { Component,useContext } from 'react'
import { AppContainer } from './AppStyles'
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'
import { withTheme } from 'styled-components'
import CreateBlog from './components/CreateBlog'
import LandingPage from './components/LandingPage'
import {UserContext} from './contexts/userContexts'
const AppRouter = function(props) {


		const logged_in = useContext(UserContext)
		console.log({logged_in})

        const { theme } = props
		const { deviceInfo } = theme
        const { category } = deviceInfo
        const isMobilePlatform = category === 'sm'

        return (
            <AppContainer>
                <Router>
						<Switch>
							<Route
								exact
								path="/"
								render={() => {
									return (
										<LandingPage isMobilePlatform={isMobilePlatform} {...props}/>
										//  <JobList/>
									)
								}}
							/>
							<Route
								exact
								path="/create-new"
								render={() => {
									return (
										  logged_in?
										  <CreateBlog isMobilePlatform={isMobilePlatform} {...props}/>
										  :
										  <LandingPage/>
										//  <JobList/>
									)
								}}
							/>
                        </Switch>
                </Router>
            </AppContainer>
        )
    
}

export default withTheme(AppRouter)
