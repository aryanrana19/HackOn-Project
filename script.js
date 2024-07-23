function startDuel(){
  document.getElementById("navbar").classList.add("hide-navbar")
  document.querySelector('.p1-area').classList.add('enlarged')
  const p2Area = document.querySelector('.p2-area')
  p2Area.parentNode.removeChild(p2Area)
  document.getElementById("start-card").classList.add("hide-card")
  document.querySelector(".player button").style.display = 'block'

    // Create counter element
    const counter = document.createElement('div');
    counter.className = 'counter';
    counter.id = 'counter';
    counter.textContent = '0'; // Initial counter value
    document.querySelector('.landing-body').appendChild(counter);

    // Start counter
    let count = 0;
    const interval = setInterval(() => {
        count++;
        counter.textContent = count;
        if (count === 0) {
            clearInterval(interval);
        }
    }, 1000);

}

