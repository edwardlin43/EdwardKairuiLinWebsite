const basePath = import.meta.env.BASE_URL

export const projects = [
  {
    slug: "mcmaster-chem-e-car",
    title: "McMaster Chem-E-Car",
    description:
      "Designed and tested a hydrogen fuel-cell car with a turbidity-based stopping system and rack-and-pinion steering.",
    image: `${basePath}projects/Chem-E-Car.jpg`,
    tags: ["ChemEng", "Club", "McMaster"],
    gallery: [
      {
        image: `${basePath}projects/Chem-E-Car-Front.png`,
        caption: "Front view of the Chem-E-Car at the regional competition.",
      },
      {
        image: `${basePath}projects/Chem-E-Car-Rear.png`,
        caption: "Rear view of the Chem-E-Car at the regional competition.",
      },
    ],
    sections: [
      {
        heading: "Project Summary",
        paragraphs: [
          'Our team designed a hydrogen fuel-cell car for the 2026 Eckhardt Northeast Student Regional Conference. The car was themed "MAC to the Future" and modeled after the DeLorean from the Back to the Future movies.',
          "The project combined a PEM fuel cell for propulsion, a chemical turbidity reaction to determine when to stop, and rack-and-pinion steering to correct the car's heading.",
        ],
      },
      {
        heading: "Hydrogen Fuel-Cell Power",
        paragraphs: [
          "Hydrogen gas is produced by reacting magnesium with sulfuric acid. The hydrogen enters the anode of a PEM fuel cell, while air enters the cathode. The electrochemical process drives electrons through an external circuit to power the car's motor.",
        ],
      },
      {
        heading: "Turbidity-Based Stopping System",
        paragraphs: [
          "A reaction between cinnamaldehyde and acetone, catalyzed by hydroxide ions, produces dicinnamalacetone precipitate. As the solution becomes turbid, an LED and photoresistor measure the change in light transmission from outside the reaction beaker.",
          "When measured turbidity reaches the setpoint, a solid-state relay disconnects power to the motor. For a given competition distance, multivariate basis-function regression and a neural-network model are used to estimate an acetone volume and KOH concentration for the desired stopping distance.",
        ],
      },
      {
        heading: "Steering",
        paragraphs: [
          "A rack-and-pinion mechanism adjusts the front-wheel angle to compensate for drift and keep the car on course.",
        ],
      },
      {
        heading: "Competition Results",
        paragraphs: [
          "At the regional competition on April 18, 2026, hosted by Rochester Institute of Technology, the team placed fourth in the car competition and received second place in the poster competition.",
          "The car also placed 19th at the 2026 AIChE National Conference in Boston.",
        ],
      },
    ],
  },
  {
    slug: "robotic-arm-end-effector",
    title: "Robotic Arm End-Effector",
    description:
      "Designed, developed, and tested a lightweight, high-precision end-effector for the Quanser Q-Arm to automate warehouse package handling",
    image: `${basePath}projects/End-Effector.png`,
    tags: ["CAD", "Python", "McMaster"],
  },
  {
    slug: "lunar-ice-recovery-rover",
    title: "Lunar Ice Recovery Rover",
    description:
      "A rover-based concept for extracting water from lunar ice by drilling, heating ice-bearing regolith, and capturing the resulting vapor.",
    image: `${basePath}projects/Lunar-Ice-Rover-Front.png`,
    tags: ["CAD", "Arduino", "MEC", "McMaster"],
    gallery: [
      {
        image: `${basePath}projects/Lunar-Ice-Rover-Front.png`,
        caption: "Lunar Ice Recovery Rover CAD Model Prototype - Front View.",
      },
      {
        image: `${basePath}projects/Lunar-Ice-Rover-Back.png`,
        caption: "Lunar Ice Recovery Rover CAD Model Prototype - Rear View.",
      },
      {
        image: `${basePath}projects/MPI-1.png`,
        caption: "MPI for Drill Material Selection",
      },
      {
        image: `${basePath}projects/MPI-2.png`,
        caption: "MPI for Heating Chamber Material Selection",
      },
      {
        image: `${basePath}projects/MEC-Presentation.png`,
        caption: "MEC Project Presentation.",
      },
      {
        image: `${basePath}projects/Flare-Photo-1.JPG`,
        caption: "The MEC Team with Flare",
      },
    ],
    video: {
      src: `${basePath}projects/MEC-Demo-Vid.mp4`,
      caption: "Prototype Demonstration of the Lunar Ice Recovery Rover Concept.",
    },
    resources: [
      {
        label: "View the MEC project slides",
        url: "https://docs.google.com/presentation/d/1fsh-0PioD9fvKWG7xdqFDXQkKWk9oaCB2pN5eN2lT2U/edit?usp=sharing",
      },
    ],
    sections: [
      {
        heading: "MEC 2026 Innovative Design Challenge - Project Summary",
        paragraphs: [
          "Our team of 4 students participated in the 2026 McMaster Engineering Competition (MEC) Innovative Design Challenge. This year's challenge was to identify one critical dependency on Earth and develop an innovative engineering solution that would allow a permanent lunar settlement to become more self-sufficient. ",
          "In about 5 hours, we went from brainstorming and research to working prototypes, using SolidWorks for CAD and an Arduino kit for the electronics.",
          "We placed in the top five finalists and presented our design to industry professionals. The judges praised our design process and how we iterated on our prototype."
        ],
      },
      {
        heading: "Problem Definition",
        paragraphs: [
          "A permanent lunar base needs a reliable water supply for its crew and future development. This project explores how a rover could self-sustainably recover water from the Moon and reduce the base's dependence on supplies from Earth.",
        ],
      },
      {
        heading: "Proposed System",
        paragraphs: [
          "Our proposed solution combines a rover-mounted drilling and extraction mechanism using a motor-driven auger which is then attached with a heating chamber and a cold trap. The motor-driven auger gathers ice-bearing regolith; heating releases water vapor, which the cold trap collects and condenses as ice.",
          "To sense regolith and help identify where to begin extraction, our solution encorporates a wheel-based sensor that measures the capacitance to detect differences between ice and lunar regolith."
        ],
      },
      {
        heading: "Engineering Decisions",
        paragraphs: [
          "Material selection was a heavy part of the design process. The auger material must be stiff, hard, crack-resistant and dense, while the heating chamber material must have high fracture toughness and low thermal expansion. Thus we derived the appropriate MPI's and used Granta to select the top 5 materials for each component.",
          "Deciding appropriate power supplies and energy sources was also a significant part of the design process. We decided on solar panels as the primary power source during lunar daylight, while a hydrogen-oxygen fuel cell acted as the auxiliary or backup power."
        ],
      },
      {
        heading: "Prototypes and Demonstration",
        paragraphs: [
          "The project materials include software and hardware prototype demonstrations, CAD model imagery, and a rover demonstration video. The images and video above show the project materials and prototype views.",
        ],
      },
    ],
  },
]
