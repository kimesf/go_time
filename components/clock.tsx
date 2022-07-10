export default function Clock({ time }: { time: number }) {
  const minutes = Math.floor(time / 60)
  const seconds = time % 60

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
