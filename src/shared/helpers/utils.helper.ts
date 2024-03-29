export const parseJson = (json: string): Record<string, unknown> | null => {
  try {
    return JSON.parse(json);
  } catch (error) {
    console.error('error', error);
    return null;
  }
};
export const raceTimeOut = async (
  callback: Promise<any>,
  callbackTimeOut: Promise<any>,
  timeout: number,
): Promise<any> => {
  const callTimeoutFunc = new Promise((resolve) => {
    setTimeout(() => {
      resolve(callbackTimeOut);
    }, timeout);
  });
  return Promise.race([callback, callTimeoutFunc]);
};
export const sleep = async (time: number): Promise<boolean> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(true);
    }, time),
  );
};
