let departmentDropDownDepart = document.querySelector('.departmentDepart')
let courseNumberDropDownDepart = document.querySelector('.courseNumberDepart')
let departmentDepart = []

let startBuilding;
let endBuilding;

const UCIBuildings = {

    // ARTS
    HH: 'Humanities Hall',
    ACT: 'Art Culture & Technology',
    ART: 'Art Studio',
    ARAN: 'Arts Annex',
    AITR: 'Arts Institution',
    CTT: 'Claire Trevor Theatre',
    CAC: 'Contemporary Arts Center',
    DRA: 'Drama Building',
    HICF: 'Humanities Interim Classrom Facility',
    MAB: 'Mesa Arts Building',
    MM: 'Music & Media Building',
    DS: 'Robert Cohen Theatre & Dance Studios',
    STU4: 'Studio Four',
    UAG: 'University Art Gallery',
    PSTU: 'William J. Gillespie Performance',
    WSH: 'Winifred Smith Hall',

    // BIOLOGICAL SCIENCES
    ALP: 'Anteater Learning Pavillion',
    BS3: 'Biological Sciences III',
    BIMO: 'Bison Modular',
    BRL: 'Bonney Research Laboratory',
    CNLM: 'Center for the Neurobiology of Learning & Memory Annex',
    MH: 'McGaugh Hall',
    QRL: 'Qureshey Research Laboratory',
    SH: 'Steinhaus Hall',

    // BUSINESS 
    SB1: 'Merage School of Business',
    SB2: 'Merage School of Business II',
    MPAA: 'Multipurpose Academic & Administrative Building',

    // EDUCATION
    EDUC: 'Education Building',

    // ENGINEERING
    ECT: 'Engineering & Computing Trailer',
    EG: 'Engineering Gateway',
    EH: 'Engineering Hall',
    ELH: 'Engineering Lecture Hall',
    ET: 'Engineering Tower',
    ISEB: 'Interdisciplinary Science and Engineering Building',
    ICF: 'Interim Classroom Facility',
    MDE: 'McDonnell Douglas Engineering Auditorium',
    REC: 'Rockwell Engineering Center',

    // HUMANITIES
    HG: 'Humanities Gateway',
    HH: 'Humanities Hall',
    HIB: 'Humanities Instructional Building',
    HIF: 'Humanities Interim Classroom Facility',
    KH: 'Krieger Hall',

    // INFORMATION & COMPUTER SCIENES
    DBH: 'Donald Bren Hall',
    ICS: 'Information & Computer Science',
    ICS2: 'Information & Computer Science 2',
    ISEB: 'Interdisciplinary Science and Engineering Building',
    ICF: 'Interim Classroom Facility',

    // LAW
    LAW: 'Law Building',
    MPAA: 'Multipurpose Academic & Administrative Building',

    // MEDICINE
    BLI: 'Beckman Laser Institute',
    GNRF: 'Gillespie Neuroscience Research Facility',
    HRH: 'Hweitt Research Hall',
    IH: 'Irvine Hall',
    MS1: 'Medical Surge I',
    MS2: 'Medical Surge II',

    // NURSING
    BH: 'Berk Hall',

    // PHARMACEUTICAL SCIENCES
    BIMO: 'Bison Modular',
    SH: 'Steinhaus Hall',

    // PHYSICAL SCIENCES
    CRH: 'Croul Hall',
    FRH: 'Frederick Reines Hall',
    MSTB: 'Multipurpose Science & Technology Building',
    NS1: 'Natural Sciences 1',
    PCB: 'Parkview Classroom Building',
    PSCB: 'Physical Sciences Classroom Building',
    PSLH: 'Physical Sciences Lecture Hall',
    RH: 'Rowland Hall',

    //PUBLIC HEALTH
    AIRB: 'Anteater Instruction & Research Building',

    //SOCIAL ECOLOGY
    SBSG: 'Social & Behavorial Sciences Gateway',
    SE: 'Social Ecology I',
    SE2: 'Social Ecology II',

    // SOCIAL SCIENCES
    SBSG: 'Social & Behavioral Sciences Gateway',
    SSH: 'Social Science Hall',
    SSL: 'Social Science Laboratory',
    SSLH: 'Social Science Lecture Hall',
    SSPA: 'Social Science Plaza A',
    SSPB: 'Social Science Plaza B',
    SST: 'Social Science Tower',
    SSTR: 'Social Science Trailer',
}


fetch(`https://api.peterportal.org/rest/v0/courses/all`)
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            let departmentOption = document.createElement('option');
            departmentOption.value = data[i].department;
            departmentOption.text = data[i].department;
            if (departmentDepart.includes(data[i].department) === false) {

                departmentDropDownDepart.append(departmentOption)
                departmentDepart.push(data[i].department)
            }
        }
    }
    )

departmentDropDownDepart.addEventListener('input', (e) => {
    courseNumberDropDownDepart.innerHTML = ''
    fetch(`https://api.peterportal.org/rest/v0/courses/all`)
        .then(res => res.json())
        .then(data => {
            for (course of data) {
                let courseNumberOption = document.createElement('option');
                if (course.department === departmentDropDownDepart.value) {
                    courseNumberOption.value = course['number'];
                    courseNumberOption.text = course['number'];
                    courseNumberDropDownDepart.append(courseNumberOption)
                }
            }
        })
})

