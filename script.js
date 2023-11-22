//your JS code here. If required.
function expand(panelNumber) {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => panel.classList.remove('active'));
    panels[panelNumber - 1].classList.add('active');
  }