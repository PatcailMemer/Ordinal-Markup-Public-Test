const achieveData = [
  {
    unlockReq: () => true,
    achieve: [
      () => game.ord >= 1,
      () => game.ord >= 10 || (game.ord == 9 && game.over >= 1),
      () => game.ord >= game.base**2,
      () => game.ord >= game.base**game.base,
      () => game.ord >= 4e270,
      () => game.ord >= (3**12 * 4) * 1e270,
      () => game.ord >= (3**25 * 4) * 1e270,
      () => game.ord >= BHO,
      () => game.ord > BHO*2,
      () => game.ord >= BHO*342
    ],
    name: [
      "You gotta start somewhere",
      "Maximizable",
      "Markupable",
      "Hyperdimensional",
      "Ordinal Collapsing Functions",
      "Ackermann Ordinal",
      "Double Ackermann Ordinal",
      "The Bachmann Howard Ordinal",
      "To the BHO and Beyond!",
      "Ackermann's BHO"
    ],
    tooltip: [
      "Click the successor Button",
      "Reach the ordinal 10",
      "Reach the ordinal ω^2",
      "Reach the ordinal ω^ω",
      "Reach the ordinal Ψ(Ω)",
      "Reach the ordinal Ψ(Ω^Ω^2)",
      "Reach the ordinal Ψ(Ω^(Ω^2×2))",
      "Reach the ordinal Ψ(Ω^Ω^Ω)=BHO",
      "Exceed the BHO limit",
      "Reach the ordinal Ψ(ε(Ω2)^Ω^2)",
    ]
  },
  {
    unlockReq: () => game.infUnlock==1,
    achieve: [
      () => game.factors[0]>=0.5,
      () => game.factors[1]>=0.5,
      () => game.factors[2]>=0.5,
      () => game.factors[3]>=0.5,
      () => game.factors[4]>=0.5,
      () => game.factors[5]>=0.5,
      () => game.factors[6]>=0.5,
      () => factorMult>=5e6,
      () => factorMult>=5e8,
      () => factorMult>=5e12
    ],
    name: [
      "I've been Multiplied!",
      "100 Ordinal Points is a lot",
      "Illuminati Confirmed!",
      "Left and Right 3 Factors",
      "5 Factor Ordinal Punch",
      "We can't afford 8",
      "Luck Related Achievement",
      "Faster than a potato",
      "Faster than a hundred potatoes",
      "Faster than a million potato",
    ],
    tooltip: [
      "Buy a Factor 1",
      "Buy a Factor 2",
      "Buy a Factor 3",
      "Buy a Factor 4",
      "Buy a Factor 5",
      "Buy a Factor 6",
      "Buy a Factor 7",
      "Get a 5e6x multiplier from Factors",
      "Get a 5e8x multiplier from Factors",
      "Get a 5e12x multiplier from Factors",
    ]
  },
  {
    unlockReq: () => game.boostUnlock==1,
    achieve: [
      () => game.factorBoosts>=1,
      () => game.factorBoosts>=5,
      () => game.factorBoosts>=15,
      () => game.factorBoosts>=25,
      () => game.factorBoosts>=100,
      () => game.factorBoosts>=1e3,
      () => game.factorBoosts>=1e6,
      () => game.factorBoosts>=1e9,
      () => game.factorBoosts>=1e15,
      () => game.factorBoosts>=1e21,
    ],
    name: [
      "Boost!",
      "Booster Pack",
      "Super Boost",
      "Collapsing Boosts",
      "One for each achievement",
      "Kiloboost",
      "Megaboost",
      "Gigaboost",
      "Petaboost",
      "Zettaboost",
    ],
    tooltip: [
      "Perform 1 Factor Boost",
      "Perform 5 Factor Boosts",
      "Perform 15 Factor Boosts",
      "Perform 25 Factor Boosts",
      "Perform 100 Factor Boosts",
      "Perform 1000 Factor Boosts",
      "Perform 1e6 Factor Boosts",
      "Perform 1e9 Factor Boosts",
      "Perform 1e15 Factor Boosts",
      "Perform 1e21 Factor Boosts",
    ]
  },
  {
    unlockReq: () => game.upgrades.includes(4),
    achieve: [
      () => game.challengeCompletion[0]>=1,
      () => game.challengeCompletion[1]>=1,
      () => game.challengeCompletion[2]>=1,
      () => game.challengeCompletion[3]>=1,
      () => game.challengeCompletion[4]>=1,
      () => game.challengeCompletion[5]>=1,
      () => game.challengeCompletion[6]>=1,
      () => game.chal8Comp>=1,
      () => getSumOfChallenges() >= 24,
      () => (inChal(3)&&game.ord>=game.base**(game.base**game.base)),
    ],
    name: [
      "Easy",
      "Medium",
      "Hard",
      "Difficult",
      "Challenging",
      "Brutal",
      "Mega Brutal",
      "Impossible",
      "The Challenging Day",
      "That's impossible in base 4",
    ],
    tooltip: [
      "Complete Challenge 1",
      "Complete Challenge 2",
      "Complete Challenge 3",
      "Complete Challenge 4",
      "Complete Challenge 5",
      "Complete Challenge 6",
      "Complete Challenge 7",
      "Complete Challenge 8",
      "Complete 24 challenges in total",
      "Reach ω^(ω^ω) in Challenge 3",
    ]
  },
  {
    unlockReq: () => game.upgrades.includes(12),
    achieve: [
      () => game.manifolds>=1,
      () => game.manifolds>=2,
      () => game.manifolds>=4,
      () => game.manifolds>=8,
      () => game.manifolds>=16,
      () => game.manifolds>=32,
      () => game.manifolds>=64,
      () => game.manifolds>=128,
      () => game.manifolds>=256,
      () => game.manifolds>=398,
    ],
    name: [
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
    ],
    tooltip: [
      "Have 1 manifold",
      "Have 2 manifolds",
      "Have 4 manifolds",
      "Have 8 manifolds",
      "Have 16 manifolds",
      "Have 32 manifolds",
      "Have 64 manifolds",
      "Have 128 manifolds",
      "Have 256 manifolds",
      "Have 398 manifolds",
    ]
  },
  {
    unlockReq: () => game.collapseUnlock==1,
    achieve: [
      () => game.aups.length >= 1,
      () => game.aups.length >= 2,
      () => game.aups.length >= 3,
      () => game.aups.length >= 4,
      () => game.aups.length >= 5,
      () => game.aups.length >= 6,
      () => game.aups.length >= 7,
      () => game.aups.length >= 8,
      () => game.aups.length >= 9,
      () => game.aups.length >= 10
    ],
    name: [
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
    ],
    tooltip: [
      "Buy 1 aleph upgrade",
      "Buy 2 aleph upgrades",
      "Buy 3 aleph upgrades",
      "Buy 4 aleph upgrades",
      "Buy 5 aleph upgrades",
      "Buy 6 aleph upgrades",
      "Buy 7 aleph upgrades",
      "Buy 8 aleph upgrades",
      "Buy 9 aleph upgrades",
      "Buy 10 aleph upgrades",
    ]
  },
  {
    unlockReq: () => game.collapseUnlock==1,
    achieve: [
      () => calcSlugMile() >= 1,
      () => calcSlugMile() >= 2,
      () => calcSlugMile() >= 3,
      () => calcSlugMile() >= 4,
      () => calcSlugMile() >= 5,
      () => calcSlugMile() >= 6,
      () => getBaseless() >= 1,
      () => getBaseless() >= 2,
      () => getBaseless() >= 3,
      () => getBaseless() >= 4
    ],
    name: [
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
    ],
    tooltip: [
      "Complete 1 Sluggish Milestone",
      "Complete 2 Sluggish Milestone",
      "Complete 3 Sluggish Milestone",
      "Complete 4 Sluggish Milestone",
      "Complete 5 Sluggish Milestone",
      "Complete 6 Sluggish Milestone",
      "Complete 1 Baseless Milestone",
      "Complete 2 Baseless Milestone",
      "Complete 3 Baseless Milestone",
      "Complete 4 Baseless Milestone",
    ]
  },
  {
    unlockReq: () => game.leastBoost <= 1.5,
    achieve: [
      () => getSingLevel().toNumber()>=2,
      () => getSingLevel().toNumber()>=4,
      () => getSingLevel().toNumber()>=8,
      () => getSingLevel().toNumber()>=16,
      () => getSingLevel().toNumber()>=32,
      () => getSingLevel().toNumber()>=64,
      () => getSingLevel().toNumber()>=128,
      () => getSingLevel().toNumber()>=256,
      () => getSingLevel().toNumber()>=512,
      () => getSingLevel().toNumber()>=616,
    ],
    name: [
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
      "PLACEHOLDER",
    ],
    tooltip: [
      "Reach Singularity Level 2",
      "Reach Singularity Level 4",
      "Reach Singularity Level 8",
      "Reach Singularity Level 16",
      "Reach Singularity Level 32",
      "Reach Singularity Level 64",
      "Reach Singularity Level 128",
      "Reach Singularity Level 256",
      "Reach Singularity Level 512",
      "Reach Singularity Level 616",
    ]
  }
]

