const spreadsheetId = "1JrNuM-nHAQVcMeGLWnLpYL8PQ62HQN6mS60lRNH4Vy0"
const sheetId = "0"
const sheetUrl = "https://docs.google.com/spreadsheets/d/"+spreadsheetId+"/edit#gid="+sheetId

const fetchSheet = () => {
    console.log(sheetUrl)
    fetch(sheetUrl, {
        method: "GET",
        contentType: "text"
    }).then((res) => {
        return res.json()
    })
    .then((data) =>{
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })
    return;
}

module.exports = fetchSheet