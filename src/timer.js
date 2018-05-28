const timer = {
  setTimeout,
  setInterval,
  clear,
};

function setInterval(fn, t = 0) {
  let flag = true 
  const s = performance.now();

  runInterval(s, s);

  function runInterval(e, s) {
    if (e - s >= t) {
      fn();
      s = e;
    }
    requestAnimationFrame((e) => {
      if (flag) {
        runInterval(e, s)
      }
    });
  }
  function clearFlag() {
    flag = false
  }
  return clearFlag
}

function setTimeout(fn, t = 0) {
  let flag = true
  const s = performance.now()

  runInterval(s, s)

  function runInterval(e, s) {
    if (e - s >= t) {
      fn()
    } else {
      requestAnimationFrame((e) => {
        if (flag) {
          runInterval(e, s)
        }
      })
    }
  }

  function clearFlag() {
    flag = false
  }
  return clearFlag
}

function clear(timer) {
  timer()
}

const t = timer.setInterval(() => {
  console.log("hello world", performance.now());
}, 5000);


