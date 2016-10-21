
stressed = ['afflicted', 'afraid', 'antsy', 'anxious','apprehensive', 'basket case', 
'burdened', 'distressed', 'disturbed', 'dreading', 'fearful', 
'fretful', 'frightened ', 'hassled', 'jittery', 'jumpy', 
'nervous', 'overextended', 'overwhelmed', 'restless', 'scared', 
'strained', 'stress', 'stressing','stressed','strung out', 'tense', 'terrified', 
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
'thrilled', 'upbeat', 'walking on air', 'awesome', 'sweet', 'rad']


$(document).ready(function() {
    var path = window.location.pathname;
    if(path.includes("/search/")){
        array = String(path).split("/");
        var feeling = array.pop();
        console.log(feeling);
        if(jQuery.inArray(feeling, stressed) !== -1) {
            console.log("feeling stressed");
            $("#infograph").attr("src","/images/stressed.png");
        }
        else if(jQuery.inArray(feeling, sad) !== -1) {
            console.log("feeling sad");
            $("#infograph").attr("src","/images/depressed.png");
        }
        else if(jQuery.inArray(feeling, bored) !== -1) {
            console.log("feeling bored");
            $("#infograph").attr("src","/images/bored.png");
        }
        else if(jQuery.inArray(feeling, angry) !== -1) {
            console.log("feeling angry");
            $("#infograph").attr("src","/images/angry.png");
        }
        else if(jQuery.inArray(feeling, happy) !== -1) {
            console.log("feeling happy");
            $("#infograph").attr("src","/images/happy.png");
        }
        else {
            console.log("something else");
        }
    };
});

