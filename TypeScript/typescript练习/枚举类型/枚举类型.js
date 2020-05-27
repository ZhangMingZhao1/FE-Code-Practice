var Tristate;
(function (Tristate) {
  Tristate[(Tristate["False"] = 0)] = "False";
  Tristate[(Tristate["True"] = 1)] = "True";
  Tristate[(Tristate["Unknown"] = 2)] = "Unknown";
})(Tristate || (Tristate = {}));

// 变成了
Tristate = {
  0: "False",
  1: "True",
  2: "Unknown",
  False: 0,
  True: 1,
  Unknown: 2,
};
