function FinishScreen({ ponits, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (ponits / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🥈";
  if (percentage < 80) emoji = "🥉";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{ponits}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
