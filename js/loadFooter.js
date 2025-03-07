document.addEventListener("DOMContentLoaded", function () {
    // fetch("/footer.html")
    //     .then((response) => response.text())
    //     .then((data) => {
    //         document.getElementById("footer-placeholder").innerHTML = data;
    //     });

    async function fetchLastCommitDate() {
        const repo = "BytePenguinCode/BytePenguin"; // Replace with your GitHub repo
        const url = `https://api.github.com/repos/${repo}/commits/main`;
        const lastUpdatedElement = document.getElementById("last-updated");

        if (!lastUpdatedElement) {
            console.error("Error: Element #last-updated not found.");
            return;
        }

        try {
            const response = await fetch(url);
            if (!response.ok)
                throw new Error(`GitHub API Error: ${response.status}`);

            const data = await response.json();
            if (data.commit && data.commit.committer) {
                const date = new Date(data.commit.committer.date);
                const formattedDate = date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "2-digit",
                });
                lastUpdatedElement.innerText = `Last Updated: ${formattedDate}`;
            } else {
                throw new Error("Invalid commit data");
            }
        } catch (error) {
            console.error("Error fetching commit date:", error);
            lastUpdatedElement.innerText = "Last Updated: 2025";
        }
    }

    fetchLastCommitDate();
});
