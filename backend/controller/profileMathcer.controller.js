import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

function generateScholarshipPrompt(student, scholarships) {
  if (!Array.isArray(scholarships)) {
    throw new Error("Scholarships must be an array");
  }

  const profile = student.profile || {};
  const education = profile.education || {};

  const studentDetails = `
Student Profile:
- Name: ${student.fullname}
- Degree: ${education.degree || "N/A"}
- CGPA: ${profile.cgpa || "N/A"}
- Category: ${profile.category || "N/A"}
- Income: ${profile.income || "N/A"}
- Country Preference: ${profile.countryPreference || "N/A"}
`;

  const scholarshipList = scholarships
    .map((sch, i) => {
      return `${i + 1}. ${sch.title}
Description: ${sch.description}
Eligibility: Degree - ${sch.eligibility.degree}, Location - ${sch.eligibility.location}, Min CGPA - ${sch.eligibility.minCGPA}, Category - ${sch.eligibility.category}, Income Cap - ${sch.eligibility.incomeCap || "None"}, Field - ${sch.eligibility.field}
`;
    })
    .join("\n");

  return `
You are an AI scholarship recommender. Based on the student profile and the list of scholarships , recommend scholarship and give full scholarship data.

${studentDetails}

Available Scholarships:
${scholarshipList}
`;
}

// Controller: controllers/studentController.js
export const getScholarshipRecommendations = async (req, res) => {
  try {
    const student = req.query.student;
    const scholarships = req.query.scholarship;

    console.log("API hit: recommendation");
    const prompt = generateScholarshipPrompt(student, scholarships);

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "No recommendations found.";

    res.status(200).json({ recommendation: content });
  } catch (err) {
    console.error("AI API error:", err.message);
    res.status(500).json({ error: "Unable to fetch scholarship recommendations at the moment." });
  }
};


