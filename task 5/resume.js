const ResumeDetails={
    "Details" : [
        {   
            "name":"Dinesh kumar Sakthi Vel",
            "age":28,
            "country":"india",
            "city":"madurai"
        }

    ],

    "education": [
        {
          "degree": "Bachelor of Engineering (EEE)",
          "institution": "Jainee College",
          "location": "Dindigul, Tamil Nadu",
          "graduation_date": "Aug 2021"
        }
      ],

    "experience" :[
        {
            "title":"Marketing executive",
            "Company": "V2 Poly Industries",
            "Location": "tirupur",
            "date ":"2019 - Present"
           
        }

      
    ],

    "project":[     
        
     {
       "project title": "; OPTIMIZATION OF SMART SYSTEM FOR BIOGAS PRODUCTION USING AUTOMATIC CONTROL "
       
     }
    

    ],


    "skills": [
        "java deveopler",
        "gama developer"
        
      ],

      "language" : ["Tamil", "English"],

      "areaOfInterest":[
       
        "Control of Electrical and Electronic ",
       "Web Dvelopment ",
       "Network security "

      ],

      " Hobbies ":[

        "Reading Books",
        "Gardening & Games "
      ],

      "PersonalDetail":[

        {
            "Full Name" : "S. DINESH KUMAR",  
            "Father’s Name": "K. SAKTHI VEL",   
            "Gender" : "Male",   
            "Date Of Birth" : "03-11-1995",   
            "Languages known":    "Tamil and English (can speak, read & write)",  
                                                         
             "Nationality" : "Indian"   
      


        }

      ],
     
"Declaration":[
    "I hereby declare that all the details furnished above are true to the best of my knowledge."
]

};

//for  and for in

for (let k in ResumeDetails) {
    if (ResumeDetails.hasOwnProperty(k)) {
      console.log(`${k}: ${ResumeDetails[k]}`);
    }
  }

//for  loop:

for(let experiences in ResumeDetails.experience ){
    console.log(experiences);
}

// forEach
ResumeDetails.skills.forEach(skill => {
    console.log(skill);
});


