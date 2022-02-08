document.addEventListener("DOMContentLoaded", () => {
    
    const addDogsToPage = (obj) =>  {
        const dogBar = document.getElementById('dog-bar')
        let p = document.createElement('p')
        dogBar.append(p)
        let span = document.createElement('span')
        p.append(span)
        span.innerText = `${obj.name}`
        span.addEventListener('click', () => {
            let dogInfo = document.getElementById('dog-info')
            let h2 = document.createElement('h2')
            dogInfo.append(h2)
            h2.innerText = `${obj.name}`
            let img = document.createElement('img')
            dogInfo.append(img)
            img.src = `${obj.image}`
            let goodBtn = document.createElement('button')
            
            dogInfo.append(goodBtn)
            
            if (obj.isGoodDog = true) {
                goodBtn.innerText = 'Good Dog!'
                goodBtn.className = 'good-dog'
            }
            else if (obj.isGoodDog = false) {
                goodBtn.innerText = 'Bad Dog!'
                goodBtn.className = "bad-dog"
            }

            goodBtn.addEventListener("click",() => {
                console.log("click")
                if (goodBtn.className === "bad-dog") {
                    goodBtn.innerText = "Good Dog!"
                    goodBtn.className ="good-dog"

                }
                else {
                    goodBtn.innerText = "Bad Dog!"
                    goodBtn.className ="bad-dog"
                }
                postDogs(obj.isGoodDog)
                
            })

        })
    }


    const getDogs = () => {
        fetch("http://localhost:3000/pups")
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            data.forEach(dog => {
            addDogsToPage(dog)
            });
        })
    }
    getDogs()

    const postDogs = (obj) => {
        fetch("http://localhost:3000/pups/pups/:id", {
            method: "PATCH",
            headers: {
                'Content-Type': 'application.json'
            },
            body: JSON.stringify(obj)
        })
        .then(resp => resp.json())
        .then(data => console.log(data))

    }

})