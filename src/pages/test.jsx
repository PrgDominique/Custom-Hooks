import { useEffect, useState } from 'react'

export const Test = () => {
  const [showData, setShowData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getData = async () => {
    setIsLoading(true)
    try {
      const result = await fetch('https://v2.jokeapi.dev/joke/Any')
      const response = await result.json()
      setShowData(response)
    } catch (error) {}
    setIsLoading(false)
  }
  console.log(showData)
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {showData?.joke} {showData?.setup} {showData?.delivery}
        </>
      )}
      test
    </div>
  )
}
