import { IoMailSharp } from "react-icons/io5";
import { AiOutlineGlobal, AiFillSkype } from "react-icons/ai";
import { MdPlace, MdPhone } from "react-icons/md";

import { FaFacebookF, FaTwitter, FaGoogle, FaLinkedin } from "react-icons/fa";
import { GiGraduateCap, GiEarthAfricaEurope } from "react-icons/gi";
import {
  blog1,
  blog2,
  blog3,
  client1,
  client2,
  client3,
  c1,
  c2,
  c3,
  c4,
  c6,
  c7,
  c8,
  c9,
  c10,
} from "assets/images";

export const mockData = {
  ownerDetail: [
    {
      icon: <IoMailSharp />,
      data: "job.tranthien@gmail.com",
    },
    {
      icon: <AiOutlineGlobal />,
      data: "job.tranthien@gmail.com",
    },
    {
      icon: <AiFillSkype />,
      data: "tranthien@skype.com",
    },
    {
      icon: <MdPhone />,
      data: "+84 913184232",
    },
    {
      icon: <MdPlace />,
      data: "286a Ta Quang Buu Street, Ward 4, District 8, Ho Chi Minh city",
    },
  ],
  socials: [
    {
      icon: <FaFacebookF />,
      bg: "#3f51b5",
      link: "#",
    },
    { icon: <FaTwitter />, bg: "#2196f3", link: "#" },
    { icon: <FaGoogle />, bg: "#f44336", link: "#" },
    { icon: <FaLinkedin />, bg: "#1565c0", link: "#" },
  ],
  educationData: [
    {
      degree: "Preparatory Education",
      schoolName: "Fedrick School",
      time: "Jan 1997 - Mar 2000",
      desc: "I completed my preparatory education from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.",
      icon: <h6>p</h6>,
      extra: {
        title: "GRADUATION AT ASHTON UNI",
        time: "Jan 2014 - Mar 2015",
        img: "http://trimatrixlab.com/store/flatrica/images/timeline/demo-gra.jpg",
        desc: "I have learned a great many things from participating in varsity football. It has changed my entire outlook on and attitude toward life. Before my freshman year at [high-school], I was shy, had low self-esteem and turned away from seemingly impossible challenges. Football has altered all of these qualities. On the first day of freshman practice, the team warmed up with a game of touch football. The players were split up and the game began. However, during the game, I noticed that I didn't run as hard as I could, nor did I try to evade my defender and get open. The fact of the matter is that I really did not want to be thrown the ball. I didn't want to be the one at fault if I dropped the ball and the play didn't succeed. I did not want the responsibility of helping the team because I was too afraid of making a mistake. That aspect of my character led the first years of my high school life. All the while, I went to practice.",
      },
    },
    {
      degree: "High School",
      schoolName: "RedStreet College",
      time: "Jan 2000 - Mar 2005",
      desc: "I completed my high school degree from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.",
      icon: <h6>h</h6>,
    },
    {
      degree: "Computer Science",
      schoolName: "Down Street College",
      time: "Jan 2006 - Mar 2008",
      desc: "I completed my computer science degree from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.",
      icon: <h6>c</h6>,
    },
    {
      degree: "Software Engineering",
      schoolName: "Oxford University",
      time: "Jan 2009 - Mar 2010",
      desc: "I completed this degree from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.",
      icon: <i class="fa fa-graduation-cap"></i>,
    },
    {
      degree: "UI/UX Workshop",
      schoolName: "IT Next Academy",
      time: "Jan 2010 - Mar 2011",
      desc: "I completed this course from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.",
      icon: <h6>u</h6>,
      extra: {
        title: "EDUCATION AT Y",
        time: "Jan 2014 - Mar 2015",
        img: null,
        desc: "I have learned a great many things from participating in varsity football. It has changed my entire outlook on and attitude toward life. Before my freshman year at [high-school], I was shy, had low self-esteem and turned away from seemingly impossible challenges. Football has altered all of these qualities. On the first day of freshman practice, the team warmed up with a game of touch football. The players were split up and the game began. However",
      },
    },
    {
      degree: "Web Development",
      schoolName: "Lipro University",
      time: "Jan 2011 - Mar 2012",
      desc: "I completed this course from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.",
      icon: <i class="fa fa-globe"></i>,
      extra: {
        title: "EDUCATION AT Z",
        time: "Jan 2014 - Mar 2015",
        img: "http://trimatrixlab.com/store/flatrica/images/timeline/demo-gra.jpg",
        desc: "I have learned a great many things from participating in varsity football. It has changed my entire outlook on and attitude toward life. Before my freshman year at [high-school], I was shy, had low self-esteem and turned away from seemingly impossible challenges. Football has altered all of these qualities. On the first day of freshman practice, the team warmed up with a game of touch football. The players were split up and the game began. However",
      },
    },
  ],
  experienceData: [
    {
      degree: "Preparatory Education",
      schoolName: "Fedrick School",
      time: "Jan 1997 - Mar 2000",
      desc: "I completed my preparatory education from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.",
      icon: <h6>p</h6>,
      extra: {
        title: "GRADUATION AT ASHTON UNI",
        time: "Jan 2014 - Mar 2015",
        img: "http://trimatrixlab.com/store/flatrica/images/timeline/demo-gra.jpg",
        desc: "I have learned a great many things from participating in varsity football. It has changed my entire outlook on and attitude toward life. Before my freshman year at [high-school], I was shy, had low self-esteem and turned away from seemingly impossible challenges. Football has altered all of these qualities. On the first day of freshman practice, the team warmed up with a game of touch football. The players were split up and the game began. However, during the game, I noticed that I didn't run as hard as I could, nor did I try to evade my defender and get open. The fact of the matter is that I really did not want to be thrown the ball. I didn't want to be the one at fault if I dropped the ball and the play didn't succeed. I did not want the responsibility of helping the team because I was too afraid of making a mistake. That aspect of my character led the first years of my high school life. All the while, I went to practice.",
      },
    },
    {
      degree: "High School",
      schoolName: "RedStreet College",
      time: "Jan 2000 - Mar 2005",
      desc: "I completed my high school degree from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.",
      icon: <h6>h</h6>,
    },
    {
      degree: "UI/UX Workshop",
      schoolName: "IT Next Academy",
      time: "Jan 2010 - Mar 2011",
      desc: "I completed this course from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.",
      icon: <h6>u</h6>,
      extra: {
        title: "EDUCATION AT Y",
        time: "Jan 2014 - Mar 2015",
        img: null,
        desc: "I have learned a great many things from participating in varsity football. It has changed my entire outlook on and attitude toward life. Before my freshman year at [high-school], I was shy, had low self-esteem and turned away from seemingly impossible challenges. Football has altered all of these qualities. On the first day of freshman practice, the team warmed up with a game of touch football. The players were split up and the game began. However",
      },
    },
    {
      degree: "Web Development",
      schoolName: "Lipro University",
      time: "Jan 2011 - Mar 2012",
      desc: "I completed this course from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.",
      icon: <h6>i</h6>,
      extra: {
        title: "EDUCATION AT Z",
        time: "Jan 2014 - Mar 2015",
        img: "http://trimatrixlab.com/store/flatrica/images/timeline/demo-gra.jpg",
        desc: "I have learned a great many things from participating in varsity football. It has changed my entire outlook on and attitude toward life. Before my freshman year at [high-school], I was shy, had low self-esteem and turned away from seemingly impossible challenges. Football has altered all of these qualities. On the first day of freshman practice, the team warmed up with a game of touch football. The players were split up and the game began. However",
      },
    },
  ],
  skillsData: [
    {
      title: "Professional",
      skillBar: [
        {
          title: "HTML5",
          percent: 90,
        },
        {
          title: "CSS3",
          percent: 90,
        },
        {
          title: "Jquery",
          percent: 90,
        },
        {
          title: "PHP",
          percent: 68,
        },
      ],
    },
    {
      title: "Personal",
      skillBar: [
        {
          title: "Communication",
          percent: 80,
        },
        {
          title: "Teamwork",
          percent: 60,
        },
        {
          title: "Creativity",
          percent: 70,
        },
        {
          title: "Dedication",
          percent: 70,
        },
      ],
    },
    {
      title: "Software",
      skillBar: [
        {
          title: "Adobe Illustrator",
          percent: 80,
        },
        {
          title: "Adobe InDesign",
          percent: 60,
        },
        {
          title: "PHP Storm",
          percent: 70,
        },
        {
          title: "Dev Console",
          percent: 70,
        },
      ],
    },
  ],
  interest: [
    {
      icon: "fa-solid fa-music",
      name: "music",
    },
    {
      icon: "fa fa-gamepad",
      name: "gaming",
    },
    {
      icon: "fa fa-camera",
      name: "photography",
    },
    {
      icon: "fa-solid fa-futbol",
      name: "football",
    },
    {
      icon: "fa fa-plane",
      name: "traveling",
    },
    {
      icon: "fa fa-film",
      name: "movies",
    },
  ],
  pricing: [
    {
      price: "50",
      level: "starter",
      brandWidth: "2 GB",
      diskSpace: "5 GB",
      databases: "5",
      domain: "Free",
      subdomain: "Free",
    },
    {
      price: "200",
      level: "ultimate",
      brandWidth: "∞",
      diskSpace: "∞",
      databases: "∞",
      domain: "Free",
      subdomain: "∞",
    },
    {
      price: "100",
      level: "business",
      brandWidth: "5 GB",
      diskSpace: "25 GB",
      databases: "10",
      domain: "Free",
      subdomain: "15",
    },
  ],
  blogs: [
    {
      image: blog1,
      fieldWork: "Frontend",
      jobName: "Design",
      work: "Material",
      workTitle: "material design",
      workDescription:
        "Web design encompasses many different skills and disciplines in the production of websites.Web design include web graphic design, interface design etc.",
    },
    {
      image: blog2,
      fieldWork: "Backend",
      jobName: "Dev",
      work: "Shortcuts",
      workTitle: "development shortcut",
      workDescription:
        "Web development is a broad term for the work involved in developing a web site for the Internet or an intranet. Now lets get a bit deeper in this topic",
    },
    {
      image: blog3,
      fieldWork: "Frontend",
      jobName: "Specs",
      work: "UI",
      workTitle: "a good ui",
      workDescription:
        "The user interface (UI), in the industrial design field of human–machine interaction, is the space where interactions between humans and machines occur.",
    },
  ],
  testimonials: [
    {
      img: client1,
      desc: "I work with John on several web development projects and I find him to be extremely creative and a technical Front End Developer. Jone expertise involves building complex Responsive Design layouts using HTML 5, CSS3, and JavaScript. I work with John on several web development projects and I find him to be extremely creative and a technical Front End Developer. Jone expertise involves building complex Responsive Design layouts using HTML 5, CSS3, and JavaScript.",
      signature: "Mike, CEO, IT World.",
    },
    {
      img: client2,
      desc: " I work with John on several web development projects and I find him to be extremely creative and a technical Front End Developer.",
      signature: "Mike, CEO, IT World.",
    },
    {
      img: client3,
      desc: "I work with John on several web development projects and I find him to be extremely creative and a technical Front End Developer. Jone expertise involves building complex Responsive Design layouts using HTML 5, CSS3, and JavaScript.",
      signature: "Mike, CEO, IT World.",
    },
  ],
  clients: [c1, c2, c3, c4, c6, c7, c8, c9, c10],
};
