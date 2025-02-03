document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("loginBtn");
    const loginModal = document.createElement("div");
    loginModal.id = "loginModal";
    loginModal.style.display = "none";
    loginModal.style.position = "fixed";
    loginModal.style.top = "50%";
    loginModal.style.left = "50%";
    loginModal.style.transform = "translate(-50%, -50%)";
    loginModal.style.background = "white";
    loginModal.style.padding = "20px";
    loginModal.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
    loginModal.innerHTML = `
        <h3>Login to Pinnacle Trust Bank</h3>
        <input type="text" id="username" placeholder="Username" /><br><br>
        <input type="password" id="password" placeholder="Password" /><br><br>
        <p id="errorMessage" style="color: red; display: none;">Invalid login. Try again.</p>
        <button id="submitLogin">Login</button>
        <button id="closeLogin">Close</button>
    `;
    document.body.appendChild(loginModal);
    
    loginBtn.addEventListener("click", function() {
        loginModal.style.display = "block";
    });
    
    document.getElementById("closeLogin").addEventListener("click", function() {
        loginModal.style.display = "none";
    });
    
    document.getElementById("submitLogin").addEventListener("click", function() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("errorMessage");

        if (username === "" || password === "") {
            errorMessage.textContent = "Please fill in all fields.";
            errorMessage.style.display = "block";
            return;
        }

        if (username === "admin" && password === "password123") {
            alert("Login Successful!");
            window.location.href = "dashboard.html";
        } else {
            errorMessage.textContent = "Invalid login. Try again.";
            errorMessage.style.display = "block";
        }
    });

    // Set logo in navbar
    const logo = document.createElement("img");
    logo.src = "assets/logo.png";
    logo.alt = "Pinnacle Trust Bank Logo";
    logo.style.height = "50px";
    logo.style.margin = "0 15px";
    logo.style.position = "absolute";
    logo.style.left = "20px";
    logo.style.top = "10px";
    document.querySelector("nav").prepend(logo);

    // Add Hero Section
    const heroSection = document.createElement("div");
    heroSection.id = "hero";
    heroSection.style.background = "url('assets/hero.jpg') no-repeat center center/cover";
    heroSection.style.height = "80vh";
    heroSection.style.display = "flex";
    heroSection.style.alignItems = "center";
    heroSection.style.justifyContent = "center";
    heroSection.style.color = "white";
    heroSection.style.textAlign = "center";
    heroSection.style.padding = "20px";
    heroSection.innerHTML = `
        <div>
            <h1>Welcome to Pinnacle Trust Bank</h1>
            <p>Your trusted partner in financial success.</p>
            <button onclick="window.location.href='dashboard.html'" style="padding: 10px 20px; font-size: 16px; cursor: pointer;">Get Started</button>
        </div>
    `;
    document.body.prepend(heroSection);
});
document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("loginBtn");
    const loginModal = document.createElement("div");
    loginModal.id = "loginModal";
    loginModal.style.display = "none";
    loginModal.style.position = "fixed";
    loginModal.style.top = "50%";
    loginModal.style.left = "50%";
    loginModal.style.transform = "translate(-50%, -50%)";
    loginModal.style.background = "white";
    loginModal.style.padding = "20px";
    loginModal.style.borderRadius = "8px";
    loginModal.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
    loginModal.innerHTML = `
        <h3 style="font-family: 'Poppins', sans-serif; color: #004080;">Welcome to Pinnacle Trust Bank</h3>
        <input type="text" id="username" placeholder="Username" style="width: 100%; padding: 10px; margin: 5px 0; border: 1px solid #ccc; border-radius: 5px;" /><br>
        <input type="password" id="password" placeholder="Password" style="width: 100%; padding: 10px; margin: 5px 0; border: 1px solid #ccc; border-radius: 5px;" /><br>
        <p id="errorMessage" style="color: red; display: none; font-size: 14px;">Invalid login. Try again.</p>
        <button id="submitLogin" style="width: 100%; padding: 10px; background: #004080; color: white; border: none; border-radius: 5px; cursor: pointer;">Login</button>
        <button id="closeLogin" style="width: 100%; padding: 10px; margin-top: 5px; background: #ccc; color: black; border: none; border-radius: 5px; cursor: pointer;">Close</button>
    `;
    document.body.appendChild(loginModal);
    
    loginBtn.addEventListener("click", function() {
        loginModal.style.display = "block";
    });
    
    document.getElementById("closeLogin").addEventListener("click", function() {
        loginModal.style.display = "none";
    });
    
    document.getElementById("submitLogin").addEventListener("click", function() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("errorMessage");

        if (username === "" || password === "") {
            errorMessage.textContent = "Please fill in all fields.";
            errorMessage.style.display = "block";
            return;
        }

        if (username === "admin" && password === "password123") {
            alert("Login Successful!");
            window.location.href = "dashboard.html";
        } else {
            errorMessage.textContent = "Invalid login. Try again.";
            errorMessage.style.display = "block";
        }
    });

    // Improve navbar aesthetics without affecting hero section
    const navbar = document.querySelector("nav");
    if (navbar) {
        navbar.style.position = "fixed";
        navbar.style.top = "0";
        navbar.style.width = "100%";
        navbar.style.zIndex = "1000";
        navbar.style.background = "#004080";
        navbar.style.padding = "15px 30px";
        navbar.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("loginBtn");
    const loginModal = document.createElement("div");
    loginModal.id = "loginModal";
    loginModal.style.display = "none";
    loginModal.style.position = "fixed";
    loginModal.style.top = "50%";
    loginModal.style.left = "50%";
    loginModal.style.transform = "translate(-50%, -50%)";
    loginModal.style.background = "white";
    loginModal.style.padding = "20px";
    loginModal.style.borderRadius = "8px";
    loginModal.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
    loginModal.innerHTML = `
        <h3 style="font-family: 'Poppins', sans-serif; color: #004080;">Welcome to Pinnacle Trust Bank</h3>
        <input type="text" id="username" placeholder="Username" style="width: 100%; padding: 10px; margin: 5px 0; border: 1px solid #ccc; border-radius: 5px;" /><br>
        <input type="password" id="password" placeholder="Password" style="width: 100%; padding: 10px; margin: 5px 0; border: 1px solid #ccc; border-radius: 5px;" /><br>
        <p id="errorMessage" style="color: red; display: none; font-size: 14px;">Invalid login. Try again.</p>
        <button id="submitLogin" style="width: 100%; padding: 10px; background: #004080; color: white; border: none; border-radius: 5px; cursor: pointer;">Login</button>
        <button id="closeLogin" style="width: 100%; padding: 10px; margin-top: 5px; background: #ccc; color: black; border: none; border-radius: 5px; cursor: pointer;">Close</button>
    `;
    document.body.appendChild(loginModal);
    
    loginBtn.addEventListener("click", function() {
        loginModal.style.display = "block";
    });
    
    document.getElementById("closeLogin").addEventListener("click", function() {
        loginModal.style.display = "none";
    });
    
    document.getElementById("submitLogin").addEventListener("click", function() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("errorMessage");

        if (username === "" || password === "") {
            errorMessage.textContent = "Please fill in all fields.";
            errorMessage.style.display = "block";
            return;
        }

        if (username === "admin" && password === "password123") {
            alert("Login Successful!");
            window.location.href = "dashboard.html";
        } else {
            errorMessage.textContent = "Invalid login. Try again.";
            errorMessage.style.display = "block";
        }
    });

    // Improve navbar aesthetics without affecting hero section
    const navbar = document.querySelector("nav");
    if (navbar) {
        navbar.style.position = "fixed";
        navbar.style.top = "0";
        navbar.style.width = "100%";
        navbar.style.zIndex = "1000";
        navbar.style.background = "#004080";
        navbar.style.padding = "15px 30px";
        navbar.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
    }

    // Add Featured Services Section
    const servicesSection = document.createElement("section");
    servicesSection.innerHTML = `
        <h2 style="text-align: center; font-family: 'Poppins', sans-serif; color: #004080; margin-top: 50px;">Our Services</h2>
        <div style="display: flex; justify-content: center; gap: 20px; margin: 30px auto; max-width: 1000px;">
            <div style="flex: 1; background: #f5f5f5; padding: 20px; border-radius: 8px; text-align: center;">
                <h3>Checking & Savings</h3>
                <p>Open an account in minutes and start banking with us.</p>
            </div>
            <div style="flex: 1; background: #f5f5f5; padding: 20px; border-radius: 8px; text-align: center;">
                <h3>Loans & Mortgages</h3>
                <p>Find the right loan with flexible terms and great rates.</p>
            </div>
            <div style="flex: 1; background: #f5f5f5; padding: 20px; border-radius: 8px; text-align: center;">
                <h3>Online & Mobile Banking</h3>
                <p>Bank anywhere, anytime with our digital banking solutions.</p>
            </div>
        </div>
    `;
    document.body.appendChild(servicesSection);

    // Add Modern Footer
    const footer = document.createElement("footer");
    footer.style.background = "#004080";
    footer.style.color = "white";
    footer.style.padding = "20px";
    footer.style.textAlign = "center";
    footer.innerHTML = `
        <p>&copy; 2025 Pinnacle Trust Bank | All Rights Reserved</p>
        <p><a href="#" style="color: white; text-decoration: underline;">Privacy Policy</a> | <a href="#" style="color: white; text-decoration: underline;">Terms & Conditions</a></p>
        <p>Follow us: 
            <a href="#" style="color: white; margin: 0 5px;">Facebook</a> | 
            <a href="#" style="color: white; margin: 0 5px;">Twitter</a> | 
            <a href="#" style="color: white; margin: 0 5px;">LinkedIn</a>
        </p>
    `;
    document.body.appendChild(footer);
});
