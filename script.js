  // Navbar Scroll
        const navbar = document.getElementById("navbar");
        const glassNavbar = document.getElementById("glassNavbar");

        window.addEventListener("scroll", () => {

            if (window.scrollY > 80) {

                glassNavbar.classList.add(
                    "glass-scroll",
                    "scale-[0.98]"
                );

            } else {

                glassNavbar.classList.remove(
                    "glass-scroll",
                    "scale-[0.98]"
                );

            }

        });

        // Progress Bar
        window.onscroll = function () {

            let winScroll =
                document.body.scrollTop ||
                document.documentElement.scrollTop;

            let height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            let scrolled =
                (winScroll / height) * 100;

            document.getElementById("progressBar").style.width =
                scrolled + "%";
        };


// MOBILE DRAWER


const menuBtn = document.getElementById("menuBtn");
const closeDrawer = document.getElementById("closeDrawer");
const mobileDrawer = document.getElementById("mobileDrawer");
const drawerOverlay = document.getElementById("drawerOverlay");
const drawerLinks = document.querySelectorAll(".drawer-link");


// Open Drawer
menuBtn.addEventListener("click", () => {

    mobileDrawer.classList.remove("left-[-100%]");
    mobileDrawer.classList.add("left-0");

    drawerOverlay.classList.remove("hidden");

    // Stop Homepage Scroll
    document.body.classList.add("overflow-hidden");

    setTimeout(() => {

        drawerOverlay.classList.remove("opacity-0");

    }, 10);

});

// Close Drawer Function
function closeMobileDrawer() {

    mobileDrawer.classList.remove("left-0");
    mobileDrawer.classList.add("left-[-100%]");

    drawerOverlay.classList.add("opacity-0");

    // Enable Homepage Scroll
    document.body.classList.remove("overflow-hidden");

    setTimeout(() => {

        drawerOverlay.classList.add("hidden");

    }, 300);

}

// Close Button
closeDrawer.addEventListener("click", closeMobileDrawer);

// Overlay Close
drawerOverlay.addEventListener("click", closeMobileDrawer);

// Close Drawer After Click Menu
drawerLinks.forEach(link => {

    link.addEventListener("click", () => {

        closeMobileDrawer();

    });

});





        // drawers menu
        function navigateToScheme() {
            Toaster.postMessage("navigateScheme");
        }

        function navigateToCatalogues() {
            Toaster.postMessage("navigateToCatalogues");
        }

        function navigateToQuickPurchase() {
            Toaster.postMessage("navigateToQuickPurchase");
        }


        function navigateToBankDetails() {
            Toaster.postMessage("navigateBankDetails");
        }

        function navigateToKyc() {
            Toaster.postMessage("navigateKyc");
        }

        function navigateToRate() {
            Toaster.postMessage("navigateRate");
        }

        function navigateSchemeRecords() {
            Toaster.postMessage("navigateSchemeRecords");
        }

        function navigateToCustomerCard() {
            Toaster.postMessage("navigateCustomerCard");
        }

        function navigateTransactionHistory() {
            Toaster.postMessage("navigateTransactionHistory");
        }

        function navigateToMyOrder() {
            Toaster.postMessage("navigateToMyOrder");
        }

        function navigateToUserProfile() {
            Toaster.postMessage("navigateToUserProfile");
        }

        function navigateToDigitalGold() {
            Toaster.postMessage("navigateToDigitalGold");
        }

        function navigateToPanchang() {
            Toaster.postMessage("navigateToPanchang");
        }

        function navigateToFeedback() {
            Toaster.postMessage("navigateToFeedback");
        }

        function navigateToSetting() {
            Toaster.postMessage("navigateToSetting");
        }

        function setUserName(username) {
            // Find the element by ID and set the text content
            document.getElementById("user-name-display").innerText =
                "Welcome, " + username;
        }
        function navigateToHomePage() {
            Toaster.postMessage("navigateToHomePage");
        }

        function navigateToARVirtualTryOn() {
            Toaster.postMessage("navigateToARVirtualTryOn");
        }

        function toggleTabs() {
            const extraTabs = document.querySelectorAll('[data-extra]');
            const text = document.getElementById('toggleText');
            const icon = document.getElementById('toggleIcon');

            let isHidden = [...extraTabs].some(tab => tab.classList.contains('hidden'));
            extraTabs.forEach(tab => {
                tab.classList.toggle('hidden', !isHidden);
            });

            text.innerText = isHidden ? 'Show Less' : 'Show More';
            icon.classList.toggle('rotate-180', isHidden);
        }
