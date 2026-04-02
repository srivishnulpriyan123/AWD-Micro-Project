
const jobs = [
{
title:"Frontend Developer",
company:"Google",
salary:"₹12 LPA",
location:"Bangalore",
role:"Frontend"
},

{
title:"Backend Developer",
company:"Amazon",
salary:"₹10 LPA",
location:"Hyderabad",
role:"Backend"
},

{
title:"Full Stack Developer",
company:"Microsoft",
salary:"₹15 LPA",
location:"Chennai",
role:"Fullstack"
},

{
title:"Frontend Engineer",
company:"Infosys",
salary:"₹8 LPA",
location:"Pune",
role:"Frontend"
}

];

let savedJobs = [];

const jobList = document.getElementById("jobList");
const savedList = document.getElementById("savedJobs");

function displayJobs(list){

jobList.innerHTML="";

list.forEach((job,index)=>{

const card=document.createElement("div");
card.className="job-card";

card.innerHTML=`

<div class="logo"></div>

<div class="job-title">${job.title}</div>

<div class="company">${job.company}</div>

<div class="salary">${job.salary}</div>

<div class="location">${job.location}</div>

<button class="save-btn" onclick="saveJob(${index})">
Save Job
</button>

`;

jobList.appendChild(card);

});

}

function saveJob(index){

savedJobs.push(jobs[index]);

renderSaved();

}

function renderSaved(){

savedList.innerHTML="";

savedJobs.forEach(job=>{

const card=document.createElement("div");
card.className="job-card";

card.innerHTML=`

<div class="logo"></div>

<div class="job-title">${job.title}</div>

<div class="company">${job.company}</div>

<div class="salary">${job.salary}</div>

<div class="location">${job.location}</div>

`;

savedList.appendChild(card);

});

}

document.getElementById("search").addEventListener("input",filterJobs);

document.getElementById("companyFilter").addEventListener("change",filterJobs);

document.getElementById("roleFilter").addEventListener("change",filterJobs);

function filterJobs(){

const search=document.getElementById("search").value.toLowerCase();

const company=document.getElementById("companyFilter").value;

const role=document.getElementById("roleFilter").value;

const filtered=jobs.filter(job=>{

return (
(job.title.toLowerCase().includes(search) ||

job.company.toLowerCase().includes(search))

&&

(company==="all" || job.company===company)

&&

(role==="all" || job.role===role)

);

});

displayJobs(filtered);

}

displayJobs(jobs);