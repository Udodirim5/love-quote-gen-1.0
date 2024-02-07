// Get references to the modal and buttons
let modal = document.getElementById('myModal');
let openModalBtn = document.getElementById('openModalBtn');
let closeModalBtn = document.getElementById('closeModalBtn');

let f_name_out = document.getElementById("fname-output");
let l_name_out = document.getElementById("lname-output");
let msg = document.getElementById('message');
let input = document.getElementById('imageInput');
let container = document.getElementById('imageContainer');
let text = "ltotototot";
let output = document.querySelector(".outputed")
let gen_output = document.getElementById("gender-output")


function getRandomMessage(messageArray) {
    const randomIndex = Math.floor(Math.random() * messageArray.length);
    return messageArray[randomIndex];
}



const for_her = [
    "Just thinking about you puts a smile on my face.", 
    "Every time our hands touch I feel a spark. Every time we embrace, I feel on top of the world. I love you. ", 
    "You are the most beautiful person, both inside and out. I am so lucky to have you as my girlfriend.", 
    "You're my true love and my soulmate.", 
    "A million kisses to the most amazing woman I know.", 
    "If someone were to ask me about my ideal woman, I wouldn't have had the words to describe you. You have surpassed all expectations, fantasies and dreams combined.", 
    "Your beauty, intelligence and kindness make me fall in love with you every day! You are my everything.", 
    "Sometimes it feels like I'm dreaming, but then I realize it's all real. Thank you for being mine!", 
    "I want to make you the happiest woman in the world.", 
    "It only took one look to know you were going to be my wife. I thank God every day that I listened to my gut. The rest is history.", 
    "The more years go by, the more I learn new things to love about you. You are the most amazing woman to me.", 
    "'And she became his wife, and he loved her.' - Genesis 24:67", 
    "I love driving through the city with you by my side.",  
    "You are my everything, I can't imagine life without you."
];
const for_him = [
    "You are my everything, and I am so grateful for your love and support.",
    "You are the sunshine in my life, and I love you more than words can express.",
    "You're my strength, my protector and my hero. You're a man every woman would want by her side.",
    "Missing your handsome face already.",
    "I love the way you look at me. It makes me feel like I am the most important person in your life.",
    "You make me feel like the most special woman on Earth.",
    "You are everything I could want in a man.",
    "I would marry you all over again, just so you know.",
    "Every single morning I thank God for you.",
    "I love you. Whatever comes our way and whatever happens, we're in this together.",
    "Marrying you has made me a better person. Thank you so much for that.",
    "I love you a little more every single day.",
    "You are my first and only love.",
    "I feel the happiest and safest when I'm in your arms. Love you so much, honey.",
    "Thanks for being my knight in shining armor and having my back. Love you so much.",
    "I will forever be thankful to God for gifting me to you. You are not just my husband/lover; you are my best friend. I know I can always count on you. I love you so much.",
    "You're the best spider-slaying, garbage tossing husband there is!"
];

function displayImage() {
    const randomMessageArray1 = getRandomMessage(for_him);
    const randomMessageArray2 = getRandomMessage(for_her);
    


    // Get the current values of fname and lname when the function is called
    let f_name = document.getElementById("fname").value;
    let l_name = document.getElementById("lname").value;
    let d_img = document.getElementById("imageInput").value;
    let get_gen = document.getElementById("gender").value;
    let say = "Says";
    say.style.fontWeight = "bold'";
    

    // Check if either of the input fields is empty
    if (f_name.trim() === '' || l_name.trim() === '' || d_img.trim() === '' || get_gen.trim() === '') {
        alert('All fields are required.');
        return; // Exit the function if validation fails
    }

    modal.style.display = 'block';
    output.classList.add("output");

    f_name = f_name.charAt(0).toUpperCase() + f_name.substr(1).toLowerCase();
    l_name = l_name.charAt(0).toUpperCase() + l_name.substr(1).toLowerCase();

    if  (get_gen == "male"){
        gen_output.innerHTML = "M";
        msg.innerHTML = say + ": " + randomMessageArray1;

    }
    else if  (get_gen == "female"){
        gen_output.innerHTML = "F";
        msg.innerHTML = say + ": " + randomMessageArray2;
    }

    f_name_out.innerHTML = f_name;
    l_name_out.innerHTML = l_name;

    // Check if a file is selected
    if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
            // Create an image element and set its source to the selected file
            let image = document.createElement('img');
            image.src = e.target.result;

            // Append the image to the container
            container.innerHTML = '';
            container.appendChild(image);
        };

        // Read the selected file as a data URL
        reader.readAsDataURL(input.files[0]);
    } else {
        // Display an error message if no file is selected
        alert('Please select an image.');
    }
}

// Event listener to close the modal
closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Event listener to close the modal if the user clicks outside the modal
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Event listener to open the modal and display image
openModalBtn.addEventListener('click', displayImage);
