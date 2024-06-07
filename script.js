// script.js
document.addEventListener("DOMContentLoaded", function() {
    const voteCounts = {
        "1.36": localStorage.getItem("votes1.36") ? parseInt(localStorage.getItem("votes1.36")) : 0,
        "1.27": localStorage.getItem("votes1.27") ? parseInt(localStorage.getItem("votes1.27")) : 0
    };

    function updateVoteCounts() {
        document.getElementById("count1.36").textContent = voteCounts["1.36"];
        document.getElementById("count1.27").textContent = voteCounts["1.27"];
    }

    window.vote = function(version) {
        if (version in voteCounts) {
            voteCounts[version]++;
            localStorage.setItem(`votes${version}`, voteCounts[version]);
            updateVoteCounts();
        } else {
            console.error("Unknown version:", version);
        }
    };

    // 初始化时更新投票结果
    updateVoteCounts();
});