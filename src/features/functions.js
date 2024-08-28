export const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length);
};

export const getNumberElementsInArray = (array) => {
  let elements = 0;
  for (let i = 0; i < array.length; i++) {
    elements++;
  }
  return elements;
};

export const addSpacesToPhoneNumber = (phoneNumber) => {
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, "");

  return cleanPhoneNumber.replace(
    /(\d{2})(\d{3})(\d{3})(\d{3})/,
    "+$1 $2 $3 $4"
  );
};

export const checkIfSingular = (number) => {
  if (number === 1) {
    return "Review";
  }
  return "Reviews";
};

export const isLoggedUserOrCompany = (userOrCompanyString) => {
  const profileData = localStorage.getItem("profile");
  if (profileData){
      const parsedData = JSON.parse(profileData);
      return parsedData.profile === userOrCompanyString;
  }
  return false;
};

export const isSameIdInPagePageAndLogged = (id) => {
  const profileData = localStorage.getItem("profile");
  const parsedData = JSON.parse(profileData);
  return parsedData.id === id;
};

export const formatDate = (isoDate) => {
    return isoDate.split('T')[0];
};