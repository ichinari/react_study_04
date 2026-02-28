export async function fetchBio(person: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // wait 1 second

  const bio = `This is a bio of ${person}`;
  return bio;
}
