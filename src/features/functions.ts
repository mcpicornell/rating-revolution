export const getRandomIndex = (array: string[]) => {
    return Math.floor(Math.random() * array.length)
  }

export const getNumberElementsInArray = (array: any) => {
    let elements = 0;
    for (let i = 0; i < array.length; i++) {
        elements ++;
    }
    return elements;
}
