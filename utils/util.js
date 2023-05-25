function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const lightBlue = {
  0: '#E1F5FE',
  100: '#B3E5FC',
  200: '#81D4FA',
  300: '#4FC3F7',
  400: '#29B6F6',
  500: '#03A9F4',
  600: '#039BE5',
  700: '#0288D1',
  800: '#0277BD',
  900: '#01579B',
}

const generateList = (childCount) => {
  const ans = []
  for (let i = 0; i < childCount; i++) {
    ans.push({
      id: i,
      color: lightBlue[`${100 * (i % 9)}`],
    })
  }
  return ans
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

const generateGridList = (childCount, columns) => {
  const ans = []
  for (let i = 0; i < childCount; i++) {
    ans.push({
      id: i,
      sub: getRandomInt(columns) + 1,
    })
  }
  return ans
}

module.exports = {
  formatTime: formatTime,
  generateGridList: generateGridList,
  generateList: generateList,
  lightBlue: lightBlue
}
