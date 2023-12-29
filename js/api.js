async function fetchProfileData() {
  const url =
    "https://raw.githubusercontent.com/diegoDeBarros/portfolio-trilhaJS/main/data/profile.json?token=GHSAT0AAAAAACLXJMK73PJEWGQWLIBNSKOQZMODNZQ";
  const fetching = await fetch(url);
  return await fetching.json();
}
