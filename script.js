// === Authentication Logic (localStorage) ===
document.getElementById('login')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace with your actual username and password check
    if (username === 'user' && password === 'password123') {
        localStorage.setItem('isAuthenticated', 'true');
        alert('Logged in successfully!');
        window.location.href = 'index.html'; // Redirect to home page
    } else {
        document.getElementById('authError').textContent = 'Invalid credentials!';
    }
});

// Registration functionality
document.getElementById('register')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Simple validation
    if (newPassword !== confirmPassword) {
        document.getElementById('registerError').textContent = 'Passwords do not match!';
        return;
    }
   
    localStorage.setItem(newUsername, newPassword);
    alert('Registration successful! You can now log in.');
    window.location.href = 'login.html'; // Redirect to login page
});

// === Slideshow Functionality ===
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset to the first slide
    }

    // Remove 'active' class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block"; 
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// === Add to Cart Functionality ===
function addToCart(productName) {
    alert(productName + ' has been added to your cart!');
}

// === Chat Modal Handling ===
const chatBtn = document.querySelector('.chat-btn');
const chatModal = document.getElementById('chat-modal');
const modalOverlay = document.getElementById('modal-overlay');
const closeBtn = document.getElementById('close-btn');

// Open the chat modal
chatBtn?.addEventListener('click', () => {
    chatModal.style.display = 'block';
    modalOverlay.style.display = 'block';
});

// Close the chat modal
closeBtn?.addEventListener('click', () => {
    chatModal.style.display = 'none';
    modalOverlay.style.display = 'none';
});

// Close modal when clicking outside the chat
modalOverlay?.addEventListener('click', () => {
    chatModal.style.display = 'none';
    modalOverlay.style.display = 'none';
});

// === Group and Private Chat Handling ===
const groupChatForm = document.getElementById('group-chat-form');
const groupChatBox = document.getElementById('group-chat-box');
const groupMessageInput = document.getElementById('group-message-input');

// Group message submission
groupChatForm?.addEventListener('submit', function(event) {
    event.preventDefault();
    const message = groupMessageInput.value;

    if (message.trim() !== '') {
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user');
        userMessage.textContent = message;
        groupChatBox.appendChild(userMessage);
        groupMessageInput.value = ''; // Clear input field
        groupChatBox.scrollTop = groupChatBox.scrollHeight; // Scroll to the bottom
    }
});

function performSearch() {
    const query = document.getElementById('search').value.trim();
    if (query !== '') {
        // Redirect to a search results page with the query in the URL
        window.location.href = `search-results.html?query=${encodeURIComponent(query)}`;
    } else {
        alert('Please enter a search term.');
    }
}
// Get the search query from the URL
const params = new URLSearchParams(window.location.search);
const query = params.get('query');

// Display the query and dummy search results
const resultsContainer = document.getElementById('search-results');
if (query) {
    // Perform your search logic here (filter through your products or data)
    // For now, we will simply display the search term as the result.
    const searchResults = `
        <p>You searched for: <strong>${query}</strong></p>
        <p>Here are some products related to "<strong>${query}</strong>":</p>
        <ul>
            <li>Product 1 related to ${query}</li>
            <li>Product 2 related to ${query}</li>
            <li>Product 3 related to ${query}</li>
        </ul>
    `;
    resultsContainer.innerHTML = searchResults;
} else {
    resultsContainer.innerHTML = '<p class="no-results">No search query provided.</p>';
}
function filterContent() {
    const query = document.getElementById('search').value.trim().toLowerCase();
    const items = document.querySelectorAll('.product-item');

    items.forEach(item => {
        const name = item.getAttribute('data-name').toLowerCase();
        if (name.includes(query)) {
            item.style.display = 'block'; // Show item if it matches the search query
        } else {
            item.style.display = 'none'; // Hide item if it doesn't match
        }
    });
}

