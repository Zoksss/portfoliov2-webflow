const navOpen = document.querySelector("#navOpen");
const hamburger = document.querySelector("#hamburger");
const intro = document.querySelectorAll(".intro");

const revLoaderWTXParentLoader = document.querySelectorAll(".rev-loaderWTXParent-loader");


const transitionFire = document.querySelectorAll(".link-fire");
const homepage = document.querySelectorAll(".homepage");
const skillsBtn = document.querySelector(".skills-button");

const loading = document.querySelector(".loading");

let test = 1;

const projectSubtitle = document.querySelector("#projectSubtitle");
const projectTitle = document.querySelector("#projectTitle");
const projectDesc = document.querySelector("#projectDesc");
const projectImage = document.querySelector("#projectImage");
const projectColor = document.querySelector("#projectColor");

const emailbtn = document.querySelector("#emailbtn");
const letsTalkBtn = document.querySelector("#letsTalkBtn");
const workBtn = document.querySelector("#workBtn");
const contactBtn = document.querySelector("#contactBtn");
const homeBtn = document.querySelector("#homeBtn");

const footerWorkBtn = document.querySelector("#footerWorkBtn");
const footerResumeBtn = document.querySelector("#footerResumeBtn");
const footerAboutBtn = document.querySelector("#footerAboutBtn");

const liveWebsiteBtn = document.querySelector("#liveWebsiteBtn");
const githubBtn = document.querySelector("#githubBtn");
const videoDiv = document.querySelector("#videoDiv");


const loaderWTXParent = document.querySelector("#loaderWTXParent");

const url = " https://todoroviczoran.com"
// https://todoroviczoran.com 
// http://127.0.0.1:5500

const contact = document.querySelector("#contact");

let projectId = localStorage.getItem('projectId') || 0;

const setProjectId = (n) => {
    localStorage.setItem('projectId', n);

    loaderWTXParent.style.display = "block";
    loaderWTXParent.classList.add('rev-loader-wtx-loader-anim');
    setTimeout(() => {
        window.location.href = url + "project.html"
        loaderWTXParent.classList.remove('rev-loader-wtx-loader-anim');
    }, 1200)
}

let liveWebLink = "";
let githubLink = "";
let videoLink = "";

hamburger.addEventListener("click", () => {
    if (navOpen.style.display == "none") {
        navOpen.style.display = "flex";
        navOpen.classList.add("nav-open-anim");
    }
    else {
        navOpen.classList.remove("nav-open-anim");
        navOpen.classList.add("nav-close-anim");
        setTimeout(() => {
            navOpen.style.display = "none";
            navOpen.classList.remove("nav-close-anim");
        }, 800);
    }
});

const setProject = () => {
    projectId = localStorage.getItem('projectId') || 0;
    let currProjectObj = projects[projectId];
    console.log(projects);
    console.log(currProjectObj);
    projectDesc.innerHTML = currProjectObj.description;
    projectImage.src = currProjectObj.img;
    projectSubtitle.innerHTML = currProjectObj.subtitle;
    if (projectSubtitle.innerHTML == "[ Webflow Project ]") projectSubtitle.style.color = "#e160f5"
    else if (projectSubtitle.innerHTML == "[ React Project ]") projectSubtitle.style.color = "#007798"
    projectTitle.innerHTML = currProjectObj.name;
    projectColor.style.background = currProjectObj.color;
    liveWebLink = currProjectObj.website;
    githubLink = currProjectObj.github;
   // videoLink = currProjectObj.video;
}


revLoaderWTXParentLoader.forEach(revLoaderWTXParentLoaderEl => {
    revLoaderWTXParentLoaderEl.addEventListener("click", () => {
        console.log("test")
        loaderWTXParent.style.display = "block";
        loaderWTXParent.classList.add('rev-loader-wtx-loader-anim');
        setTimeout(() => {
            window.location.href = url
            loaderWTXParent.classList.remove('rev-loader-wtx-loader-anim');
        }, 1200)
    })
})



liveWebsiteBtn && liveWebsiteBtn.addEventListener("click", () => {
    window.open(
        liveWebLink,
        "_blank"
    )
})

