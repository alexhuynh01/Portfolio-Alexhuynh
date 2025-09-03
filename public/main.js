const topMenu = document.getElementById("alex-top-menu");
const toggleTopMenu = document.getElementById("alex-toggle-top-menu");

document.addEventListener("click", (e) => {
  if (toggleTopMenu.contains(e.target)) {
    //Click toggle top menu
    topMenu.classList.toggle("alex-topmenu-expanded");
    topMenu.classList.toggle("hidden");
  } else if (topMenu.classList.contains("alex-topmenu-expanded")) {
    //Click out side top menu
    topMenu.classList.remove("alex-topmenu-expanded");
    topMenu.classList.add("hidden");
  }
});

const text = "Alexhuynhdev.";
const el = document.getElementById("typing-logo");
const cursor = document.getElementById("typing-cursor");

cursor.textContent = "|"; // đảm bảo có con trỏ

let idx = 0;
let phase = "typing"; // "typing" | "pauseAfterType" | "deleting" 
function tick() {
  if (phase === "typing") {
    idx++;
    el.textContent = text.slice(0, idx);
    if (idx === text.length) {
      phase = "pauseAfterType";
      setTimeout(tick, 800);
      return;
    }
    setTimeout(tick, 150);
    return;
  }

  if (phase === "pauseAfterType") {
    phase = "deleting";
    setTimeout(tick, 200);
    return;
  }

  if (phase === "deleting") {
    if (idx > 0) {
      idx--;
      el.textContent = text.slice(0, idx);
      setTimeout(tick, 100);
      return;
    } else {
      phase = "pauseAfterDelete";
      setTimeout(tick, 500);
      return;
    }
  }

  if (phase === "pauseAfterDelete") {
    phase = "typing";
    setTimeout(tick, 150);
    return;
  }
}

// bắt đầu
tick();


const text1 = "Hello, World!"; // 👈 đổi text ở đây
const el1 = document.getElementById("typing-content");
let idx1 = 0;

function typeWriter() {
  if (idx1 < text1.length) {
    el1.textContent += text1.charAt(idx1);
    idx1++;
    setTimeout(typeWriter, 150); // tốc độ gõ (ms)
  }
}

// chạy khi load
window.addEventListener("DOMContentLoaded", typeWriter);