import { Fetch } from '../components/hooks/Fetch'

export const Jokes = () => {
  const { showData, error, loading, getData } = Fetch(
    'https://v2.jokeapi.dev/joke/Any'
  )

  console.log(showData)

  if (error) console.log(error)
  return (
    <div className=' h-screen '>
      <div className='container flex flex-col justify-center items-center text-3xl h-full'>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className=' m-5'>
            <div>{showData && <>{showData?.joke} </>}</div>
            <div>
              {showData?.setup} {showData?.delivery}
            </div>
          </div>
        )}
        <div className='mt-10 '>
          <button
            onClick={getData}
            className='bg-slate-600 border rounded-lg p-2 hover:bg-slate-800 text-white'
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  )
}
