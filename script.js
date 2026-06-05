// Simple working AI function
function askAI() {
    let question = document.getElementById("question").value;
    let answerDiv = document.getElementById("answer");
    
    if (!question.trim()) {
        answerDiv.innerText = "Ask me something about Sami!";
        return;
    }
    
    let q = question.toLowerCase();
    let reply = "";
    
    if (q.includes("skill") || q.includes("know") || q.includes("python")) {
        reply = "✅ Sami knows: Python, LangChain, RAG, AI Agents, Chatbots, HTML/CSS, JavaScript, Groq API";
    }
    else if (q.includes("project")) {
        reply = "🚀 Sami built 6 projects: AI Career Advisor, Al Shifa Healthcare, Siddique Brothers, RAG Q&A, AI Agent, Urdu Bot, and Sirat-e-Mustaqeem.";
    }
    else if (q.includes("experience") || q.includes("intern")) {
        reply = "💼 Sami has 4+ months AI internship experience, building real-world LLM applications.";
    }
    else if (q.includes("learn")) {
        reply = "📚 Sami is currently learning Fine-tuning LLMs, Advanced RAG, and Backend Integration.";
    }
    else if (q.includes("name")) {
        reply = "🧑‍💻 This is Sami — AI Engineer and Dars-e-Nizami student.";
    }
    else {
        reply = "💡 Ask about: skills, projects, experience, learning, or name.";
    }
    
    answerDiv.innerText = reply;
}

// Project functions
function showAllProjects() {
    let container = document.getElementById("projectsList");
    if (container.style.display === "none") {
        container.style.display = "grid";
        container.innerHTML = `
            <div class="project-item"><h3>🏥 Al Shifa Healthcare</h3><button onclick="showProjectInfo('al_shifa')">About</button><div id="info_al_shifa" style="display:none"></div></div>
            <div class="project-item"><h3>🏢 Siddique Brothers</h3><button onclick="showProjectInfo('siddique')">About</button><div id="info_siddique" style="display:none"></div></div>
            <div class="project-item"><h3>📄 RAG Document Q&A</h3><button onclick="showProjectInfo('rag')">About</button><div id="info_rag" style="display:none"></div></div>
            <div class="project-item"><h3>🧠 AI Agent with Tools</h3><button onclick="showProjectInfo('agent')">About</button><div id="info_agent" style="display:none"></div></div>
            <div class="project-item"><h3>🗣️ Urdu Bilingual Bot</h3><button onclick="showProjectInfo('urdu')">About</button><div id="info_urdu" style="display:none"></div></div>
            <div class="project-item"><h3>🕌 Sirat-e-Mustaqeem</h3><button onclick="showProjectInfo('sirat')">About</button><div id="info_sirat" style="display:none"></div></div>
        `;
    } else {
        container.style.display = "none";
        container.innerHTML = "";
    }
}

function showProjectInfo(projectId) {
    let infoDiv = document.getElementById(`info_${projectId}`);
    let details = {
        al_shifa: "Tech: RAG, LangChain, Groq API. Features: Medical queries, appointments.",
        siddique: "Tech: AI Agents, LangGraph. Features: Product inquiry, order tracking.",
        rag: "Tech: LangChain, ChromaDB. Features: Upload docs, ask questions.",
        agent: "Tech: LangGraph, Groq API. Features: Web search, calculator.",
        urdu: "Tech: Python, Groq API. Features: Roman Urdu, translation.",
        sirat: "Tech: Speech Recognition, Groq API. Features: Voice, halal/haram filter."
    };
    infoDiv.innerText = details[projectId];
    infoDiv.style.display = infoDiv.style.display === "none" ? "block" : "none";
}
