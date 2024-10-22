// Mock API function to simulate fetching cheerful messages
const fetchMessage = async () => {
    const messages = [
        "Keep up the great work!",
        "You're doing amazing!",
        "Believe in yourself!",
        "You've got this!",
        "Stay positive and keep smiling!",
        "Your effort will pay off!",
        "Every day is a new opportunity!",
        "Dream big and aim high!",
        "You're a star in the making!",
        "Success is just around the corner!",
        "Keep pushing forward!",
        "You're capable of incredible things!",
        "Embrace the challenges!",
        "Your hard work will shine through!",
        "You're making a difference!",
        "Believe in your dreams!",
        "You're unstoppable!",
        "Keep smiling, it's contagious!",
        "Every step you take matters!",
        "You're on the right track!",
        "Your potential is limitless!",
        "Chase your goals with passion!",
        "Stay curious and keep learning!",
        "Your future is bright!",
        "You're stronger than you think!",
        "You inspire those around you!",
        "Each day is a new chance!",
        "Stay positive, work hard!",
        "You're a beacon of light!",
        "Your dedication is impressive!",
        "You have the power to succeed!",
        "Keep going, you're almost there!",
        "Your journey is unique and special!",
        "Every moment counts!",
        "You're making great progress!",
        "Believe in your abilities!",
        "Stay focused on your goals!",
        "Your happiness matters!",
        "You are valued and appreciated!",
        "Your smile can light up a room!",
        "You have what it takes!",
        "Stay true to yourself!",
        "You're doing better than you think!",
        "Your efforts will lead to success!",
        "You've got the right mindset!",
        "Celebrate your achievements!",
        "You're a wonderful person!",
        "Keep striving for greatness!",
        "Your dreams are within reach!",
        "You're amazing just the way you are!",
        "Keep aiming for the stars!"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
};

// Function to generate a random roll number
const generateRollNumber = () => {
    const randomNum = Math.floor(Math.random() * 66) + 1; // 1 to 66
    return `219x1a28${String(randomNum).padStart(2, '0')}`; // Updated format
};

// Function to update the card with a new roll number and message
const updateCard = async () => {
    const rollNumber = generateRollNumber();
    const message = await fetchMessage();
    document.getElementById('roll-number').innerText = `${rollNumber}`;
    document.getElementById('message').innerText = `Message: ${message}`;
};

// Event listener for the button
document.getElementById('new-roll').addEventListener('click', updateCard);

// Initial call to populate the card
updateCard();
