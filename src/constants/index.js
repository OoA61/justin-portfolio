const leftDivVariant = {
    visible: {
      translateX: 0,
      transition: {
        duration: 0.3, 
        type: "spring", 
        stiffness: 100, 
        damping: 20
      }
    },
    hidden: {
      translateX: -1000
    }
  }
  
  const rightDivVariant = {
    visible: {
      translateX: 0,
      transition: {
        duration: 0.3, 
        type: "spring", 
        stiffness: 100, 
        damping: 20 
      }
    },
    hidden: {
      translateX: 1000
    }
  }

  const info = {
    skills: 'Well versed in Node.Js framework and utilizing Express, React, MySQL to create websites that dynamically display and update database information. Experience with React, SCSS and Framer Motion allows me to connect the backend with a comprehensible, responsive and beautiful front-end.',
    attributes: "I believe I have a passion for learning new things in order to overcome new challenges. As cliche as this may sound, I truly believe that any challenge could be overcome by breaking it into smaller pieces and conquering it one step at a time. Through this, I'm able to stay levelheaded, focused, and optimistic in order to march forward!",
    background: "I'm currently a Kinesiology (Rehabilitation Science) major at San Jose State University. Though my post-secondary education path leads to a career in Physical Therapy/Health Care, I've always had a passion and interest in technology. I spend any spare time I have on learning software development so that I can create projects that align with my other passions.",
    goals: "First and foremost, I plan to continue to put in effort in order to graduate at the top of my class at SJSU. However, I want to continue to pour my efforts into furthering my knowledge in fullstack development. I've learned a lot about frontend and backend communication but I now want to learn more about responsive design as well as utilizing modern frameworks to create websites that will help people in an efficient manner."
  }

  const projectDescription = {
    ooatyper: "Web-based Typing Speed  game that allows users to add friends or create groups to compete with one another. The website is a Node.Js based project that communicates with a MySQL server running on an AWS EC2 Instance. One key feature of this typing test is that extra letters typed by the user will create new letters on the screen that dynamically update the page to show the typing errors.",
    racegambit: "Web-based platform where users can place bets on various categories of the Formula 1 Championship . Users are given a fixed amount of usable balance on account creation with additional balance getting added on a weekly basis. Users can create leagues or join one with the league search function and the league password. Leagues allow users to compare their betting performance with other users in the league.",
  }



  export { leftDivVariant, rightDivVariant, info, projectDescription }