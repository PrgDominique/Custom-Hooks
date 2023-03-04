import { Fetch } from './components/hooks/Fetch'

function App() {
  const { showData, error, loading, getData } = Fetch('https://v2.jokeapi.dev/joke/Any')

  console.log(showData)


  if (error) console.log(error)
  return (
    <div className='flex flex-col justify-center items-center text-3xl h-screen'>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
        {showData?.joke}
          {showData?.setup} : {showData?.delivery}
        </>
      )}
      <div className="mt-10 ">

      <button onClick={getData} className='bg-slate-600 border rounded-lg p-2 hover:bg-slate-800 text-white'>Refresh</button>
      </div>
    </div>
  )
}

export default App
