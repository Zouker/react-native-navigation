const arrName = ['Denis', 'Eugene', 'Kostya', 'Ira', 'Olya', 'Zhesha', 'Vika', 'Vasya', 'Lilya', 'Nadya']
const arrAge = [40, 39, 40, 39, 43, 33, 35, 30, 29, 34]

export type objType = {
    id: number
    name: string
    age: number
}

export const arr: Array<objType> = new Array(10).fill(null).map((el, index) => ({
    id: index + 1,
    name: arrName[index],
    age: arrAge[index]
}))