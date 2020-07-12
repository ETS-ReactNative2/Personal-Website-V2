export function getWinePosts()
{
    const API_KEY="AIzaSyBYAApXCH6flqaRA9DGv4S0SCtmglBXjd4";
    const FILE_ID="1zuS8DXxodnpJtMAWHCR1pN3x3I8G9lM1jzAqfhhCWcI";
    const MIME_TYPE="text/plain";
    const BASE_URL=`https://www.googleapis.com/drive/v2/files/${FILE_ID}/export?key=${API_KEY}&fileId=${FILE_ID}&mimeType=${MIME_TYPE}`;

    let docScrape=fetch(BASE_URL)
        .then(response => response.text())
        .then((data) => processRawText(data))
        .catch((err) => console.log(err));

    return docScrape;
}

function processRawText(txt)
{
    let sectionList=txt.split("\r\n\r\n\r\n");
    let retVal=[];

    for(let sectionId in sectionList)
    {
        let section=sectionList[sectionId];
        let firstSix=section.substr(0,6);

        if(firstSix==="title:")
        {
            retVal.push({"title": section.substring(7),"body": []})
        }
        else
        {
            retVal[retVal.length-1].body.push(section)
        }
    }

    return retVal;
}