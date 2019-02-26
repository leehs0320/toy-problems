Number.prototype.padLeft = function() {
  if (this < 10) {
    return "0" + String(this);
  } else {
    return String(this);
  }
};

Date.prototype.format = function() {
  var yyyy = this.getFullYear();
  var month = (this.getMonth() + 1).padLeft();
  var dd = this.getDate().padLeft();
  var HH = this.getHours().padLeft();
  var mm = this.getMinutes().padLeft();
  var ss = this.getSeconds().padLeft();

  var format = [yyyy, month, dd].join("-");
  return format;
};

var map = {
  "2018-11-06": "01",
  "2018-11-07": "02",
  "2018-11-08": "03",
  "2018-11-09": "04",

  "2018-11-13": "05",
  "2018-11-14": "06",
  "2018-11-15": "07",
  "2018-11-16": "08",

  "2018-11-20": "09",
  "2018-11-21": "10",
  "2018-11-22": "11",
  "2018-11-23": "12",

  "2018-11-27": "13",
  "2018-11-28": "14",
  "2018-11-29": "15",

  "2018-12-10": "16",
  "2018-12-11": "17",
  "2018-12-12": "18",
  "2018-12-13": "19",

  "2018-12-14": "20",

  "2019-02-26": "21",
  "2018-12-18": "22",
  "2018-12-19": "23",
  "2018-12-20": "24",
  "2018-12-21": "25",

  "2018-12-24": "26",
  "2018-12-26": "27",
  "2018-12-27": "28",
  "2018-12-28": "29",

  "2018-12-31": "30",
  "2019-01-02": "31",
  "2019-01-03": "32",
  "2019-01-04": "33",

  "2019-01-07": "34",
  "2019-01-08": "35",
  "2019-01-09": "36",
  "2019-01-10": "37",
  "2019-01-11": "38",

  "2019-01-14": "39",
  "2019-01-15": "40",
  "2019-01-16": "41",
  "2019-01-17": "42",
  "2019-01-18": "43",

  "2019-01-21": "44",
  "2019-01-22": "45"
};

var today = new Date();
today = today.format();
console.log(map[today]);
