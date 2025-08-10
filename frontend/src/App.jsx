import { ChatBot } from './components/ChatBot'
import './index.css'

export const App = () => {
  return (
    <ChatProvider>
      <ChatBot />
    </ChatProvider>
  )
}
