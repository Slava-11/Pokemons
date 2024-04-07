
export const api = async (URL: string) => {
  try {
    const res = await fetch(URL);
    const json = await res.json();
    console.log(json)
    return json;
  } catch (error) {
    console.log(error);
  }
};
