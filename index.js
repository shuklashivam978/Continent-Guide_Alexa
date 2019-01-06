"use strict";
var Alexa = require("alexa-sdk");

const byesayings = ['Bye, see you soon', 'Okay, bye', 'Great to help you, bye', 'have a good day', 'Okay, hope to see you soon', 'Visit again, bye', 'glad to help you, bye'];
const greetings = ['Hello, Welcome to Continents Guide, I will help you to choose your travel destination', 'Welcome, to Continents Guide here you will get the Best 5 travel destinations for a every continents'];

var handlers = {
    'LaunchRequest': function () {



        const speechOutput = 'Hello world!';
        const repromptSpeech = 'Hello again!';
        const cardTitle = 'Continents Guide';
        const cardContent = `Happy to help you to choose your travel destination`;


        this.response.speak(randomgreet(greetings) + ` <break time = "1s" />Please first select a  continent.`)
            .listen("say something, for example:Asia")
            .shouldEndSession(false);
        this.emit(':responseReady');

    },
    'AMAZON.StopIntent': function () {
        this.response.speak('Ok, see you again soon.');
        this.emit(':responseReady');
    },

    'ContinentIntent': function () {
        //   let conStat = this.event.request.intent.slots.language.confirmationStatus;
        if (!this.event.request.intent.slots ||
            !this.event.request.intent.slots.continents ||
            !this.event.request.intent.slots.continents.resolutions ||
            !this.event.request.intent.slots.continents.resolutions.resolutionsPerAuthority[0] ||
            !this.event.request.intent.slots.continents.resolutions.resolutionsPerAuthority[0].status.code) {
            this.response.speak(`sorry, i didn't get it. try again and be more specific`).listen(`say something for example:Asia or just say "help"`).shouldEndSession(false);
            this.emit(':responseReady');

        }
        else {
            let statusCode = this.event.request.intent.slots.continents.resolutions.resolutionsPerAuthority[0].status.code;

            if (!this.event.request.intent.slots.continents.value) {
                this.response.speak(`sorry, i didn't get it. try again and be more specific and use one or two words if possible`).listen(`say something for example: Asia or just say "help"`).shouldEndSession(false);
                this.emit(':responseReady');
            }

            else {
                let statusCode = this.event.request.intent.slots.continents.resolutions.resolutionsPerAuthority[0].status.code;

                if (statusCode == 'ER_SUCCESS_NO_MATCH') {
                    this.response.speak(`sorry, i didn't get it. try again and be more specific`).listen(`say something for example: Asia or just say "help"`).shouldEndSession(false);
                    this.emit(':responseReady');
                }
                else {
                    var slot = this.event.request.intent.slots.continents.resolutions.resolutionsPerAuthority[0].values[0].value.id.toLowerCase();
                    let statusCode = this.event.request.intent.slots.continents.resolutions.resolutionsPerAuthority[0].status.code;

                    if (slot == 'asia') {
                        this.attributes.continentsSelected = 'asia';
                        this.response.speak(`1.Hong Kong : It is an autonomous territory, and former British colony, in southeastern China.
                                         2.Maldives : This far-flung destination, miles from civilization in the Indian Ocean.
                                         3.Tokyo : Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.
                                         4.Phuket : a rainforested, mountainous island in the Andaman Sea.
                                         5.Bali : an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. <break time = "1s" /> Please select another continent or just say help.
                        `).listen(`say something for example: Asia or just say "help"`)
                            .shouldEndSession(false);
                        this.emit(':responseReady');

                    }
                    else if (slot == 'africa') {
                        this.attributes.continentsSelected = 'africa';
                        this.response.speak(`1. The Maasai Mara National Reserve, Kenya : it is a wonderland of spectacular scenery, colorful culture and unparalleled wildlife-spotting opportunities.
                                         2. Victoria Falls, Zambia :  is defined by plunging, roaring water falling beneath a mystical veil of spray.
                                         3. Pyramids of Giza, Egypt : represent one of man's greatest architectural feats.
                                         4. Djenné, Mali :is one of sub-Saharan Africa's oldest cities. 
                                         5. Mount Kilimanjaro, Tanzania : as one of the best destinations for adventure travel <break time = "1s" /> Please select another continent or just say help.
                    `).listen(`say something for example:Asia or just say "help"`).shouldEndSession(false);
                        this.emit(':responseReady');

                    }
                    else if (slot == 'northamerica') {
                        this.attributes.continentsSelected = 'North America';
                        this.response.speak(`1.  Canyonlands National Park, USA: is an authentic playground of rivers, canyons, mesas, and arches.
                                         2.  Sima de las Cotorras, Mexico : there’s a 500ft.-wide sinkhole full of ancient cave paintings and wild parrots
                                         3.  Horseshoe Bend, USA : As one of the most famous stops along the Colorado River’s path through Arizona
                                         4.  Athabasca Glacier, Canada: is one of the six principal 'toes' of the Columbia Icefield, located in the Canadian Rockies.
                                         5.  Crowsnest Pass, Canada :  is one of the most beautiful stops along Canada’s Continental Divide <break time = "1s" /> Please select another continent or just say help.
                    `).listen(`say something for example:Asia or just say "help"`).shouldEndSession(false);
                        this.emit(':responseReady');

                    }
                    else if (slot == 'southamerica') {
                        this.attributes.continentsSelected = 'South America';
                        this.response.speak(`1.Salar de Uyuni, Bolivia : is the world’s largest salt flat, at over 10,000 square kilometers.
                                         2. Angel Falls, Venezuela : is one of the most breathtaking place.
                                         3. Machu Picchu, Perú : is most famous archaeological places in South America.
                                         4.Rio de Janeiro, Brazil : it offers nice beaches and crazy parties 
                                         5. Cotopaxi National Park, Ecuador : one of the biggest attractions in Ecuador  <break time = "1s" /> Please select another continent or just say help.
                    `).listen(`say something for example:Asia or just say "help"`).shouldEndSession(false);
                        this.emit(':responseReady');

                    }
                    else if (slot == 'antarctica') {
                        this.attributes.continentsSelected = 'Antarctica';
                        this.response.speak(`1.Antarctic Peninsula : is a pristine wilderness of snow and ice home to a wide variety of polar wildlife
                                         2.South Shetland Islands : are one of the frozen continent's most visited sites
                                         3.Drake Passage : offers the shortest and most historical route to Antarctica proper.
                                         4.Falkland Islands : Isolated and sparsely populated with striking rural scenery and impressive wildlife populations
                                         5.South Georgia : is the South Sandwich Islands is a British Overseas Territory.
                    <break time = "1s" /> Please select another continent or just say help.`).listen(`say something for example:Asia or just say "help"`).shouldEndSession(false);
                        this.emit(':responseReady');

                    }
                    else if (slot == 'europe') {
                        this.attributes.continentsSelected = 'Europe';
                        this.response.speak(`1.Paris : is filled with highly regarded museums, monuments and churches.
                                         2.Rome : is The aroma of fresh Italian cooking wafts through alleys, and historical sites sit at every turn.
                                         3.London : Here Explore the world-class British Museum, seeing a musical in the West End
                                         4.Florence : Get the top-notch museums, quaint hotels, stunning architecture and mouthwatering cuisine
                                         5.Venice :conjure up images of romantic gondola rides down the Grand Canal, but this European city isn't only for swooning lovebird.
                    <break time = "1s" /> Please select another continent or just say help.`).listen(`say something for example:Asia or just say "help"`).shouldEndSession(false);
                        this.emit(':responseReady');

                    }
                    else if (slot == 'australia') {
                        this.attributes.continentsSelected = 'Australia';
                        this.response.speak(`1.Sydney : is a modern city with a long history.
                                         2.Great Barrier Reef : One of the top destinations for underwater explorers and scuba divers
                                         3.Alice Springs : is comprised of cavernous gorges, boundless desert landscapes, remote Aboriginal communities and a charming pioneering history
                                         4.Cairns: is one of Australia’s most popular vacation destinations.
                                         5. Melbourne :  for its shopping, fine restaurants and sports venues
                    <break time = "1s" /> Please select another continent or just say help.`).listen(`say something for example:Asia or just say "help"`).shouldEndSession(false);
                        this.emit(':responseReady');

                    }
                    else if (slot == '') {
                        this.response.speak(`you have not selected any continent`);
                        this.emit(':responseReady');
                    }
                    else if (!slot) {
                        this.response.speak(`you have not selected any continent`);
                        this.emit(':responseReady');
                    }


                    else {
                        this.response.speak(`sorry, i didn't get it. try again and be more specific`).listen(`say something for example:Asia or just say "help"`).shouldEndSession(false);
                        this.emit(':responseReady');
                    }
                }

            }
        }
    },

    'Unhandled': function () {
        this.response.speak(`Sorry, I didn't get it. Please try again or ask for help`).shouldEndSession(false);
        this.emit(':responseReady');
    },

    'AMAZON.CancelIntent': function () {


        this.response.speak(randomPhrase(byesayings))
            .listen("say something, for example:Asia or Antartica or ask for help")
            .shouldEndSession(true);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {


        this.response.speak(randomPhrase(byesayings))
            .listen("say something, for example:Asia or Antartica or ask for help")
            .shouldEndSession(true);
        this.emit(':responseReady');
    },

    'AMAZON.HelpIntent': function () {
        const speechOutput = 'Hello world!';
        const repromptSpeech = 'Hello again!';
        this.response.speak(`Here you can get the 5 best tourist attraction for every continent. So tell me the continent name and i will tell u thefamous tourist destination place. <say-as interpret-as="interjection">simple</say-as>`)
            .listen("say something, for example:Asia or Antartica or ask for help")
        this.emit(':responseReady');
    },
    'startOverIntent': function () {
        this.emit('LaunchRequest');

    }
}

exports.handler = function (event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = "amzn1.ask.skill.c3d52319-c028-45a6-b148-c81e1938e4d4";
    alexa.registerHandlers(handlers);
    alexa.execute();
};

function randomPhrase(myData) {
    var i = 0;
    i = Math.floor(Math.random() * myData.length);
    return (myData[i]);
}

function randomgreet(myData) {
    var i = 0;
    i = Math.floor(Math.random() * myData.length);
    return (myData[i]);
}

