import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const scholarship = [
  {
    title: "Global Tech Scholars",
    description:
      "A scholarship for Computer Science students pursuing undergraduate degrees who wish to study in Canada. Merit-based and open to all nationalities.",
    eligibility: {
      degree: "B.Tech",
      location: "Canada",
      minCGPA: 8.0,
      category: "All",
      incomeCap: null,
      field: "Computer Science",
    },
    amount: 5000,
    deadline: new Date("2025-07-31"),
    addedBy: "644cb52b0f1c0c0001f8d111",
    applications: [],
    applicants: [],
  },
  {
    title: "Need-Based Engineering Aid",
    description:
      "Financial assistance for low-income engineering students in India with strong academic backgrounds.",
    eligibility: {
      degree: "B.Tech",
      location: "India",
      minCGPA: 7.0,
      category: "All",
      incomeCap: 300000,
      field: "Engineering",
    },
    amount: 30000,
    deadline: new Date("2025-06-15"),
    addedBy: "644cb52b0f1c0c0001f8d112",
    applications: [],
    applicants: [],
  },
  {
    title: "Women in STEM",
    description:
      "Scholarship for female students pursuing degrees in STEM fields at recognized institutions worldwide.",
    eligibility: {
      degree: "Any",
      location: "Global",
      minCGPA: 8.0,
      category: "Female",
      incomeCap: null,
      field: "STEM",
    },
    amount: 10000,
    deadline: new Date("2025-08-01"),
    addedBy: "644cb52b0f1c0c0001f8d113",
    applications: [],
    applicants: [],
  },
];

const student = {
  fullname: "Rahul Sidar",
  email: "rahul.sidar@example.com",
  phoneNumber: 9876543210,
  password: "hashed_password_here",
  role: "student",
  profile: {
    bio: "Final year Computer Science student passionate about AI and Web Development.",
    education: {
      degree: "B.Tech",
      institution: "IIIT Naya Raipur",
      graduationYear: 2025,
    },
    profilePhoto: "https://example.com/photos/rahul.jpg",
    cgpa: 8.2,
    category: "OBC",
    income: 250000,
    countryPreference: "Canada",
  },
  appliedScholarships: [],
  assignedAgent: "644cb52b0f1c0c0001f8d120",
};

// ✅ FIXED: Includes a defensive check
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
You are an AI scholarship recommender. Based on the student profile and the list of scholarships, recommend the most suitable ones and provide short reasons.

${studentDetails}

Available Scholarships:
${scholarshipList}
`;
}

// ✅ FIXED: Properly calls the API
export const getScholarshipRecommendations = async (student, scholarships) => {
  try {
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
    return data.choices?.[0]?.message?.content || "No recommendations found.";
  } catch (err) {
    console.error("AI API error:", err.message);
    return "Unable to fetch scholarship recommendations at the moment.";
  }
};

// ✅ Test call to verify everything works
getScholarshipRecommendations(student, scholarship).then((result) => {
  console.log("\n🎓 Scholarship Recommendations:\n", result);
});
