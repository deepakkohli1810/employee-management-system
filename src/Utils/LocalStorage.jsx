const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Complete report",
          description: "Finalize the sales report for Q3",
          taskDate: "2024-12-25",
          category: "Work",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Team meeting",
          description: "Attend the weekly team sync-up meeting",
          taskDate: "2024-12-26",
          category: "Meeting",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          taskTitle: "Review project proposal",
          description: "Review and provide feedback on the new project proposal",
          taskDate: "2024-12-27",
          category: "Review",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Update website",
          description: "Update the homepage design for the website",
          taskDate: "2024-12-28",
          category: "Design",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Client meeting",
          description: "Discuss project milestones with the client",
          taskDate: "2024-12-29",
          category: "Client",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          taskTitle: "Fix bugs",
          description: "Resolve critical bugs reported in the system",
          taskDate: "2024-12-30",
          category: "Development",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Create presentation",
          description: "Prepare the slides for the annual conference",
          taskDate: "2024-12-25",
          category: "Presentation",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          taskTitle: "Organize files",
          description: "Sort and organize the project files",
          taskDate: "2024-12-26",
          category: "Admin",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Send invoices",
          description: "Send payment invoices to clients",
          taskDate: "2024-12-27",
          category: "Finance",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ]
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Run analytics",
          description: "Analyze website traffic data",
          taskDate: "2024-12-25",
          category: "Analytics",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Prepare report",
          description: "Draft the monthly report for stakeholders",
          taskDate: "2024-12-26",
          category: "Work",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Host webinar",
          description: "Organize and host a technical webinar",
          taskDate: "2024-12-27",
          category: "Training",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Write blog",
          description: "Write a blog post about recent project success",
          taskDate: "2024-12-25",
          category: "Content",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Edit video",
          description: "Edit the promotional video for the product launch",
          taskDate: "2024-12-26",
          category: "Media",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          taskTitle: "Plan event",
          description: "Plan logistics for the upcoming annual party",
          taskDate: "2024-12-27",
          category: "Event",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ]
    }
  ];
  

  const admin =[ {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }]
  

  export const  setLocalStorage =() =>{
    localStorage.setItem('employees',employees)
  }

  export  const getLocalStorage = () =>{
    
  }