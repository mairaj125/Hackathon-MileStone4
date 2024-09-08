var _a;
//Form Submit
(_a = document.getElementById("form")) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var fullName = document.getElementById("fullname");
    var address = document.getElementById("address");
    var email = document.getElementById("email");
    var phoneNo = document.getElementById("phoneNo");
    var professionalSummary = document.getElementById("professionalSummary");
    var educationLabel = document.getElementById("educationLabel");
    var schoolName = document.getElementById("schoolName");
    var startYear = document.getElementById("startYear");
    var endYear = document.getElementById("endYear");
    var designation = document.getElementById("designation");
    var companyName = document.getElementById("companyName");
    var joiningDate = document.getElementById("joiningDate");
    var endDate = document.getElementById("endDate");
    var employementHistory = document.getElementById("employementHistory");
    var skills = document.getElementById("skills");
    var moreSkill1 = document.getElementById("moreSkill");
    var moreSkill2 = document.getElementById("moreSkill1");
    var rating = document.getElementById("rating");
    var language = document.getElementById("language");
    var langrating = document.getElementById("langrating");
    var hobby = document.getElementById("hobby");
    var hobbyrating = document.getElementById("hobbyrating");
    var fullName1 = fullName.value;
    var address1 = address.value;
    var email1 = email.value;
    var phoneNo1 = phoneNo.value;
    var professionalSummary1 = professionalSummary.value;
    var educationLabel1 = educationLabel.value;
    var schoolName1 = schoolName.value;
    var startYear1 = startYear.value;
    var endYear1 = endYear.value;
    var designation1 = designation.value;
    var companyName1 = companyName.value;
    var joiningDate1 = joiningDate.value;
    var endDate1 = endDate.value;
    var employementHistory1 = employementHistory.value;
    var mainskills = skills.value;
    var moreSkill3 = moreSkill1.value;
    var moreSkill4 = moreSkill2.value;
    var rating1 = rating.value;
    var language1 = language.value;
    var langrating1 = langrating.value;
    var hobby1 = hobby.value;
    var hobbyrating1 = hobbyrating.value;
    var resumeOutput = "\n    \n   <div class=\"page\" id=\"resultPage\">\n    <div class=\"two-column resume\">\n      <section class=\"resume-section resume-header\">\n        <div class=\"row\">\n          <div class=\"col-md-8 col-sm-8\">\n\n            <h1>".concat(fullName1, "</h1>\n            <div class=\"info-item\">\n              <span class=\"info-label\"><i class=\"fa fa-location-arrow\"></i></span><span class=\"info-text\">\n                ").concat(address1, "</span>\n            </div>\n            <div class=\"info-item\">\n              <span class=\"info-label\"><i class=\"fa fa-envelope\"></i></span><span\n                class=\"info-text\">").concat(email1, "</span>\n            </div>\n            <div class=\"info-item\">\n              <span class=\"info-label\"><i class=\"fa fa-phone\"></i></span><span class=\"info-text\">").concat(phoneNo1, "</span>\n            </div>\n\n\n          </div>\n          <div class=\"col-md-4 col-sm-4\">\n            <img src=\"./mairaj.jpg\" alt=\"mairaj\" class=\"img-thumbnail\">\n          </div>\n        </div>\n      </section>\n      <div class=\"resume-columns\">\n        <div class=\"row\">\n        <div class=\"col-md-8 col-sm-12\">\n          <section class=\"resume-section resume-summary\">\n            <div class=\"resume-content\">\n              <div class=\"resume-section-title\">\n                <i class=\"fa fa-pencil-square-o\"></i>\n                <h2>Professional Summary</h2>\n                \n              </div>\n              <div class=\"other\" id=\"professional_element\">\n                <div class=\"other-info\">\n                ").concat(professionalSummary1, "\n                </div>\n              </div>\n            </div>\n          </section>\n          <section class=\"resume-section resume-experience\">\n            <div class=\"resume-content\">\n              <div class=\"resume-section-title\">\n                <i class=\"fa fa-book\"></i>\n                <h2>Education</h2>\n            \n              </div>\n              <div id=\"education_element\">\n                <div class=\"xp-item\">\n                  <div class=\"xp-job\">\n                  ").concat(educationLabel1, "\n                    <br /><small>").concat(schoolName1, "</small>\n                  </div>\n                  <div class=\"xp-date\">").concat(startYear1, " \u2013 ").concat(endYear1, "</div>\n                </div>\n                \n              </div>\n              \n            </div>\n          </section>\n          <section class=\"resume-section resume-experience\">\n            <div class=\"resume-content\">\n              <div class=\"resume-section-title\">\n                <i class=\"fa fa-briefcase\"></i>\n                <h2>Employment History</h2>\n           \n              </div>\n              <div class=\"xp-item\" id=\"employment_element\">\n                <div class=\"xp-job\">\n                ").concat(designation1, "\n                  <br /><small>").concat(companyName1, "</small>\n                </div>\n                <div class=\"xp-date\">").concat(joiningDate1, " \u2013 ").concat(endDate1, "</div>\n                <div class=\"xp-detail\">\n                ").concat(employementHistory1, "\n                </div>\n              </div>\n            </div>\n          </section>\n        </div>\n        <div class=\"col-md-4 col-sm-12\">\n          <section class=\"resume-section resume-skills\">\n            <div class=\"resume-content\">\n              <div class=\"resume-section-title\">\n                <i class=\"fa fa-align-center\"></i>\n                <h2>Skills</h2>\n               \n              </div>\n              <div class=\"resume-text\" id=\"skill_element\">\n                <div class=\"extra\">\n                  <div class=\"extra-info\">\n                    ").concat(mainskills, "<br /><small>").concat(moreSkill3, " \u00B7 ").concat(moreSkill4, " </small>\n                  </div>\n                  <div class=\"extra-details\">\n                    <div class=\"extra-details-progress\" style=\"width:").concat(rating1, "%;\"></div>\n                  </div>\n                </div>\n                \n              </div>\n            </div>\n          </section>\n          <section class=\"resume-section resume-languages\">\n            <div class=\"resume-content\">\n              <div class=\"resume-section-title\">\n                <i class=\"fa fa-globe\"></i>\n                <h2>Languages</h2>\n               \n              </div>\n              <div id=\"languages_element\">\n                <div class=\"extra\">\n                  <div class=\"extra-info\">").concat(language1, "</div>\n                  <div class=\"extra-details\">\n                    <div class=\"extra-details-progress\" style=\"width: ").concat(langrating1, "%\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </section>\n\n          <section class=\"resume-section resume-languages\">\n            <div class=\"resume-content\">\n              <div class=\"resume-section-title\">\n                <i class=\"fa fa-magic\"></i>\n                <h2>Hobby</h2>\n               \n              </div>\n              <div id=\"hobby_element\">\n                <div class=\"extra\">\n                  <div class=\"extra-info\">").concat(hobby1, "</div>\n                  <div class=\"extra-details\">\n                    <div class=\"extra-details-progress\" style=\"width: ").concat(hobbyrating1, "%\"></div>\n                  </div>\n                </div>\n                \n              </div>\n            </div>\n          </section>\n        </div>\n      </div>\n      </div>\n    </div>\n  </div>\n  \n    ");
    var resumeoutput1 = document.getElementById("output");
    if (resumeoutput1) {
        resumeoutput1.innerHTML = resumeOutput;
    }
});
//Hide Button
var page1 = document.getElementById('page1');
var generateBtn = document.getElementById('generateBtn');
var output = document.getElementById('output');
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
