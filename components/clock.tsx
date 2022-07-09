export default function Clock({ totalSeconds }: { totalSeconds: number }) {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  function format(number: number): string {
    return String(number).padStart(2, '0')
  }

  return (
    <div>
      {format(minutes)}
      :
      {format(seconds)}
    </ div>
  )
}
