let data = [
    {
        "title": "Work",
        "timeframes": {
          "daily": {
            "current": 5,
            "previous": 7
          },
          "weekly": {
            "current": 32,
            "previous": 36
          },
          "monthly": {
            "current": 103,
            "previous": 128
          }
        }
      },
      {
        "title": "Play",
        "timeframes": {
          "daily": {
            "current": 1,
            "previous": 2
          },
          "weekly": {
            "current": 10,
            "previous": 8
          },
          "monthly": {
            "current": 23,
            "previous": 29
          }
        }
      },
      {
        "title": "Study",
        "timeframes": {
          "daily": {
            "current": 0,
            "previous": 1
          },
          "weekly": {
            "current": 4,
            "previous": 7
          },
          "monthly": {
            "current": 13,
            "previous": 19
          }
        }
      },
      {
        "title": "Exercise",
        "timeframes": {
          "daily": {
            "current": 1,
            "previous": 1
          },
          "weekly": {
            "current": 4,
            "previous": 5
          },
          "monthly": {
            "current": 11,
            "previous": 18
          }
        }
      },
      {
        "title": "Social",
        "timeframes": {
          "daily": {
            "current": 1,
            "previous": 3
          },
          "weekly": {
            "current": 5,
            "previous": 10
          },
          "monthly": {
            "current": 21,
            "previous": 23
          }
        }
      },
      {
        "title": "Self Care",
        "timeframes": {
          "daily": {
            "current": 0,
            "previous": 1
          },
          "weekly": {
            "current": 2,
            "previous": 2
          },
          "monthly": {
            "current": 7,
            "previous": 11
          }
        }
      }
]

const buttons = document.querySelectorAll('.activity-option')

const activateClickedButton = (button) => {
    buttons.forEach(b => b.classList.remove('active'))
    button.classList.add('active')
}

const clearActivities = () => {
    const activities = document.querySelectorAll('.all-card')
    activities.forEach(a => a.remove())
}

const renderCards = (clickedOption) => {
  clearActivities()
    const activityUser = document.querySelector('div.card')

    const calcTimeframe = (option) => {
        if (option === 'daily') {
            return 'Yesterday'
        } else if(option === 'weekly') {
            return 'Last Week'
        } else if (option === 'monthly') {
            return 'Last Month'
        }
    }

    data.forEach(activity => {
        const name = activity.title
        const activityClass = name.toLowerCase().replace(' ', '-')
        const timeFrameData = activity.timeframes[clickedOption]
        const previousTimeframe = calcTimeframe(clickedOption)
        const section = document.createElement('section')
        section.classList.add('all-card', activityClass)
        const stringToInject = `<div class="bg-img">
                <img src="images/icon-${activityClass}.svg" alt="">
              </div>
              <div class="bg-dark-blue">
                <div class="titles">
                  <p>${name}</p>
                  <img class="icon-ellipsis" src="images/icon-ellipsis.svg" alt="icon-ellipsis">
                </div>
                <div class="time">
                    <span>${timeFrameData.current}hrs</span>
                    <p>${previousTimeframe} - ${timeFrameData.previous}hrs</p>
                </div>
              </div>`
        section.innerHTML = stringToInject
        activityUser.append(section)
    });
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        activateClickedButton(button)
        const clickedOption = button.dataset.option 
        renderCards(clickedOption)
    })
})

buttons[1].click()
