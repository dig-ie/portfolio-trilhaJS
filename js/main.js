async  function resolveProfileData(profileData){
  const photo = document.getElementById('profile.photo');
  photo.src = profileData.photo

}

(async () => {
  const profileData = await fetchProfileData();
  console.log(profileData);
  resolveProfileData(profileData);
})();
