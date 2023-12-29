async  function resolveprofileData(profileData){
  //function to fill dynamically the profille data fields based on '.././data/profile.json'
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

async function resolveSoftSkilss(profileData){

  const softSKills = document.getElementById('profile.skills1.softSkills')
  softSKills.innerHTML = profileData.skills1.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

async function resolveHardSkills(profileData){
  const hardSkills = document.getElementById('profile.skills1.hardSKills')
  hardSkills.innerHTML = profileData.skills1.hardSkills.map(skill => `<li><img  src="${skill.logo}" alt="" /></li>`).join(''); 
}

document.addEventListener('DOMContentLoaded', async function() {
  const profileData = await fetchProfileData();
  console.log(profileData);
  resolveprofileData(profileData);
  resolveSoftSkilss(profileData);
  resolveHardSkills(profileData);
});

 

