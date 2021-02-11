import React from 'react'
import AppRouter from './routes'
import { ThemeProvider } from 'styled-components'
import throttle from 'lodash/throttle'

function getDeviceInfo(width, breakPoints) {
	const { lg, md, sm } = breakPoints

	const deviceInfo =
		width >= lg.breakPoint ? lg : width >= md.breakPoint ? md : sm
	return deviceInfo
}

function useResize(getDeviceInfo, setState, breakPoints) {
	React.useEffect(() => {
		let handleResize = throttle(() => {
			const width = window.outerWidth
			const deviceInfo = getDeviceInfo(width, breakPoints)
			setState({
				width,
				deviceInfo,
				isMobilePlatform: deviceInfo.category === 'sm',
			})
		}, 100)
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [breakPoints, getDeviceInfo, setState])
}

const DeviceInfoApp = (props) => {
	let [state, setState] = React.useState(() => {
		const width = window.outerWidth
		const deviceInfo = getDeviceInfo(width, props.breakPoints)
		return {
			width,
			deviceInfo,
			isMobilePlatform: deviceInfo.category === 'sm',
		}
	})
	useResize(getDeviceInfo, setState, props.breakPoints)

	const { width, deviceInfo, isMobilePlatform } = state

	return (
		<ThemeProvider theme={{ width, deviceInfo, isMobilePlatform }}>
				<AppRouter />
		</ThemeProvider>
	)
}
export default DeviceInfoApp
