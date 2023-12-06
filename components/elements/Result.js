export default function Result({
  rank,
  wpm,
  accuracy,
  typed,
  missed,
  problematicKeys,
}) {
  return (
    <>
      <div>{rank}</div>
      <div>{wpm}</div>
      <div>{accuracy}</div>
      <div>{typed}</div>
      <div>{missed}</div>
      <div>{problematicKeys}</div>
    </>
  );
}
