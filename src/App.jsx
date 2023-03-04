import { Fetch } from './components/hooks/Fetch'

function App() {
  const { showData, error, loading } = Fetch('https://v2.jokeapi.dev/joke/Any')

  console.log(showData)
  if (loading) return <h1> Loading ... </h1>


  if (error) console.log(error)
  return (
    <div className='flex justify-center items-center text-3xl h-screen'>
      {showData ? (
        showData?.joke
      ) : (
        <>
          {showData?.setup} : {showData?.delivery}
        </>
      )}
    </div>
  )
}

export default App
