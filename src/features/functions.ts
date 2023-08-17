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

export const addSpacesToPhoneNumber = (phoneNumber: string) => {
    const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
  
    const formattedPhoneNumber = cleanPhoneNumber.replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, '+$1 $2 $3 $4');
  
    return formattedPhoneNumber;
  }

export  const checkIfSingular = (number: number) => {
    if (number === 1) {
      return "Review";
    }
    return "Reviews";
  };