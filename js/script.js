// Toggle Class Active Navbar
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
	navbarNav.classList.toggle("active");
};

// Click Outside the Sidebar
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
	if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove("active");
	}
});

// Data Skill
const dataSkill = [
	{
		classSkill: "skill-row-left",
		classImg: "img-skill-left",
		src: "images/coding.png",
		alt: "img-coding",
		title: "Programming",
		desc: "I have knowledge of programming languages, such as HTML, PHP, and Javascript. Besides that, I have also used several frameworks in building a website such as Bootstrap, Laravel, and Vue JS.",
	},
	{
		classSkill: "skill-row-right",
		classImg: "img-skill-right",
		src: "images/sql.png",
		alt: "img-sql",
		title: "My SQL",
		desc: "I have knowledge of the MySQL Database Management System (DBMS), such as database structure analysis, basic SQL (Structured Query Language) commands, and knowledge related to MySQL database processing from several software.",
	},
	{
		classSkill: "skill-row-left",
		classImg: "img-skill-left",
		src: "images/office.png",
		alt: "img-office",
		title: "Microsoft Office",
		desc: "I have knowledge about how to process data using several software from Microsoft, such as Word, Excel, Powerpoint, and Visio. Apart from that, I also usually use web-based word processing services provided by Google, such as Google Docs and Spreadsheets.",
	},
];

// Looping Card Section
const skills = document.getElementById("skillData");
dataSkill.forEach((element) => {
	skillData.innerHTML += `
	<div class="${element.classSkill}" data-aos="zoom-in-right" data-aos-duration="800">
		<img class="${element.classImg}" src="${element.src}" alt="${element.alt}" />
		<div>
			<h3>${element.title}</h3>
			<p>${element.desc}</p>
		</div>
	</div>
	`;
});
