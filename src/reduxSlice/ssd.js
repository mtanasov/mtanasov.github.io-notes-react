export const arrNotes = []

// преобразование массива в JSON
export const toJSON = (arr, name) => {
   const array = arr
   const toJ = JSON.stringify(array)
   localStorage.setItem(name, toJ)
}

// преобразование из JSON в массив
export const toArray = (paramJson) => {
   const J = localStorage.getItem(paramJson)
   const arrNotes = JSON.parse(J)
   return arrNotes
}

// {
//    bookmark: "rgb(97, 180, 219)",
//    dateCN: "11.08.2022 22:10:05",
//    dateE: "2022-06-19",
//    id: "1660245005608",
//    placeE: "kazantip",
//    timeE: "07:00",
//    txtN: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et venenatis ante, vel facilisis ex. Proin mattis interdu"
// },
// {
//    bookmark: "hsl(29deg 89% 64%)",
//    dateCN: "12.08.2022 22:10:05",
//    dateE: "2022-08-19",
//    id: "234ewretrft58",
//    placeE: "kazantip",
//    timeE: "01:12",
//    txtN: "chiribim bom bom bom bom"
// },


