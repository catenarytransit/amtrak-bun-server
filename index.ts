import express from 'express';

const app = express();

app.get('/amtrakstatus',async (req:express.Request, res:express.Response) => {
  // Access query parameters
  const trainnum = req.query.trainnum;
  const starting_date = req.query.starting_date;

  console.log(trainnum, starting_date);

  let resp = await fetch("https://www.amtrak.com/dotcom/travel-service/statuses/4?service-date=2024-05-14", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/json",
    "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-amtrak-trace-id": "324613984d4d94427c485b645ee5cac6c76f1715598590544",
    "cookie": "_pin_unauth=dWlkPVlqSXpNekUyWTJJdE1tTm1aaTAwWWpReExXSTBPR010TURobE5ETmpObVJtWTJSaQ; _gcl_au=1.1.1528459639.1710441762; _ga=GA1.2.974994175.1710441764; OptanonAlertBoxClosed=2024-03-14T18:42:47.755Z; at_check=true; AMCVS_2909B74F57B49A137F000101%40AdobeOrg=1; _gid=GA1.2.568845230.1715400190; ats-cid-AM-141529-sid=06389637; mdLogger=false; s_cc=true; _abck=2255F8BDF256664125E83E3544315452~0~YAAQhPfVF9zFUW6PAQAAbCL4cAtC9Wzf14C6qaRsnKloyl0094tmODXq4v7MhnAwfh+8RCEhz2HyaiIR5kdKlYSs6dpQA+RSqe8iHFBGq4/sMtH+t8M4QT9d/kZdzuPgCHuvz14Zl3A7ff6BZqemxujprlnDzqcAxjLe0Ma3BMnbii9rFawv5A9O9imQ4x6jPmDZq8F09l0EDw62ihTjnDovcwuRiRM57XRRj2N3zcNbIEG70GRtDg8jXmZ1k/lTz5Fo7jpZRULDhXeZgEvvSZ2u3tU/RK5ydwccSMTbtIBD2Pr60DnXwcwAJKrI8YgbwN5rNwwCffMlyiMIKSqdOI59mpDZh09shelyU4xkL+9ouTyFyy/WsGAetqNy0ubNvDzhlmqlsvmSQjPJ9gNCoCv6XPJgnsx8~-1~-1~-1; NITAlmeUser={%22Conversation.UserId%22:%22b4bf7faa-de22-495d-8697-dd28765cade2%22}; bm_mi=5F8176ACE09FE27E762DDBC8947C5556~YAAQk/fVFx1zr1GPAQAAoLx6cRcjqLDt6yM4kNootT9ijf/adNBJWVnmyyKNzafXUcZxtVmhhZtyxwXT+cmrCFg4V1LFwdullMtkMYPQTkdqFDbigB0N/xVBpjVkLZ5wUuEoCBFPW4Jk6HR3V5cVeOoae+D2kDETAgaTcPFbIWYqUvgHo+W6OWQimLPFo5K86t04zJrlBbepDmaFkCpvhvC0ZdSmQA0j9/Amu8uSCqRtrwhTtC8cYW56k4gfEsn/fdhZ3PuSrHVzdB90n5IfU5wIBrv7PIPNP1OXuTZAzbiiK8PiYHdnHXp0IXcHAQNHyis2EgoLjdcl0CgRp7usuAY=~1; ak_bmsc=95A2660733A2142389A741F31D0411D6~000000000000000000000000000000~YAAQk/fVFz1zr1GPAQAAIMd6cRfvFXsKw+V4QBGSGuT7WJZbDjwdHFnLi13+jFJMukIowyOseIs68HC9k4J2IOHEiWfNbCrM/rey1JIYnxbBiXOepz49N9HFxNN73oBqwmTz8EYb86qBTH+CXHJM5dE7iEsRxWqegiQPD6QDvVIG7GQSriEI14mlU/oUPs5p0cPg/dmywScF4apm+V5k+2ahBG6iFjNrIwd2bS4zVPVlwwWxpcoritlnglGNLur9c3aaVwZww/9mE/VZSHd3ImtSxzYaClFYNEVD2appf7afYM/u9OVXb5xAdwFGNQ/4ZrsWvsAGAT3TecUYqB9INsF4lzWz6686CEd3tDjaf6k14IAGpc1CP8lWTyrZL3UBpaLGJpT8TXW2BSvJYwZ+qrY3/1soCteiOpAFUEnL24bGp2ZK0tJE94T8tQ0kCe12w/fU1Q2h2hP7jjafcrL9DWczKMF3eqmMilYkMxXIQp6lw0jp9wXqHqmT90zd9yYCIi++QqDql0Pr+dEVlnWW8F0=; AMCV_2909B74F57B49A137F000101%40AdobeOrg=179643557%7CMCMID%7C78937028747888993960383752020801057418%7CMCAAMLH-1716200623%7C9%7CMCAAMB-1716200623%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1715603023s%7CNONE%7CvVersion%7C5.5.0%7CMCIDTS%7C19857; _fbp=fb.1.1715596362192.758896141; NITAlme={%22CommandAction.PageLoadActions%22:[]%2C%22Conversation.IsActiveSession%22:true%2C%22Conversation.SessionId%22:%2281ef96c6-acf4-42ef-9de1-9dce74900181%22%2C%22Window.Position%22:{%22xPos%22:436%2C%22yPos%22:285}%2C%22FormInteraction.EntryId%22:%2251ce3738-bd84-4c12-90bd-392d013e2dd5%22}; s_sq=amtdigprod%252Camtdigglobalprod%3D%2526c.%2526a.%2526activitymap.%2526page%253DAmtrak-Reservations-TrainStatus%2526link%253DRefresh%2526region%253Dpage-content%2526pageIDType%253D1%2526.activitymap%2526.a%2526.c%2526pid%253DAmtrak-Reservations-TrainStatus%2526pidt%253D1%2526oid%253D%252520Refresh%2526oidt%253D3%2526ot%253DSUBMIT; bm_sz=E5A4BB697CB0905CD567E70875D6D6A9~YAAQk/fVF/6Sr1GPAQAAIzmmcRcmoKEJk/NoY+IdOYgRySiB/CU6cES9X//Doabpr2lOC5lAFK1Vuhjh8mPrWLV6YPYjBuOo4pQBMVrDw5cUs7jVjqBohk0laWJzwcUCogd6hfn4I9whMGrWzX5jVJrGrPSwO6dH+sXTzp1BfGztBqbbPi/BMkf38V14+bd4Y4DuikAek9fCnv3dw+x2gS2sO8EvMKfzwbj0wHv23nkEWcIOfYEbsSqdCUZq0f/PQfG5Tm7T2iwDptcGuhM6iA7GCzujr0AVSF7nWmQCSoLSH2cB4GlhdfwE/IgBlTSn45kmUiVv9X6rR0ilvwFbPUzV5Ts49fhpinM7KYKWdU1m+/XQVh0p6dnWRwQxXhCNYyIp5RsvntTJ6TWUOATVgMHfn7FFFl3Dbd5OWBYZcu4vg9XnqgOWxFY8yjLNdV+cWsHo5H6ZeZli3bRcVDD/YWA8RKErvtzca4szaxE51NWW9CcTzLt/lAbAramrp1hV/bpybUlcuLj54ALbGoUpcwCSdWRupHjf8HGzp4UiPH/2IL5zJS7Hw66Xz6jBWi5w~3688005~3491384; _rdt_uuid=1710441762340.9d0ffc4b-41d0-468b-95dd-1f4b56c8a0c9; mbox=PC#d3f1cbd47dfc4b20bed06dd0b61af0a9.35_0#1778843471|session#2132f5b4a10e4690bdbd15c9fd720cdc#1715600531; _uetsid=611621500f4b11ef8c1f5d08064b5c53; _uetvid=4ba077e0170011eeb09563ba5684d7ce; _derived_epik=dj0yJnU9N19BeW5Ud25sTGtpeDVxYzlaanowYWJkYVNuTXk2UTImbj05ejRNTjctS1R1VkhEMFNlZUk1b19nJm09ZiZ0PUFBQUFBR1pCOVU4JnJtPWYmcnQ9QUFBQUFHWkI5VTgmc3A9Mg; OptanonConsent=isGpcEnabled=0&datestamp=Mon+May+13+2024+04%3A11%3A11+GMT-0700+(Pacific+Daylight+Time)&version=202311.1.0&isIABGlobal=false&hosts=&consentId=abaf7e8b-d120-4c52-af3b-c837b6e94c06&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0004%3A1%2CC0002%3A1%2CC0003%3A1&geolocation=US%3BCA&AwaitingReconsent=false&browserGpcFlag=0; s_getNewRepeat=1715598671414-Repeat; gpv_v9=no%20value; kampyleUserSession=1715598671767; kampyleUserSessionsCount=99; kampyleSessionPageCounter=1; s_ptc=0.00%5E%5E0.00%5E%5E0.00%5E%5E0.00%5E%5E0.04%5E%5E0.00%5E%5E7.86%5E%5E0.03%5E%5E7.95; bm_sv=B248D6174600B6A95BB737F2E7C16146~YAAQk/fVF9qUr1GPAQAAgriocRdjVx0TugHbWVxNgIl2rVmuv0sE0rZNQ/h6hz2D59i+TUkA1oYrCprbAthTiN1HoU9bHSfF5MZ6SnrRhc40SFr3NKHQL3nS1uU78astWLCit10K2fchxGULJ//CvWqPwMfQ99valce4oUV0lxtQIUYpo+KMTvztrTuY6AsZwb7NrLwgi9rAAQ8sRbvq7s7XB2PedFAZSYsCa7Nbrt7pEXq2KVOqFipoEsNnT64zl8c=~1",
    "Referer": "https://www.amtrak.com/tickets/train-status.html",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});
    //console.log(resp);
    const data = await resp.text();

    res.send(data);
});

app.listen(12388, () => {
  console.log('Server listening on port 12388');
});