let departmentDropDownArrival = document.querySelector('.departmentArrival')
let courseNumberDropDownArrival = document.querySelector('.courseNumberArrival')
let departmentArrival = []


fetch(`https://api.peterportal.org/rest/v0/courses/all`)
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            let departmentOption = document.createElement('option');
            departmentOption.value = data[i].department;
            departmentOption.text = data[i].department;
            if (departmentArrival.includes(data[i].department) === false) {

                departmentDropDownArrival.append(departmentOption)
                departmentArrival.push(data[i].department)
            }
        }
    }
    )

departmentDropDownArrival.addEventListener('input', (e) => {
    courseNumberDropDownArrival.innerHTML = ''
    fetch(`https://api.peterportal.org/rest/v0/courses/all`)
        .then(res => res.json())
        .then(data => {
            for (course of data) {
                let courseNumberOption = document.createElement('option');
                if (course.department === departmentDropDownArrival.value) {
                    courseNumberOption.value = course['number'];
                    courseNumberOption.text = course['number'];
                    courseNumberDropDownArrival.append(courseNumberOption)
                }
            }
        })
})

const form = document.querySelector('#formSubmit');

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    try {
        let departDepartment = departmentDropDownDepart.value;
        let departCourseNumber = courseNumberDropDownDepart.value;
        let arrivalDepartment = departmentDropDownArrival.value;
        let arrivalCourseNumber = courseNumberDropDownArrival.value;

        if (departDepartment === 'I&C SCI') {
            departDepartment = 'I%26C SCI'
        } else if (departDepartment === 'CRM/LAW') {
            departDepartment = 'CRM%2FLAW'
        } else if (departDepartment === arrivalDepartment && departCourseNumber === arrivalCourseNumber) {
            alert('These two classes are the same, try again!')
        }

        await fetch(`https://api.peterportal.org/rest/v0/schedule/soc?term=2024%20Winter&department=${departDepartment}&courseNumber=${departCourseNumber}`)
            .then(res => res.json())
            .then(data => {
                //console.log(data.schools[0].departments[0].courses[0].sections[0].meetings[0].bldg); // departure  Building
                startBuilding = data.schools[0].departments[0].courses[0].sections[0].meetings[0].bldg;

                let irvineSuffix = "Irvine CA"

                const buildingContentsStart = startBuilding.split(" ");
                const buildingContentsEnd = endBuilding.split(" ");


                // This grabs the first index: EX: SSL 1200 = SSL
                let specifiedBuildingStart = buildingContentsStart[0];
                let specifiedBuildingEnd = buildingContentsEnd[0];


                // Check for start buildings (DEPART)
                if (specifiedBuildingStart in UCIBuildings) {

                    startBuildingDestination = UCIBuildings[specifiedBuildingStart] + " " + irvineSuffix;

                    startBuldingDestination = startBuildingDestination.replace(/ /g, "%20");
                    //return startBuildingDestination;
                    console.log(startBuildingDestination)
                }


                // Check for end buildings (ARRIVAL)
                if (specifiedBuildingEnd in UCIBuildings) {

                    endBuildingDestination = UCIBuildings[specifiedBuildingEnd] + " " + irvineSuffix;

                    endBuldingDestination = endBuildingDestination.replace(/ /g, "%20");
                    //return endBuildingDestination;
                    console.log(endBuildingDestination)
                }
            }).catch(e => {
                alert(`${departDepartment} ${departCourseNumber} is not available, please try again`)
            })

        if (arrivalDepartment === 'I&C SCI') {

            arrivalDepartment = 'I%26C SCI'
            console.log(arrivalDepartment)
        } else if (arrivalDepartment === 'CRM/LAW') {
            arrivalDepartment = 'CRM%2FLAW'
        } else if (departDepartment === arrivalDepartment && departCourseNumber === arrivalCourseNumber) {
            alert('These two classes are the same, try again!')
        }


        await fetch(`https://api.peterportal.org/rest/v0/schedule/soc?term=2024%20Winter&department=${arrivalDepartment}&courseNumber=${arrivalCourseNumber}`)
            .then(res => res.json())
            .then(data => {
                //console.log(data.schools[0].departments[0].courses[0].sections[0].meetings[0].bldg); //// arrival  Building
                endBuilding = data.schools[0].departments[0].courses[0].sections[0].meetings[0].bldg;
            }).catch(e => {
                alert(`${arrivalDepartment} ${arrivalCourseNumber} is not available please try again!`)
            })

    } catch (error) {
        alert(`One of the courses you chose is not available, please select again.`)
    }
})





//GEOCODE add await
// fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=$(buildingDestination)&key=AIzaSyDr0z0C-1w5yxssvIn9_1gJHPmAnY_fMmI`);
// then(response => {
//     if (!response.ok) {
//         throw new Error('Network response error.');
//     }

//     return response.json();
// })

