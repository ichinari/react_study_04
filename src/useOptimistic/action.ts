export const delaySetMessage = async (text: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return text;
};
