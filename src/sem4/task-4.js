Number.prototype.times = function (callback) {
  const n = Math.floor(this);
  for (let i = 0; i < n; i++) {
    callback(i);
  }
};

3..times(() => console.log("test"));