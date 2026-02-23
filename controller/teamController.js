import Team from "../models/teamModel.js";

// ➕ Create Team Member
export const createTeamMember = async (req, res) => {
  try {
    const { name, position, bio, linkedin } = req.body;

    const image = req.file ? req.file.path : "";

    const member = await Team.create({
      name,
      position,
      bio,
      linkedin,
      image,
    });

    res.status(201).json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📄 Get All Team Members
export const getTeamMembers = async (req, res) => {
  try {
    const members = await Team.find().sort({ createdAt: -1 });
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ❌ Delete Team Member
export const deleteTeamMember = async (req, res) => {
  try {
    await Team.findByIdAndDelete(req.params.id);
    res.json({ message: "Team member removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};