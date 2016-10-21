
stressed = ['afflicted', 'afraid', 'antsy', 'anxious','apprehensive', 'basket case', 
'burdened', 'distressed', 'disturbed', 'dreading', 'fearful', 
'fretful', 'frightened ', 'hassled', 'jittery', 'jumpy', 
'nervous', 'overextended', 'overwhelmed', 'restless', 'scared', 
'strained', 'stress', 'stressing','stressed', 'stressed out', 'strung out', 'tense', 'terrified', 
'uneasy', 'uptight', 'worried', 'worried sick', 'exhausted']

sad = ['abandoned', 'alone', 'alienated', 'ashamed', 'bad', 'bereaved', 'bitter', 
'blue', 'bummed out', 'cheerless', 'crummy', 'dejected', 'deserted', 
'despairing', 'despondent', 'detached', 'depressed', 'disappointed', 
'disconsolate', 'disliked', 'dismal', 'dispirited', 'distressed', 
'doleful', 'down', 'down and out', 'down in the dumps', 'downcast', 
'embarrased', 'fed up', 'forlorn', 'gloomy', 'glum', 'grief-stricken', 
'grived', 'heartbroken', 'heartstick', 'heavyhearted', 'helpless', 
'hopeless', 'humiliated', 'hurt', 'hurting', 'in doldrums', 
'in grief', 'in the dumps', 'inferior', 'isolated', 'languishing', 
'lonely', 'low', 'low-spirited', 'melancholy', 'moody', 'morbid', 
'morose', 'mournful', 'neglected', 'out of sorts', 'pessimistic', 
'pessimistic', 'sad', 'shamed', 'sick at heart', 'solitary', 
'somber', 'sorrowful', 'sorry', 'suffering', 'troubled', 'troubled', 
'uncertain', 'unhappy', 'upset', 'weeping', 'weeping', 'wistful', 
'woebegone']

bored = ['aloof', 'antisocial', 'apathetic', 'bored', 'callous', 
'dejected', 'demoralized', 'detached', 'discouraged', 'disheartened', 
'disinterested', 'dispassionate', 'dispirited', 'distant', 'dull', 
'fatigued', 'inattentive', 'indifferent', 'jaded', 'numb', 
'passionless', 'uncaring', 'unconcerned', 'unemotional', 'uninvolved', 
'unresponsive', 'unsocial', 'unsympathetic', 'weary', 'tired', 'sleepy',
'slow']

angry = ['annoyed', 'angry', 'antagonized', 'ballistic', 
'bent out of shape', 'bitter', 'displeased', 'enraged', 
'exasperated', 'fierce', 'fuming', 'furious', 'grumpy', 
'hateful', 'heated', 'ill-tempered', 'impassioned', 'incensed', 
'indignant', 'insulted', 'irate', 'irritable', 'irritated', 
'offended', 'outraged', 'pissed', 'pissed off', 'raging', 'resentful', 
'riled', 'steamed', 'sullen', 'ticked ', 'uptight', 'vexed', 
'wrathful', 'fed up', 'cranky', 'peeved', 'worked up']

happy = ['amused', 'blessed', "can't complain",'calm', 'captivated', 'caring', 
'cheerful', 'chipper', 'chirpy', 'compassionate', 'cool', 'content', 
'convivial', 'delighted', 'excited', 'ecstatic', 'elated', 'exultant', 
'flying high', 'glad', 'good','gleeful', 'gratified', 'jolly', 'joyful', 
'joyous', 'jubilant', 'laughing', 'loving', 'lively', 'merry', 
'overjoyed', 'peaceful', 'peppy', 'perky', 'playful', 'pleasant', 
'pleased', 'proud', 'regretful', 'satisfied', 'sparkling', 'sunny', 
'thrilled', 'upbeat', 'walking on air', 'awesome', 'sweet', 'rad', 'happy']


$(document).ready(function() {
    var path = window.location.pathname;
    console.log(path);
    path = path.replace('%20', ' ')
    if(path.includes("/search/")){
        array = String(path).split("/");
        var feeling = array.pop();
        console.log(feeling);
        if(jQuery.inArray(feeling, stressed) !== -1) {
            console.log("feeling stressed");
            $("#infograph").attr("src","/images/stressed.png");
            $("#resources").html("<li>Check the Stress Management Program at Mckinley -\
            you can schedule an individual appointment, which is kept confidential: \
            <a href='http://mckinley.illinois.edu/health-education/stress-management'>\
            mckinley.illinois.edu/health-education/stress-management </a> \
            or call 217-333-2701</li>");
            console.log($("#resources").html());
            $("#donow").html("<li>Chat with someone in a similar situation</li>\
            <li>Take a break! Just 10 min of 'personal time' can refresh you. \
            What about trying a short meditation, or going for a walk?</li>");
            console.log($("#donow").html());
        }
        else if(jQuery.inArray(feeling, sad) !== -1) {
            console.log("feeling sad");
            $("#infograph").attr("src","/images/depressed.png");
            $("#resources").html("<li>Counseling Center: \
            <a href='http://counselingcenter.illinois.edu'>\
            counselingcenter.illinois.edu </a> or call 217-333-3704</li>\
            <li>Mental Health Clinic at Mckinley:\
            <a href='http://mckinley.illinois.edu/medical-services/mental-health'>\
            mckinley.illinois.edu/medical-services/mental-health</a> \
            or call or (217) 333-2701.");
            $("#donow").html("<li>You're not alone -- don't be afraid of asking for help. \
            Did you know that more than 1 of every 4 college students think of \
            getting help, but less than half do so?</li>\
            <li>Chat with someone in a similar situation</li>");
        }
        else if(jQuery.inArray(feeling, bored) !== -1) {
            console.log("feeling bored");
            $("#infograph").attr("src","/images/bored.png");
            $("#resources").html("<li>What's your mood right now? Have you tried the \
            climbing wall at ARC? Or maybe check a new performance at Krannert?</li> \
            <li>Here are 101 other suggestions:  \
            <a href='http://blog.admissions.illinois.edu/?p=5454'>\
            blog.admissions.illinois.edu </a></li>");
            $("#donow").html("<li>What about helping mapping the moon? \
            <a href='http://cosmoquest.org'> cosmoquest.org </a></li>\
            <li>Chat with someone in a similar situation</li>");
        }
        else if(jQuery.inArray(feeling, angry) !== -1) {
            console.log("feeling angry");
            $("#infograph").attr("src","/images/angry.png");
            $("#resources").html("<li>What makes you frustrated? Search for an \
            organization that fights for your cause and get involved\
            <a href='http://union.illinois.edu/get-involved/office-of-registered-organizations'>\
            union.illinois.edu/get-involved</a></li>\
            <li>Or contact the Counseling Center to find the best way to deal \
            with your issue: <a href='http://counselingcenter.illinois.edu'>\
            counselingcenter.illinois.edu</a> or call 217-333-3704</li>");
            $("#donow").html("<li>Chat with someone in a similar situation</li>");
        }
        else if(jQuery.inArray(feeling, happy) !== -1) {
            console.log("feeling happy");
            $("#infograph").attr("src","/images/happy.png");
            $("#resources").html("<li>That's great! How about sharing your \
            happiness with others?</li>\
            <li>Get involved with the Office of Volunteer Programs -- you can \
            search for a group to join by your interest and available time:\
            <a href='http://union.illinois.edu/get-involved/office-of-volunteer-programs'>\
            union.illinois.edu/get-involved</a></li>");
            $("#donow").html("<li>Chat with someone in a similar situation</li>");
        }
        else {
            console.log("something else");
        }
    };
});

