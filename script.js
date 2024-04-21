function homepageAnimation() {
	gsap.set(".rows", { scale: 3 });
	var tl = gsap.timeline({
		scrollTrigger: {
			trigger: ".home",
			start: "top top",
			end: "bottom bottom",
			scrub: 1,
		},
	});
	tl.to(
		".vdodiv",
		{
			"--clip": "0%",
			ease: Power2,
		},
		"same"
	);
	tl.to(
		".navbar",
		{
			opacity: 0,
			ease: Power2,
		},
		"same"
	);
	tl.to(
		".rows",
		{
			scale: 1,
			ease: Power2,
		},
		"same"
	);
	tl.to(
		".lft",
		{
			xPercent: -10,
			stagger: 0.03,
			ease: Power2,
		},
		"s2"
	);
	tl.to(
		".rgt",
		{
			xPercent: 10,
			stagger: 0.03,
			ease: Power2,
		},
		"s2"
	);
}

function realpageAnimation() {
	gsap.to(".slide", {
		scrollTrigger: {
			trigger: ".real",
			start: "top top",
			end: "bottom bottom",
			scrub: 1,
		},
		xPercent: -200,
		ease: Power4,
	});
}

function teamAnimation() {
	document.querySelectorAll(".listelem").forEach(function (elem) {
		elem.addEventListener("mousemove", function (details) {
			gsap.to(this.querySelector(".picture"), {
				opacity: 1,
				x: gsap.utils.mapRange(
					0,
					window.innerWidth,
					-200,
					200,
					details.clientX
				),
				ease: Power4,
				duration: 0.5,
			});
			
		});
		elem.addEventListener("mouseleave", function (details) {
			gsap.to(this.querySelector(".picture"), {
				opacity: 0,
				ease: Power4,
				duration: 0.5,
			});
			
		});
	});
}

function paraAnimation() {
	var clutter = "";

	// console.log(document.querySelector(".textpara").textContent.split(""));
	document
		.querySelector(".textpara")
		.textContent.split("")
		.forEach(function (e) {
			if (e === " ") clutter += `<span>&nbsp;</span>`;
			clutter += `<span>${e}</span>`;
		});

	document.querySelector(".textpara").innerHTML = clutter;

	gsap.set(".textpara span", { opacity: 0.1 });
	gsap.to(".textpara span", {
		scrollTrigger: {
			trigger: ".para",
			top: "top 60%",
			end: "bottom 90%",
			scrub: 0.2,
		},
		opacity: 1,
		stagger: 0.03,
		ease: Power4,
	});
}

function loco() {
	(function () {
		const locomotiveScroll = new LocomotiveScroll();
	})();
}

function capsulesAnimation() {
	gsap.to(".capsule:nth-child(2)", {
		scrollTrigger: {
			trigger: ".capsules",
			start: "top 60%",
			end: "bottom bottom",
			scrub: 1,
		},
		y: 0,
		ease: Power4,
	});
}

function bodyColorChange() {
	document.querySelectorAll(".section").forEach(function (e) {
		ScrollTrigger.create({
			trigger: e,
			start: "top 50%",
			end: "bottom 50%",
			onEnter: function () {
				document.body.setAttribute("theme", e.dataset.color);
			},
			onEnterBack: function () {
				document.body.setAttribute("theme", e.dataset.color);
			},
		});
	});
}

loco();
homepageAnimation();
realpageAnimation();
teamAnimation();
paraAnimation();
capsulesAnimation();
bodyColorChange();
