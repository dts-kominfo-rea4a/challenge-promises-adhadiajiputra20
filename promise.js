const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
// const promiseOutput = null
const promiseOutput = async (param) => {
  let data1 = await promiseTheaterIXX()
  let data2 = await promiseTheaterVGC()
  let alldata = await data1.concat(data2)
  let filtered = alldata.filter(item => item.hasil == param)
  return filtered.length
}

module.exports = {
  promiseOutput,
};
