var stu1=[
      { name:"ramya",
      age:19,
      city:"theni",
      degree:"be",
      branch:"cse"
      },
    
      { name:"aruna",
      age:19,
      city:"bodi",
      degree:"be",
      branch:"it"},
      
      { name:"sivuuu",
      age:19,
      city:"veerapandi",
      degree:"be",
      branch:"cse"},
    
      { name:"kiki",
      age:19,
      city:"theni",
      degree:"ba",
      branch:"maths"}
    
    ]
    
    for (var i=0;i<stu1.length;i++)
    {
      console.log(stu1[i].name)
      console.log(stu1[i].age)

    }

    stu1.forEach(
            function(a,i)
            {
                console.log(a,i)
            }
    )

    