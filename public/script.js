(async function(window, document) {

		//get the data from json file
    const data = await fetch("public/data.json").then(res => res.json()).catch(err => console.log(err))

    if (document.getElementById("chart")) {
        const chart = document.getElementById("chart")

        data.forEach(item => {
            const row = document.createElement("div")
            let content = document.createElement("p")
            content.innerHTML = `<b>${item.country}</b> <br>GDP: $${item.gdp} trillion `
            const bar = document.createElement("span")
            bar.style.width = calcBarLength(item.gdp) + "px"

            //deploy nodes to HTML
            row.appendChild(content)
            row.appendChild(bar)
            chart.appendChild(row)
        })
    }

    function calcBarLength(number) {
        if (window.innerWidth > 620) {
            return (number * 500) / 20
        } else {
            return (number * 300) / 20
        }
    }

})(window, document)
