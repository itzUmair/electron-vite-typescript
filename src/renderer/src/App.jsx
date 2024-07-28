function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  const customIpcHandle = () => window.electron.ipcRenderer.send('umair')

  return (
    <>
      <div>
        <a className="bg-orange-300 px-2 py-4" target="_blank" rel="noreferrer" onClick={ipcHandle}>
          Send IPC
        </a>
      </div>
      <div>
        <a target="_blank" rel="noreferrer" onClick={customIpcHandle}>
          Send IPC custom
        </a>
      </div>
    </>
  )
}

export default App
