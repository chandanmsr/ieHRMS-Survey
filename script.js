// Complete Survey Data with Sequential Flow - EXACTLY MATCHING EXCEL (with corrections)
const surveyData = [
    {
        id: "recruitment",
        name: "Recruitment Module",
        icon: "fa-user-tie",
        questions: [
            {
                id: "1.0",
                text: "Have You Used the Recruitment Module in ieHRMS web?",
                type: "yesno",
                skipLogic: {
                    ifNo: "skipModule"
                }
            },
            {
                id: "1.0-no",
                text: "If answer to Qno. 1 = No then. Why?",
                type: "mcq",
                options: ["Did not like the layout", "It is very complex to use", "It's not relevant to me"],
                conditional: true,
                dependsOn: "1.0",
                showIf: "No"
            },
            {
                id: "1.1",
                text: "Have You Used the new All Application Candidate page?",
                type: "yesno",
                conditional: true,
                dependsOn: "1.0",
                showIf: "Yes"
            },
            {
                id: "1.1-no",
                text: "If answer to Qno. 1.1 = No, then. Why?",
                type: "mcq",
                options: ["Did not like the layout", "It is very complex to use", "No one told me about it", "It's not relevant to me"],
                conditional: true,
                dependsOn: "1.1",
                showIf: "No"
            },
            {
                id: "1.1-rating",
                text: "If answer to Qno. 1.1 = Yes, then. How much would you rate it out of 5?",
                type: "rating",
                conditional: true,
                dependsOn: "1.1",
                showIf: "Yes"
            },
            {
                id: "1.1-favorite",
                text: "What are your most and least favourite things about this?",
                type: "text",
                conditional: true,
                dependsOn: "1.1",
                showIf: "Yes"
            },
            {
                id: "1.1-suggestions",
                text: "Any suggestions / message for the developer",
                type: "longtext",
                conditional: true,
                dependsOn: "1.1",
                showIf: "Yes"
            },
            {
                id: "1.2",
                text: "Have you created any Posts in ieHRMS web using Post Creation menu?",
                type: "yesno",
                conditional: true,
                dependsOn: "1.0",
                showIf: "Yes"
            },
            {
                id: "1.2-no",
                text: "If answer to Qno. 1.2 = No then. Why?",
                type: "mcq",
                options: ["Did not like the layout", "It is very complex to use", "No one told me about it", "It's not relevant to me"],
                conditional: true,
                dependsOn: "1.2",
                showIf: "No"
            },
            {
                id: "1.2-rating",
                text: "If answer to Qno. 1.2 = Yes, then. How much would you rate it out of 5?",
                type: "rating",
                conditional: true,
                dependsOn: "1.2",
                showIf: "Yes"
            },
            {
                id: "1.2-favorite",
                text: "What are your most and least favourite things about this?",
                type: "text",
                conditional: true,
                dependsOn: "1.2",
                showIf: "Yes"
            },
            {
                id: "1.2-suggestions",
                text: "Any suggestions / message for the developer",
                type: "longtext",
                conditional: true,
                dependsOn: "1.2",
                showIf: "Yes"
            },
            {
                id: "1.3",
                text: "Have You Used the Recruitment Tracker Feature in ieHRMS web?",
                type: "yesno",
                conditional: true,
                dependsOn: "1.0",
                showIf: "Yes"
            },
            {
                id: "1.3-no",
                text: "If answer to Qno. 1.3 = No then. Why?",
                type: "mcq",
                options: ["Did not like the layout", "It is very complex to use", "No one told me about it", "It's not relevant to me"],
                conditional: true,
                dependsOn: "1.3",
                showIf: "No"
            },
            {
                id: "1.3-rating",
                text: "If answer to Qno. 1.3 = Yes, then. How much would you rate it out of 5?",
                type: "rating",
                conditional: true,
                dependsOn: "1.3",
                showIf: "Yes"
            },
            {
                id: "1.3-favorite",
                text: "What are your most and least favourite things about this?",
                type: "text",
                conditional: true,
                dependsOn: "1.3",
                showIf: "Yes"
            },
            {
                id: "1.3-suggestions",
                text: "Any suggestions / message for the developer",
                type: "longtext",
                conditional: true,
                dependsOn: "1.3",
                showIf: "Yes"
            },
            {
                id: "1.4",
                text: "Have You Used the Applicant Tracking System (ATS) in ieHRMS web?",
                type: "yesno",
                conditional: true,
                dependsOn: "1.0",
                showIf: "Yes"
            },
            {
                id: "1.4-no",
                text: "If answer to Qno. 1.4 = No then. Why?",
                type: "mcq",
                options: ["Did not like the layout", "It is very complex to use", "No one told me about it", "It's not relevant to me"],
                conditional: true,
                dependsOn: "1.4",
                showIf: "No"
            },
            {
                id: "1.4-rating",
                text: "If answer to Qno. 1.4 = Yes, then. How much would you rate it out of 5?",
                type: "rating",
                conditional: true,
                dependsOn: "1.4",
                showIf: "Yes"
            },
            {
                id: "1.4-favorite",
                text: "What are your most and least favourite things about this?",
                type: "text",
                conditional: true,
                dependsOn: "1.4",
                showIf: "Yes"
            },
            {
                id: "1.4-suggestions",
                text: "Any suggestions / message for the developer",
                type: "longtext",
                conditional: true,
                dependsOn: "1.4",
                showIf: "Yes"
            }
        ]
    },
    {
        id: "essp",
        name: "ESSP Module",
        icon: "fa-users",
        questions: [
            {
                id: "2.0",
                text: "Have You Used the ESSP Module in ieHRMS web?",
                type: "yesno",
                skipLogic: {
                    ifNo: "skipModule"
                }
            },
            {
                id: "2.0-no",
                text: "If answer to Qno. 2 = No then, Why?",
                type: "mcq",
                options: ["Did not like the layout", "It is very complex to use", "It's not relevant to me"],
                conditional: true,
                dependsOn: "2.0",
                showIf: "No"
            },
            {
                id: "2.1",
                text: "Have You taken any Online Tests / Surveys on the web version of ieHRMS?",
                type: "yesno",
                conditional: true,
                dependsOn: "2.0",
                showIf: "Yes"
            },
            {
                id: "2.1-no",
                text: "If answer to Qno. 2.1 = No, then. Why?",
                type: "mcq",
                options: ["No Tests or Surveys were ever assigned to me", "I did that on the mobile app version", "Did not like the layout", "It is very complex to use", "No one told me about it", "It's not relevant to me"],
                conditional: true,
                dependsOn: "2.1",
                showIf: "No"
            },
            {
                id: "2.1-rating",
                text: "If answer to Qno. 2.1 = Yes, then. How much would you rate it out of 5?",
                type: "rating",
                conditional: true,
                dependsOn: "2.1",
                showIf: "Yes"
            },
            {
                id: "2.1-favorite",
                text: "What are your most and least favourite things about this?",
                type: "text",
                conditional: true,
                dependsOn: "2.1",
                showIf: "Yes"
            },
            {
                id: "2.1-suggestions",
                text: "Any suggestions / message for the developer",
                type: "longtext",
                conditional: true,
                dependsOn: "2.1",
                showIf: "Yes"
            },
            {
                id: "2.2",
                text: "Have You made any leave applications / cancelled leave applications on the web version of ieHRMS?",
                type: "yesno",
                conditional: true,
                dependsOn: "2.0",
                showIf: "Yes"
            },
            {
                id: "2.2-no",
                text: "If answer to Qno. 2.2 = No, then. Why?",
                type: "mcq",
                options: ["I did that on the mobile app version", "Did not like the layout", "It is very complex to use", "No one told me about it", "It's not relevant to me"],
                conditional: true,
                dependsOn: "2.2",
                showIf: "No"
            },
            {
                id: "2.2-rating",
                text: "If answer to Qno. 2.2 = Yes, then. How much would you rate it out of 5?",
                type: "rating",
                conditional: true,
                dependsOn: "2.2",
                showIf: "Yes"
            },
            {
                id: "2.2-favorite",
                text: "What are your most and least favourite things about this?",
                type: "text",
                conditional: true,
                dependsOn: "2.2",
                showIf: "Yes"
            },
            {
                id: "2.2-suggestions",
                text: "Any suggestions / message for the developer",
                type: "longtext",
                conditional: true,
                dependsOn: "2.2",
                showIf: "Yes"
            },
            {
                id: "2.3",
                text: "Have You made any loan/advance applications on the web version of ieHRMS?",
                type: "yesno",
                conditional: true,
                dependsOn: "2.0",
                showIf: "Yes"
            },
            {
                id: "2.3-no",
                text: "If answer to Qno. 2.3 = No, then. Why?",
                type: "mcq",
                options: ["Did not like the layout", "It is very complex to use", "No one told me about it", "It's not relevant to me"],
                conditional: true,
                dependsOn: "2.3",
                showIf: "No"
            },
            {
                id: "2.3-rating",
                text: "If answer to Qno. 2.3 = Yes, then. How much would you rate it out of 5?",
                type: "rating",
                conditional: true,
                dependsOn: "2.3",
                showIf: "Yes"
            },
            {
                id: "2.3-favorite",
                text: "What are your most and least favourite things about this?",
                type: "text",
                conditional: true,
                dependsOn: "2.3",
                showIf: "Yes"
            },
            {
                id: "2.3-suggestions",
                text: "Any suggestions / message for the developer",
                type: "longtext",
                conditional: true,
                dependsOn: "2.3",
                showIf: "Yes"
            },
            {
                id: "2.4",
                text: "Have used any of the ESSP Admin features on web version of ieHRMS?",
                type: "yesno",
                conditional: true,
                dependsOn: "2.0",
                showIf: "Yes"
            },
            {
                id: "2.4-no",
                text: "If answer to Qno. 2.4 = No, then. Why?",
                type: "mcq",
                options: ["Did not like the layout", "It is very complex to use", "No one told me about it", "It's not relevant to me"],
                conditional: true,
                dependsOn: "2.4",
                showIf: "No"
            },
            {
                id: "2.4-rating",
                text: "If answer to Qno. 2.4 = Yes, then. How much would you rate it out of 5?",
                type: "rating",
                conditional: true,
                dependsOn: "2.4",
                showIf: "Yes"
            },
            {
                id: "2.4-favorite",
                text: "What are your most and least favourite things about this?",
                type: "text",
                conditional: true,
                dependsOn: "2.4",
                showIf: "Yes"
            },
            {
                id: "2.4-suggestions",
                text: "Any suggestions / message for the developer",
                type: "longtext",
                conditional: true,
                dependsOn: "2.4",
                showIf: "Yes"
            }
        ]
    },
    {
        id: "mjl",
        name: "MJL Module",
        icon: "fa-tasks",
        questions: [
            {
                id: "3.0",
                text: "Have You Used the MJL Module in ieHRMS web?",
                type: "yesno",
                skipLogic: {
                    ifNo: "skipModule"
                }
            },
            {
                id: "3.0-no",
                text: "If answer to Qno. 3 = No then, Why?",
                type: "mcq",
                options: ["Did not like the layout", "It is very complex to use", "It's not relevant to me"],
                conditional: true,
                dependsOn: "3.0",
                showIf: "No"
            },
            {
                id: "3.1",
                text: "Have You created any MJLs on the web version of ieHRMS?",
                type: "yesno",
                conditional: true,
                dependsOn: "3.0",
                showIf: "Yes"
            },
            {
                id: "3.1-no",
                text: "If answer to Qno. 3.1 = No, then. Why?",
                type: "mcq",
                options: ["Did not like the layout", "It is very complex to use", "No one told me about it", "It's not relevant to me"],
                conditional: true,
                dependsOn: "3.1",
                showIf: "No"
            },
            {
                id: "3.1-rating",
                text: "If answer to Qno. 3.1 = Yes, then. How much would you rate it out of 5?",
                type: "rating",
                conditional: true,
                dependsOn: "3.1",
                showIf: "Yes"
            },
            {
                id: "3.1-suggestions",
                text: "Any suggestions / message for the developer",
                type: "longtext",
                conditional: true,
                dependsOn: "3.1",
                showIf: "Yes"
            },
            {
                id: "3.2",
                text: "Have You created any SOPs on the web version of ieHRMS?",
                type: "yesno",
                conditional: true,
                dependsOn: "3.0",
                showIf: "Yes"
            },
            {
                id: "3.2-no",
                text: "If answer to Qno. 3.2 = No, then. Why?",
                type: "mcq",
                options: ["Did not like the layout", "It is very complex to use", "No one told me about it", "It's not relevant to me"],
                conditional: true,
                dependsOn: "3.2",
                showIf: "No"
            },
            {
                id: "3.2-rating",
                text: "If answer to Qno. 3.2 = Yes, then. How much would you rate it out of 5?",
                type: "rating",
                conditional: true,
                dependsOn: "3.2",
                showIf: "Yes"
            },
            {
                id: "3.2-suggestions",
                text: "Any suggestions / message for the developer",
                type: "longtext",
                conditional: true,
                dependsOn: "3.2",
                showIf: "Yes"
            },
            {
                id: "3.3",
                text: "Do you have any suggestion for the MJL Dashboard? (Only if Applicable to you)",
                type: "longtext",
                conditional: true,
                dependsOn: "3.0",
                showIf: "Yes"
            }
        ]
    },
    {
        id: "employeeProfile",
        name: "Employee Profile",
        icon: "fa-id-card",
        questions: [
            {
                id: "4.0",
                text: "Have You Used the Employee profile Module in ieHRMS web?",
                type: "yesno",
                skipLogic: {
                    ifNo: "skipModule"
                }
            },
            {
                id: "4.0-no",
                text: "If answer to Qno. 4 = No then, Why?",
                type: "mcq",
                options: ["Did not like the layout", "It is very complex to use", "It's not relevant to me", "I prefer the Mobile App version for that"],
                conditional: true,
                dependsOn: "4.0",
                showIf: "No"
            },
            {
                id: "4.1",
                text: "Have You used the Candidate profile page on the web version of ieHRMS?",
                type: "yesno",
                conditional: true,
                dependsOn: "4.0",
                showIf: "Yes"
            },
            {
                id: "4.1-no",
                text: "If answer to Qno. 4.1 = No, then. Why?",
                type: "mcq",
                options: ["Did not like the layout", "It is very complex to use", "No one told me about it", "It's not relevant to me"],
                conditional: true,
                dependsOn: "4.1",
                showIf: "No"
            },
            {
                id: "4.1-rating",
                text: "If answer to Qno. 4.1 = Yes, then. How much would you rate it out of 5?",
                type: "rating",
                conditional: true,
                dependsOn: "4.1",
                showIf: "Yes"
            },
            {
                id: "4.1-favorite",
                text: "What are your most and least favourite things about this?",
                type: "text",
                conditional: true,
                dependsOn: "4.1",
                showIf: "Yes"
            },
            {
                id: "4.1-suggestions",
                text: "Any suggestions / message for the developer",
                type: "longtext",
                conditional: true,
                dependsOn: "4.1",
                showIf: "Yes"
            },
            {
                id: "4.2",
                text: "Have You used the Employee Profile profile page on the web version of ieHRMS?",
                type: "yesno",
                conditional: true,
                dependsOn: "4.0",
                showIf: "Yes"
            },
            {
                id: "4.2-no",
                text: "If answer to Qno. 4.2 = No, then. Why?",
                type: "mcq",
                options: ["Did not like the layout", "It is very complex to use", "No one told me about it", "It's not relevant to me"],
                conditional: true,
                dependsOn: "4.2",
                showIf: "No"
            },
            {
                id: "4.2-rating",
                text: "If answer to Qno. 4.2 = Yes, then. How much would you rate it out of 5?",
                type: "rating",
                conditional: true,
                dependsOn: "4.2",
                showIf: "Yes"
            },
            {
                id: "4.2-favorite",
                text: "What are your most and least favourite things about this?",
                type: "text",
                conditional: true,
                dependsOn: "4.2",
                showIf: "Yes"
            },
            {
                id: "4.2-suggestions",
                text: "Any suggestions / message for the developer",
                type: "longtext",
                conditional: true,
                dependsOn: "4.2",
                showIf: "Yes"
            },
            {
                id: "4.3",
                text: "Have You used the Candidate Document List on the web version of ieHRMS?",
                type: "yesno",
                conditional: true,
                dependsOn: "4.0",
                showIf: "Yes"
            },
            {
                id: "4.3-no",
                text: "If answer to Qno. 4.3 = No, then. Why?",
                type: "mcq",
                options: ["Did not like the layout", "It is very complex to use", "No one told me about it", "It's not relevant to me"],
                conditional: true,
                dependsOn: "4.3",
                showIf: "No"
            },
            {
                id: "4.3-rating",
                text: "If answer to Qno. 4.3 = Yes, then. How much would you rate it out of 5?",
                type: "rating",
                conditional: true,
                dependsOn: "4.3",
                showIf: "Yes"
            },
            {
                id: "4.3-favorite",
                text: "What are your most and least favourite things about this?",
                type: "text",
                conditional: true,
                dependsOn: "4.3",
                showIf: "Yes"
            },
            {
                id: "4.3-suggestions",
                text: "Any suggestions / message for the developer",
                type: "longtext",
                conditional: true,
                dependsOn: "4.3",
                showIf: "Yes"
            },
            {
                id: "4.4",
                text: "Have You used the Employee Document List on the web version of ieHRMS?",
                type: "yesno",
                conditional: true,
                dependsOn: "4.0",
                showIf: "Yes"
            },
            {
                id: "4.4-no",
                text: "If answer to Qno. 4.4 = No, then. Why?",
                type: "mcq",
                options: ["Did not like the layout", "It is very complex to use", "No one told me about it", "It's not relevant to me"],
                conditional: true,
                dependsOn: "4.4",
                showIf: "No"
            },
            {
                id: "4.4-rating",
                text: "If answer to Qno. 4.4 = Yes, then. How much would you rate it out of 5?", // Fixed: Changed from 4.2 to 4.4
                type: "rating",
                conditional: true,
                dependsOn: "4.4",
                showIf: "Yes"
            },
            {
                id: "4.4-favorite",
                text: "What are your most and least favourite things about this?",
                type: "text",
                conditional: true,
                dependsOn: "4.4",
                showIf: "Yes"
            },
            {
                id: "4.4-suggestions",
                text: "Any suggestions / message for the developer",
                type: "longtext",
                conditional: true,
                dependsOn: "4.4",
                showIf: "Yes"
            }
        ]
    },
    {
        id: "leave",
        name: "Leave Module",
        icon: "fa-umbrella-beach",
        questions: [
            {
                id: "5.0",
                text: "Have You Used the Leave Module in ieHRMS web?",
                type: "yesno",
                skipLogic: {
                    ifNo: "skipModule"
                }
            },
            {
                id: "5.0-no",
                text: "If answer to Qno. 5 = No then, Why?",
                type: "mcq",
                options: ["Did not like the layout", "It is very complex to use", "It's not relevant to me", "I prefer the Mobile App version for that"],
                conditional: true,
                dependsOn: "5.0",
                showIf: "No"
            },
            {
                id: "5.1",
                text: "Have You used the Leave Request menu on the web version of ieHRMS?",
                type: "yesno",
                conditional: true,
                dependsOn: "5.0",
                showIf: "Yes"
            },
            {
                id: "5.1-no",
                text: "If answer to Qno. 5.1 = No, then. Why?",
                type: "mcq",
                options: ["Did not like the layout", "It is very complex to use", "No one told me about it", "It's not relevant to me"],
                conditional: true,
                dependsOn: "5.1",
                showIf: "No"
            },
            {
                id: "5.1-rating",
                text: "If answer to Qno. 5.1 = Yes, then. How much would you rate it out of 5?",
                type: "rating",
                conditional: true,
                dependsOn: "5.1",
                showIf: "Yes"
            },
            {
                id: "5.1-favorite",
                text: "What are your most and least favourite things about this?",
                type: "text",
                conditional: true,
                dependsOn: "5.1",
                showIf: "Yes"
            },
            {
                id: "5.1-suggestions",
                text: "Any suggestions / message for the developer",
                type: "longtext",
                conditional: true,
                dependsOn: "5.1",
                showIf: "Yes"
            },
            {
                id: "5.2",
                text: "Have You used the Leave Master menu on the web version of ieHRMS?",
                type: "yesno",
                conditional: true,
                dependsOn: "5.0",
                showIf: "Yes"
            },
            {
                id: "5.2-no",
                text: "If answer to Qno. 5.2 = No, then. Why?",
                type: "mcq",
                options: ["Did not like the layout", "It is very complex to use", "No one told me about it", "It's not relevant to me"],
                conditional: true,
                dependsOn: "5.2",
                showIf: "No"
            },
            {
                id: "5.2-rating",
                text: "If answer to Qno. 5.2 = Yes, then. How much would you rate it out of 5?",
                type: "rating",
                conditional: true,
                dependsOn: "5.2",
                showIf: "Yes"
            },
            {
                id: "5.2-favorite",
                text: "What are your most and least favourite things about this?",
                type: "text",
                conditional: true,
                dependsOn: "5.2",
                showIf: "Yes"
            },
            {
                id: "5.2-suggestions",
                text: "Any suggestions / message for the developer",
                type: "longtext",
                conditional: true,
                dependsOn: "5.2",
                showIf: "Yes"
            },
            {
                id: "5.3",
                text: "Have You used the Leave Application menu on the web version of ieHRMS?",
                type: "yesno",
                conditional: true,
                dependsOn: "5.0",
                showIf: "Yes"
            },
            {
                id: "5.3-no",
                text: "If answer to Qno. 5.3 = No, then. Why?",
                type: "mcq",
                options: ["Did not like the layout", "It is very complex to use", "No one told me about it", "It's not relevant to me"],
                conditional: true,
                dependsOn: "5.3",
                showIf: "No"
            },
            {
                id: "5.3-rating",
                text: "If answer to Qno. 5.3 = Yes, then. How much would you rate it out of 5?",
                type: "rating",
                conditional: true,
                dependsOn: "5.3",
                showIf: "Yes"
            },
            {
                id: "5.3-favorite",
                text: "What are your most and least favourite things about this?",
                type: "text",
                conditional: true,
                dependsOn: "5.3",
                showIf: "Yes"
            },
            {
                id: "5.3-suggestions",
                text: "Any suggestions / message for the developer",
                type: "longtext",
                conditional: true,
                dependsOn: "5.3",
                showIf: "Yes"
            },
            {
                id: "5.4",
                text: "Have You used the Attendance menu on the web version of ieHRMS?",
                type: "yesno",
                conditional: true,
                dependsOn: "5.0",
                showIf: "Yes"
            },
            {
                id: "5.4-no",
                text: "If answer to Qno. 5.4 = No, then. Why?",
                type: "mcq",
                options: ["Did not like the layout", "It is very complex to use", "No one told me about it", "It's not relevant to me"],
                conditional: true,
                dependsOn: "5.4",
                showIf: "No"
            },
            {
                id: "5.4-rating",
                text: "If answer to Qno. 5.4 = Yes, then. How much would you rate it out of 5?",
                type: "rating",
                conditional: true,
                dependsOn: "5.4",
                showIf: "Yes"
            },
            {
                id: "5.4-favorite",
                text: "What are your most and least favourite things about this?",
                type: "text",
                conditional: true,
                dependsOn: "5.4",
                showIf: "Yes"
            },
            {
                id: "5.4-suggestions",
                text: "Any suggestions / message for the developer",
                type: "longtext",
                conditional: true,
                dependsOn: "5.4",
                showIf: "Yes"
            },
            {
                id: "5.5",
                text: "Do you have any suggestion for the Leave Module Dashboard?",
                type: "longtext",
                conditional: true,
                dependsOn: "5.0",
                showIf: "Yes"
            }
        ]
    },
    {
        id: "psychometric",
        name: "Psychometric Module",
        icon: "fa-brain",
        questions: [
            {
                id: "6.0",
                text: "Have You Used the Psychometric Module in ieHRMS web?", // Fixed: Changed from "Leave Module" to "Psychometric Module"
                type: "yesno",
                skipLogic: {
                    ifNo: "skipModule"
                }
            },
            {
                id: "6.0-no",
                text: "If answer to Qno. 6 = No then, Why?",
                type: "mcq",
                options: ["Did not like the layout", "It is very complex to use", "It's not relevant to me", "I prefer the Mobile App version for that"],
                conditional: true,
                dependsOn: "6.0",
                showIf: "No"
            },
            {
                id: "6.1",
                text: "Have You used this module to assign test to employees on the web version of ieHRMS?",
                type: "yesno",
                conditional: true,
                dependsOn: "6.0",
                showIf: "Yes"
            },
            {
                id: "6.1-no",
                text: "If answer to Qno. 6.1 = No, then. Why?",
                type: "mcq",
                options: ["Did not like the layout", "It is very complex to use", "No one told me about it", "It's not relevant to me"],
                conditional: true,
                dependsOn: "6.1",
                showIf: "No"
            },
            {
                id: "6.1-rating",
                text: "If answer to Qno. 6.1 = Yes, then. How much would you rate it out of 5?",
                type: "rating",
                conditional: true,
                dependsOn: "6.1",
                showIf: "Yes"
            },
            {
                id: "6.1-favorite",
                text: "What are your most and least favourite things about this?",
                type: "text",
                conditional: true,
                dependsOn: "6.1",
                showIf: "Yes"
            },
            {
                id: "6.1-suggestions",
                text: "Any suggestions / message for the developer",
                type: "longtext",
                conditional: true,
                dependsOn: "6.1",
                showIf: "Yes"
            },
            {
                id: "6.2",
                text: "Have You used this module to check Psychometric reports of Candidates / Employee / Educyte Trainee on the web version of ieHRMS?",
                type: "yesno",
                conditional: true,
                dependsOn: "6.0",
                showIf: "Yes"
            },
            {
                id: "6.2-no",
                text: "If answer to Qno. 6.2 = No, then. Why?",
                type: "mcq",
                options: ["Did not like the layout", "It is very complex to use", "No one told me about it", "It's not relevant to me"],
                conditional: true,
                dependsOn: "6.2",
                showIf: "No"
            },
            {
                id: "6.2-rating",
                text: "If answer to Qno. 6.2 = Yes, then. How much would you rate it out of 5?",
                type: "rating",
                conditional: true,
                dependsOn: "6.2",
                showIf: "Yes"
            },
            {
                id: "6.2-favorite",
                text: "What are your most and least favourite things about this?",
                type: "text",
                conditional: true,
                dependsOn: "6.2",
                showIf: "Yes"
            },
            {
                id: "6.2-suggestions",
                text: "Any suggestions / message for the developer",
                type: "longtext",
                conditional: true,
                dependsOn: "6.2",
                showIf: "Yes"
            },
            {
                id: "6.3",
                text: "Have You used this module to create surveys on the web version of ieHRMS?",
                type: "yesno",
                conditional: true,
                dependsOn: "6.0",
                showIf: "Yes"
            },
            {
                id: "6.3-no",
                text: "If answer to Qno. 6.3 = No, then. Why?",
                type: "mcq",
                options: ["Did not like the layout", "It is very complex to use", "No one told me about it", "It's not relevant to me"],
                conditional: true,
                dependsOn: "6.3",
                showIf: "No"
            },
            {
                id: "6.3-rating",
                text: "If answer to Qno. 6.3 = Yes, then. How much would you rate it out of 5?",
                type: "rating",
                conditional: true,
                dependsOn: "6.3",
                showIf: "Yes"
            },
            {
                id: "6.3-favorite",
                text: "What are your most and least favourite things about this?",
                type: "text",
                conditional: true,
                dependsOn: "6.3",
                showIf: "Yes"
            },
            {
                id: "6.3-suggestions",
                text: "Any suggestions / message for the developer",
                type: "longtext",
                conditional: true,
                dependsOn: "6.3",
                showIf: "Yes"
            }
        ]
    }
];