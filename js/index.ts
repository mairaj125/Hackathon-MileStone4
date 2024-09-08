//Form Submit
document.getElementById("form")?.addEventListener('submit', function (event) {
  event.preventDefault();

  let fullName = document.getElementById("fullname") as HTMLInputElement
  let address = document.getElementById("address") as HTMLInputElement
  let email = document.getElementById("email") as HTMLInputElement
  let phoneNo = document.getElementById("phoneNo") as HTMLInputElement
  let professionalSummary = document.getElementById("professionalSummary") as HTMLInputElement
  let educationLabel = document.getElementById("educationLabel") as HTMLInputElement
  let schoolName = document.getElementById("schoolName") as HTMLInputElement
  let startYear = document.getElementById("startYear") as HTMLInputElement
  let endYear = document.getElementById("endYear") as HTMLInputElement
  let designation = document.getElementById("designation") as HTMLInputElement
  let companyName = document.getElementById("companyName") as HTMLInputElement
  let joiningDate = document.getElementById("joiningDate") as HTMLInputElement
  let endDate = document.getElementById("endDate") as HTMLInputElement
  let employementHistory = document.getElementById("employementHistory") as HTMLInputElement
  let skills = document.getElementById("skills") as HTMLInputElement
  let moreSkill1 = document.getElementById("moreSkill") as HTMLInputElement
  let moreSkill2 = document.getElementById("moreSkill1") as HTMLInputElement
  let rating = document.getElementById("rating") as HTMLInputElement
  let language = document.getElementById("language") as HTMLInputElement
  let langrating = document.getElementById("langrating") as HTMLInputElement
  let hobby = document.getElementById("hobby") as HTMLInputElement
  let hobbyrating = document.getElementById("hobbyrating") as HTMLInputElement



  let fullName1 = fullName.value
  let address1 = address.value
  let email1 = email.value
  let phoneNo1 = phoneNo.value
  let professionalSummary1 = professionalSummary.value
  let educationLabel1 = educationLabel.value
  let schoolName1 = schoolName.value
  let startYear1 = startYear.value
  let endYear1 = endYear.value
  let designation1 = designation.value
  let companyName1 = companyName.value
  let joiningDate1 = joiningDate.value
  let endDate1 = endDate.value
  let employementHistory1 = employementHistory.value
  let mainskills = skills.value
  let moreSkill3 = moreSkill1.value
  let moreSkill4 = moreSkill2.value
  let rating1 = rating.value
  let language1 = language.value
  let langrating1 = langrating.value
  let hobby1 = hobby.value
  let hobbyrating1 = hobbyrating.value

  const resumeOutput = `
    
   <div class="page" id="resultPage">
    <div class="two-column resume">
      <section class="resume-section resume-header">
        <div class="row">
          <div class="col-md-8 col-sm-8">

            <h1>${fullName1}</h1>
            <div class="info-item">
              <span class="info-label"><i class="fa fa-location-arrow"></i></span><span class="info-text">
                ${address1}</span>
            </div>
            <div class="info-item">
              <span class="info-label"><i class="fa fa-envelope"></i></span><span
                class="info-text">${email1}</span>
            </div>
            <div class="info-item">
              <span class="info-label"><i class="fa fa-phone"></i></span><span class="info-text">${phoneNo1}</span>
            </div>


          </div>
          <div class="col-md-4 col-sm-4">
            <img src="./mairaj.jpg" alt="mairaj" class="img-thumbnail">
          </div>
        </div>
      </section>
      <div class="resume-columns">
        <div class="row">
        <div class="col-md-8 col-sm-12">
          <section class="resume-section resume-summary">
            <div class="resume-content">
              <div class="resume-section-title">
                <i class="fa fa-pencil-square-o"></i>
                <h2>Professional Summary</h2>
                
              </div>
              <div class="other" id="professional_element">
                <div class="other-info">
                ${professionalSummary1}
                </div>
              </div>
            </div>
          </section>
          <section class="resume-section resume-experience">
            <div class="resume-content">
              <div class="resume-section-title">
                <i class="fa fa-book"></i>
                <h2>Education</h2>
            
              </div>
              <div id="education_element">
                <div class="xp-item">
                  <div class="xp-job">
                  ${educationLabel1}
                    <br /><small>${schoolName1}</small>
                  </div>
                  <div class="xp-date">${startYear1} – ${endYear1}</div>
                </div>
                
              </div>
              
            </div>
          </section>
          <section class="resume-section resume-experience">
            <div class="resume-content">
              <div class="resume-section-title">
                <i class="fa fa-briefcase"></i>
                <h2>Employment History</h2>
           
              </div>
              <div class="xp-item" id="employment_element">
                <div class="xp-job">
                ${designation1}
                  <br /><small>${companyName1}</small>
                </div>
                <div class="xp-date">${joiningDate1} – ${endDate1}</div>
                <div class="xp-detail">
                ${employementHistory1}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="col-md-4 col-sm-12">
          <section class="resume-section resume-skills">
            <div class="resume-content">
              <div class="resume-section-title">
                <i class="fa fa-align-center"></i>
                <h2>Skills</h2>
               
              </div>
              <div class="resume-text" id="skill_element">
                <div class="extra">
                  <div class="extra-info">
                    ${mainskills}<br /><small>${moreSkill3} · ${moreSkill4} </small>
                  </div>
                  <div class="extra-details">
                    <div class="extra-details-progress" style="width:${rating1}%;"></div>
                  </div>
                </div>
                
              </div>
            </div>
          </section>
          <section class="resume-section resume-languages">
            <div class="resume-content">
              <div class="resume-section-title">
                <i class="fa fa-globe"></i>
                <h2>Languages</h2>
               
              </div>
              <div id="languages_element">
                <div class="extra">
                  <div class="extra-info">${language1}</div>
                  <div class="extra-details">
                    <div class="extra-details-progress" style="width: ${langrating1}%"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="resume-section resume-languages">
            <div class="resume-content">
              <div class="resume-section-title">
                <i class="fa fa-magic"></i>
                <h2>Hobby</h2>
               
              </div>
              <div id="hobby_element">
                <div class="extra">
                  <div class="extra-info">${hobby1}</div>
                  <div class="extra-details">
                    <div class="extra-details-progress" style="width: ${hobbyrating1}%"></div>
                  </div>
                </div>
                
              </div>
            </div>
          </section>
        </div>
      </div>
      </div>
    </div>
  </div>
  
    `;

  const resumeoutput1 = document.getElementById("output");
  if (resumeoutput1) {
    resumeoutput1.innerHTML = resumeOutput
  }

})


//Hide Button
const page1 = document.getElementById('page1');
const generateBtn = document.getElementById('generateBtn');
const output = document.getElementById('output');

if (page1 != null && output != null && generateBtn != null) {
  generateBtn.addEventListener('click', function handleClick() {
    if (page1.style.display === 'none') {
      page1.style.display = 'block';
      output.style.display = 'none';
      generateBtn.innerHTML = '<button type="submit" class="btn btn-success" id="generateBtn">Generate Resume</button>';
    }
    else {
      output.style.display = 'block';
      page1.style.display = 'none';
      generateBtn.innerHTML = '<button type="submit" class="btn btn-success" id="generateBtn">Edit Resume</button>';
    }
  });
}

