import { TonConnectButton } from '@tonconnect/ui-react';
import './App.css';
import { useTonConnect } from './hooks/useTonConnect';
import '@twa-dev/sdk'

function App() {
  const { network } = useTonConnect();

  return (
    <>
      Поддержи Start gamers
      <TonConnectButton />
      <div>
        Сеть
        {network}
      </div>
    </>
  )
}

export default App
