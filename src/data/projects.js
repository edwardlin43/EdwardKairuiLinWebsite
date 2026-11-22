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
      "Designed a Lunar Ice Recovery Rover that mines, heats and captures water from regolith for MEC 2026",
    image: `${basePath}projects/Lunar-Ice-Rover.png`,
    tags: ["CAD", "Arduino", "MEC", "McMaster"],
  },
]
