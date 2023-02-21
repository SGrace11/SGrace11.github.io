const {v4: uuidv4} = require('uuid');

const events = [
    {
        id: '1',
        category: 'Board Game',
        title: 'Catan Tournament',
        host: 'Jenny Stevenson',
        startDate: 'February 3, 2023 4:00pm',
        endDate: 'February 3, 2023 7:00pm',
        location: 'Tourney Room',
        details: 'Do you have what it takes to be the Catan Champion? Come find out! Bracket style tournament with prizes for first, second, and third place. Registration required to compete.',
        image: '../images/catan.jpg'
    },
    {
        id: '2',
        category: 'Board Game',
        title: 'Chaos Monopoly Night',
        host: '',
        startDate: '',
        endDate: '',
        location: '',
        details: '',
        image: ''
    },
    {
        id: '3',
        category: 'Board Game',
        title: 'BYO Board Game',
        host: '',
        startDate: '',
        endDate: '',
        location: '',
        details: '',
        image: ''
    },
    {
        id: '4',
        category: 'Table Top Game',
        title: 'Intro to Pathfinder',
        host: '',
        startDate: '',
        endDate: '',
        location: '',
        details: '',
        image: ''
    },
    {
        id: '5',
        category: 'Table Top Game',
        title: 'D&D Oneshot Night',
        host: '',
        startDate: '',
        endDate: '',
        location: '',
        details: '',
        image: ''
    },
    {
        id: '6',
        category: 'Table Top Game',
        title: 'Critical Role Watch Party',
        host: '',
        startDate: '',
        endDate: '',
        location: '',
        details: '',
        image: ''
    },
    {
        id: '7',
        category: 'Card Game',
        title: 'Magic the Gathering Lunch',
        host: '',
        startDate: '',
        endDate: '',
        location: '',
        details: '',
        image: ''
    },
    {
        id: '8',
        category: 'Card Game',
        title: 'Pokemon Trade Night',
        host: '',
        startDate: '',
        endDate: '',
        location: '',
        details: '',
        image: ''
    },
    {
        id: '9',
        category: 'Card Game',
        title: 'Indie Card Game Night',
        host: '',
        startDate: '',
        endDate: '',
        location: '',
        details: '',
        image: ''
    },
];

exports.find = ()=> events;
exports.findById = (id)=> SpeechRecognitionResultList.find(story=>story.id === id);
