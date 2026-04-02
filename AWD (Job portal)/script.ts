
interface Job {
title: string
company: string
salary: string
location: string
role: string
}

const jobs: Job[] = [

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

]

let savedJobs: Job[] = []

const jobList = document.getElementById("jobList") as HTMLElement
const savedList = document.getElementById("savedJobs") as HTMLElement

function displayJobs(list: Job[]): void {

jobList.innerHTML = ""

list.forEach((job, index) => {

const card = document.createElement("div")
card.className = "job-card"

card.innerHTML = `
<div class="logo"></div>
<div class="job-title">${job.title}</div>
<div class="company">${job.company}</div>
<div class="salary">${job.salary}</div>
<div class="location">${job.location}</div>
<button class="save-btn" onclick="saveJob(${index})">Save Job</button>
`

jobList.appendChild(card)

})

}

function saveJob(index:number):void{

savedJobs.push(jobs[index])
renderSaved()

}

function renderSaved():void{

savedList.innerHTML=""

savedJobs.forEach(job=>{

const card=document.createElement("div")

card.className="job-card"

card.innerHTML=`

<div class="logo"></div>
<div class="job-title">${job.title}</div>
<div class="company">${job.company}</div>
<div class="salary">${job.salary}</div>
<div class="location">${job.location}</div>

`

savedList.appendChild(card)

})

}

const searchInput = document.getElementById("search") as HTMLInputElement
const companyFilter = document.getElementById("companyFilter") as HTMLSelectElement
const roleFilter = document.getElementById("roleFilter") as HTMLSelectElement

searchInput.addEventListener("input",filterJobs)
companyFilter.addEventListener("change",filterJobs)
roleFilter.addEventListener("change",filterJobs)

function filterJobs():void{

const search = searchInput.value.toLowerCase()
const company = companyFilter.value
const role = roleFilter.value

const filtered = jobs.filter(job =>

(job.title.toLowerCase().includes(search) ||
job.company.toLowerCase().includes(search))

&& (company==="all" || job.company===company)

&& (role==="all" || job.role===role)

)

displayJobs(filtered)

}

displayJobs(jobs)