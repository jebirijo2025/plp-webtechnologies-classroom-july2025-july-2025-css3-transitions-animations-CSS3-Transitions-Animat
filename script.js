// =============================================
// Part 2: JavaScript Functions - Scope, Parameters & Return Values
// =============================================

// Global variable - accessible throughout the script
const globalMessage = "I'm a global variable";

// Function with parameters and return value
function calculateSum(num1, num2) {
    // Local variables - only accessible within this function
    const localMessage = "Calculating sum...";
    console.log(localMessage);
    
    // Return the sum of parameters
    return num1 + num2;
}

// Function to demonstrate scope
function demonstrateScope() {
    // This variable is local to this function
    const functionScoped = "I'm function-scoped";
    
    // Block scope example (let/const)
    if (true) {
        const blockScoped = "I'm block-scoped";
        console.log("Inside block:", blockScoped);
        console.log("Inside block, accessing function scope:", functionScoped);
        console.log("Inside block, accessing global:", globalMessage);
    }
    
    // This would cause an error - blockScoped is not accessible here
    // console.log("Outside block:", blockScoped);
    
    // But we can access function-scoped and global variables
    console.log("Function scope:", functionScoped);
    console.log("Global scope:", globalMessage);
    
    // Display results in HTML
    document.getElementById('scope-result').innerHTML = `
        <strong>Scope Demonstration:</strong><br>
        Function-scoped variable: ${functionScoped}<br>
        Global variable: ${globalMessage}<br>
        Check console for more details!
    `;
}

// Function to handle calculation with user input
function calculate() {
    // Get values from input fields
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    
    // Call function with parameters and get return value
    const result = calculateSum(num1, num2);
    
    // Display result
    document.getElementById('result').innerHTML = `
        <strong>Calculation Result:</strong><br>
        ${num1} + ${num2} = <strong>${result}</strong>
    `;
}

// =============================================
// Part 3: Combining CSS Animations with JavaScript
// =============================================

// Function to trigger box animation
function triggerAnimation() {
    const box = document.getElementById('js-animated-box');
    
    // Remove existing animation class
    box.classList.remove('animate');
    
    // Trigger reflow
    void box.offsetWidth;
    
    // Add animation class
    box.classList.add('animate');
    
    // Remove animation class after it completes
    setTimeout(() => {
        box.classList.remove('animate');
    }, 1000);
}

// Function to flip card
function toggleCardFlip() {
    const card = document.getElementById('flip-card');
    card.classList.toggle('flipped');
}

// =============================================
// Additional Interactive Features
// =============================================

// Function with multiple parameters and complex return
function createUserProfile(name, age, email) {
    // Local object - only accessible within this function
    const profile = {
        name: name,
        age: age,
        email: email,
        isAdult: age >= 18,
        createdAt: new Date().toISOString()
    };
    
    return profile;
}

// Example usage of the complex function
function demonstrateComplexFunction() {
    const user = createUserProfile("John Doe", 25, "john@example.com");
    console.log("User Profile:", user);
    
    // This demonstrates returning complex objects from functions
    return user;
}

// Initialize page with some demo data
document.addEventListener('DOMContentLoaded', function() {
    console.log("Page loaded - JavaScript functions are ready!");
    console.log("Global message:", globalMessage);
    
    // Demonstrate the complex function
    const demoUser = demonstrateComplexFunction();
    console.log("Demo user created:", demoUser);
});

// Function that returns a function (closure example)
function createMultiplier(multiplier) {
    // This inner function has access to the multiplier parameter
    return function(number) {
        return number * multiplier;
    };
}

// Usage example of closure
const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("Double of 5:", double(5)); // 10
console.log("Triple of 5:", triple(5)); // 15