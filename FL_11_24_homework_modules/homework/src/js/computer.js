function computerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  const random = Math.floor(Math.random() * 3);
  return options[random];
}
export default computerChoice;
