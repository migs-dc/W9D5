import Clock from './clock'

function Root() {
  return(
    <div>

    </div>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById('main');
  ReachDOM.render(<Root />, main);
});