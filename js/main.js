async  function resolveProfileData(profileData){
  //function to fill dynamically the profille data fields
  const photo = document.getElementById('profile.photo');
  photo.src = profileData.photo
  const name = document.getElementById('profile.name');
  name.innerText = profileData.name
  const phone = document.getElementById('profile.phone');
  phone.innerText = profileData.phone
  const job = document.getElementById('profile.job');
  job.innerText = profileData.job
  const email = document.getElementById('profile.email');
  email.innerText = profileData.email
}

async function resolveSoftSkilss(profiledata){

  const softSKills = document.getElementById('profile.softSkills')
  softSKills.innerText = profiledata.softSKills
  
}

(async () => {
  const profileData = await fetchProfileData();
  console.log(profileData);
  resolveProfileData(profileData);
})();
