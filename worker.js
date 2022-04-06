var i = 0;

// function for count
function timedCount() {
// increment 1 each time
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount()",100);
}

timedCount();