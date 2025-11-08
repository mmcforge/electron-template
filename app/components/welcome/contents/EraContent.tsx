import ContentStep from '../ContentStep'
import CodeWindowIcon from '../icons/CodeWindowIcon'
import FanIcon from '../icons/FanIcon'
import ColorSchemeIcon from '../icons/ColorSchemeIcon'
import AsterikIcon from '../icons/AsterikIcon'
import { useConveyor } from '@/app/hooks/use-conveyor'
import { useEffect, useState } from 'react'

const EraContent = () => {
  const { version } = useConveyor('app')
  const [appVersion, setAppVersion] = useState('')

  useEffect(() => {
    const fetchVersion = async () => {
      const appVersion = await version()
      setAppVersion(appVersion)
    }
    fetchVersion()
  }, [version])

  return (
    <div>
      <h2 className="flex items-center gap-4">
        MMC Forge Electron App
        <div className="p-1 rounded-md bg-primary/10">
          <img src="res://icons/era.svg" className="w-4 h-4" />
        </div>
      </h2>
      <p>
        Welcome to MMC Forge's Electron App (v{appVersion})! A modern desktop application built with the latest web technologies for cross-platform compatibility.
      </p>
      <p>
        This application is built with Electron, React, Vite, TypeScript, Shadcn UI, and Tailwind CSS to provide a cutting-edge user experience with modern features and best practices.
      </p>

      <div className="welcome-content-steps">
        <ContentStep
          title="Custom Window Titlebar & Menus"
          description="Customize the look and feel of the application window"
          icon={CodeWindowIcon}
        />

        <ContentStep
          title="Lightning Fast HMR"
          description="Hot Module Replacement that stays fast regardless of app size"
          icon={FanIcon}
        />

        <ContentStep
          title="Dark & Light Mode"
          description="Switch between dark and light mode with a click of a button"
          icon={ColorSchemeIcon}
        />

        <ContentStep
          title="IPC Communication Handlers"
          description="API handlers for communication between main and renderer processes"
          icon={AsterikIcon}
        />
      </div>

      <p className="learn-more">
        Learn more about this project at{' '}
        <a href="https://github.com/mmcforge/electron-template" target="_blank" rel="noreferrer">
          MMC Forge GitHub
        </a>
        {' | '}
        <a href="https://github.com/guasam/electron-react-app" target="_blank" rel="noreferrer">
          Original by Guasam
        </a>
      </p>
    </div>
  )
}

export default EraContent