function setAchieveText() {
for (let row in achieveData) {
  let rowData = achieveData[row]
  for (let col in rowData.achieve) {
    let elem = get("achievementTable").children[0].children[row].children[col]
    elem.textContent=rowData.name[col]
    elem.attributes.tooltip.value=rowData.tooltip[col]
  }
}
  updateAchieveColor()
}

function checkAchieve() {
  let achieveGain = false
  for (let row in achieveData) {
    let rowData = achieveData[row]
    let numberrow = Number(row)
    if ((!game.achieveRow.includes(numberrow+1))&&(rowData.unlockReq()||(numberrow<=7&&(game.incrementyverse==1)))) {
      game.achieveRow.push(numberrow+1)
      $.notify("New Achievement Row Unlocked: " + ["Ordinal","Factors","Factor Boosts","Challenges","Manifolds","Aleph Upgrades","Milestones","Singularity"][row],"achieve")
      achieveGain = true
    }
    if (game.achieveRow.includes(numberrow+1)) {
      for (let col in rowData.achieve) {
        let numbercol = Number(col)
        let achieveId=numberrow*10+numbercol+1
        if ((!game.achievement.includes(achieveId))&&(rowData.achieve[col]()||(achieveId<=80&&(game.incrementyverse==1)))) {
          game.achievement.push(achieveId)
          $.notify("New Achievement Unlocked: " + rowData.name[col],"achieve")
          achieveGain = true
        }
      }
    }
  }
  if (achieveGain) {
    updateAchieveColor()
  }
  get("achieveTotal").textContent=game.achievement.length
  get("nextRowAchieve").textContent = 
    [
    "Unlock",
    "Perform a Markup to unlock the next row of achivements",
    "Perform 8 Factor Shifts to unlock the next row of achivements",
    "Unlock Challenges to unlock the next row of achivements",
    "Extend Incrementy to unlock the next row of achivements",
    "Unlock the next layer to unlock the next row of achivements",
    "Unlock the next layer to unlock the next row of achivements",
    "Get all of the sluggish milestones to unlock the next row of achivements",
    "Enter the Portal and have 80 achievements to unlock the next row of achievements",
    "Unlock Base 2 to unlock the next row of achievements",
    "You unlocked the last set of achievements. Now get them all to beat the game!"
  ][game.achieveRow.length]
}

function updateAchieveColor() {
  for (let row=0;row<8;row++) {
    if (game.achieveRow.includes(row+1)) {
      get("achievementTable").children[0].children[row].style.display=""
      for (let col=0;col<10;col++) {
        get("achievementTable").children[0].children[row].children[col].style.background=(game.achievement.includes(row*10+col+1)?"green":"grey")
      }
    } else {
      get("achievementTable").children[0].children[row].style.display="none"
    }
  }
}