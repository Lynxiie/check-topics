const kantoLinks = {
    "Bourg Palette": "https://master-poke.forumactif.fr/f93-bourg-palette",
    "Routes 1 & 2": "https://master-poke.forumactif.fr/f105-routes-1-2",
    "Jadielle": "https://master-poke.forumactif.fr/f94-jadielle",
    "Routes 22": "https://master-poke.forumactif.fr/f107-route-22",
    "Foret de Jade": "https://master-poke.forumactif.fr/f108-foret-de-jade",
};

const johtoLinks = {

};

const hoennLinks = {

};

const sinnohLinks = {

};

const unysLinks = {

};

const kalosLinks = {

};

const alolaLinks = {

};

const galarLinks = {

};

const paldeaLinks = {

};

const mtLinks = {

};

const almiaLinks = {

};

const hqLinks = {

};

const pnjNames = ["Mister MP", "Mister J", "Mister K", "Mister L"];

async function scrapeData(value, key) {
    const data = [];

    try {
        const response = await fetch(value);
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const rows = doc.querySelectorAll('tr:has(div.topictitle)');



        rows.forEach(function(row) {
            const principalTd = row.querySelector('div.topictitle')
            const topicName = principalTd.querySelector('a.topictitle').innerText
            const creatorName = principalTd.querySelector('span.name span').innerText

            if (creatorName === 'Mister MP')
                return

            const infoCompl = principalTd.querySelector('span.genmed')?.innerText

            const lastResponseTd = row.querySelector('span.list_topics')
            const lastResponseName = lastResponseTd.querySelector('strong').innerText

            if (pnjNames.includes(lastResponseName))
                return

            const lastResponseDate = lastResponseTd.firstChild.nodeValue.trim()
            const lastResponseLink = lastResponseTd.querySelector('a').getAttribute('href')

            data.push([topicName, creatorName, lastResponseName, infoCompl, lastResponseDate, lastResponseLink])
            console.log(topicName, creatorName, infoCompl, lastResponseName, lastResponseDate, lastResponseLink)

        });

        const tbody = document.getElementById('table-content')
        const row = tbody.insertRow();
        const cell = row.insertCell();
        cell.colSpan = 6;
        cell.textContent = key;

        if (data.length === 0) {
            const row = tbody.insertRow();
            const cell = row.insertCell();
            cell.colSpan = 6;
            cell.textContent = "Aucun sujet";
        } else {
            data.forEach(rowData => {
                const row = tbody.insertRow();
                rowData.forEach(cellData => {
                    const cell = row.insertCell();
                    cell.textContent = cellData;
                });
            });
        }
    } catch (error) {
        console.log(error);
    }
}

async function toto(dict) {
    let tableBody = document.querySelector('tbody');
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
    
    for (let key in dict) {
        await scrapeData(dict[key], key);
    }
}