githubBtn && githubBtn.addEventListener("click", () => {
    window.open(
        githubLink,
        "_blank"
    )
})
/*


videoDiv && videoDiv.addEventListener("click", () => {
    window.open(
        videoLink,
        "_blank"
    )
})


footerWorkBtn && footerWorkBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 700,
        left: 0,
        behavior: 'smooth'
    });
});

letsTalkBtn && letsTalkBtn.addEventListener("click", () => {
    window.scroll({
        top: contact.getBoundingClientRect().top - 200,
        left: 0,
        behavior: 'smooth'
    });
})



workBtn && workBtn.addEventListener("click", () => {
    if (document.URL.includes("index.html")) {
        navOpen.classList.remove("nav-open-anim");
        navOpen.classList.add("nav-close-anim");
        setTimeout(() => {
            navOpen.style.display = "none";
            navOpen.classList.remove("nav-close-anim");

            window.scroll({
                top: document.querySelector(".work-section").getBoundingClientRect().top - 1000,
                left: 0,
                behavior: 'smooth'
            });
        }, 500);
    } else {
        window.localStorage.setItem("scrollto", "work");
        navOpen.classList.remove("nav-open-anim");
        navOpen.classList.add("nav-close-anim");
        console.log("test");
        homepage[0].click();
    }
})



homeBtn && homeBtn.addEventListener("click", () => {
    navOpen.classList.remove("nav-open-anim");
    navOpen.classList.add("nav-close-anim");
});



/*
transitionFire.forEach(transitionEelemnt => {
    transitionEelemnt.addEventListener("click", () => {
        intro.forEach((introEl) => {
            introEl.classList.add('intro-transition');
            introEl.children[0].classList.add("intro-zt-transition");
        })
        setTimeout(() => {
            window.location.href = url + "/project.html"
            intro.forEach((introEl) => {
                introEl.classList.remove("intro-transition");
                introEl.children[0].classList.remove("intro-zt-transition");
            });
        }, 950)
    })
})


/*

contactBtn && contactBtn.addEventListener("click", () => {
    if (document.URL.includes("index.html")) {
        navOpen.classList.remove("nav-open-anim");
        navOpen.classList.add("nav-close-anim");
        setTimeout(() => {
            navOpen.style.display = "none";
            navOpen.classList.remove("nav-close-anim");

            window.scroll({
                top: document.querySelector("#contact").getBoundingClientRect().top - 200,
                left: 0,
                behavior: 'smooth'
            });
        }, 500);
    } else {
        window.localStorage.setItem("scrollto", "contact");
        navOpen.classList.remove("nav-open-anim");
        navOpen.classList.add("nav-close-anim");
        console.log("test");
        homepage[0].click();
    }
})

homepage.forEach((homeBtn) => {
    homeBtn.addEventListener("click", () => {
        intro.forEach((introEl) => {
            introEl.classList.add('intro-transition');
            introEl.children[0].classList.add("intro-zt-transition");
        })
        setTimeout(() => {
            window.location.href = url
            intro.forEach((introEl) => {
                introEl.classList.remove("intro-transition");
                introEl.children[0].classList.remove("intro-zt-transition");
            });
        }, 950)
    })
});

/*

skillsBtn && skillsBtn.addEventListener("click", () => {
    intro.forEach((introEl) => {
        introEl.classList.add('intro-transition');
        introEl.children[0].classList.add("intro-zt-transition");
    })
    setTimeout(() => {
        window.location.href = url + "/skills.html"
        intro.forEach((introEl) => {
            introEl.classList.remove("intro-transition");
            introEl.children[0].classList.remove("intro-zt-transition");
        });
    }, 950)
})

/*

const setProject = () => {
    let currProjectObj = projects[projectId];
    console.log(projects);
    console.log(currProjectObj);
    projectDesc.innerHTML = currProjectObj.description;
    projectImage.src = currProjectObj.img;
    projectSubtitle.innerHTML = currProjectObj.subtitle;
    projectTitle.innerHTML = currProjectObj.name;
    liveWebLink = currProjectObj.website;
    githubLink = currProjectObj.github;
    videoLink = currProjectObj.video;
}

/*
document.addEventListener('mousemove', function (e) {
    const circle = document.querySelector(".header-profile-image");
    //const circle2 = document.querySelector(".work-work-image");

    const cursor = document.querySelector(".cursor-outer");
    circle.style.left = e.clientX + 20 + "px";
    circle.style.top = e.clientY + 50 + "px";

    
    let h = document.documentElement, 
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';

    let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;


   // circle2.style.left = e.clientX + 100 + "px";
    //circle2.style.top = e.clientY + percent*16 + "px";

    cursor.style.left = e.clientX - 20 + "px";
    cursor.style.top = e.clientY - 20 + "px";


    cursor.style.mixBlendMode = "difference"
    if(document.elementFromPoint(e.clientX, e.clientY) && document.elementFromPoint(e.clientX, e.clientY).innerHTML === "Zoran Todorović,"){
        circle.style.display = "flex";
        cursor.style.backgroundColor = "#fff"
        cursor.style.transform = "scale(1.4)"
    }
    else if(document.elementFromPoint(e.clientX, e.clientY) && document.elementFromPoint(e.clientX, e.clientY).innerHTML === "Creations"){
       // circle2.style.display = "flex";
        cursor.style.backgroundColor = "#fff"
        cursor.style.transform = "scale(1.4)"
    }

    else{
        circle.style.display = "none";
       // circle2.style.display = "none";
        cursor.style.backgroundColor = "transparent"
        cursor.style.transform = "scale(1)"

    }
});

*/
