export const genTokenHeader = (token: string) => {
  return {
    authorization: `Bearer ${token}`,
  };
};

export const SUCCESS_STATUS = 10000;
