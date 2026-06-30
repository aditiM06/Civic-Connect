import db from "../config/db.js";

function calculatePriorityScore(severity) {
  if (severity === "High") return 80;
  if (severity === "Medium") return 50;
  return 25;
}

export async function createReport(req, res) {
  try {
    const userId = req.user.id;

    const {
      title,
      description,
      category,
      severity,
      locationText,
      latitude,
      longitude,
    } = req.body;

    if (!title || !category || !locationText) {
      return res.status(400).json({
        message: "Title, category, and location are required",
      });
    }

    const finalSeverity = severity || "Medium";
    const priorityScore = calculatePriorityScore(finalSeverity);

    const [result] = await db.execute(
      `INSERT INTO reports
       (
         user_id,
         title,
         description,
         category,
         severity,
         location_text,
         latitude,
         longitude,
         priority_score
       )
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        userId,
        title,
        description || null,
        category,
        finalSeverity,
        locationText,
        latitude || null,
        longitude || null,
        priorityScore,
      ]
    );

    return res.status(201).json({
      message: "Report created successfully",
      reportId: result.insertId,
    });
  } catch (error) {
    console.error("Create report error:", error);

    return res.status(500).json({
      message: "Something went wrong while creating report",
    });
  }
}

export async function getMyReports(req, res) {
  try {
    const userId = req.user.id;

    const [reports] = await db.execute(
      `SELECT
         id,
         title,
         description,
         category,
         severity,
         status,
         location_text AS locationText,
         latitude,
         longitude,
         image_url AS imageUrl,
         priority_score AS priorityScore,
         upvotes_count AS upvotesCount,
         comments_count AS commentsCount,
         created_at AS createdAt,
         updated_at AS updatedAt
       FROM reports
       WHERE user_id = ?
       ORDER BY created_at DESC`,
      [userId]
    );

    return res.json({
      message: "Reports fetched successfully",
      reports,
    });
  } catch (error) {
    console.error("Get my reports error:", error);

    return res.status(500).json({
      message: "Something went wrong while fetching reports",
    });
  }
}

export async function getReportById(req, res) {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const [reports] = await db.execute(
      `SELECT
         id,
         user_id AS userId,
         title,
         description,
         category,
         severity,
         status,
         location_text AS locationText,
         latitude,
         longitude,
         image_url AS imageUrl,
         ai_category AS aiCategory,
         ai_severity AS aiSeverity,
         ai_summary AS aiSummary,
         priority_score AS priorityScore,
         upvotes_count AS upvotesCount,
         comments_count AS commentsCount,
         created_at AS createdAt,
         updated_at AS updatedAt
       FROM reports
       WHERE id = ? AND user_id = ?`,
      [id, userId]
    );

    if (reports.length === 0) {
      return res.status(404).json({
        message: "Report not found",
      });
    }

    return res.json({
      message: "Report fetched successfully",
      report: reports[0],
    });
  } catch (error) {
    console.error("Get report by id error:", error);

    return res.status(500).json({
      message: "Something went wrong while fetching report details",
    });
  }
}

export async function getNearbyReports(req, res) {
  try {
    const [reports] = await db.execute(
      `SELECT
         id,
         title,
         category,
         severity,
         status,
         location_text AS locationText,
         latitude,
         longitude,
         image_url AS imageUrl,
         priority_score AS priorityScore,
         upvotes_count AS upvotesCount,
         comments_count AS commentsCount,
         created_at AS createdAt
       FROM reports
       ORDER BY created_at DESC
       LIMIT 50`
    );

    return res.json({
      message: "Nearby reports fetched successfully",
      reports,
    });
  } catch (error) {
    console.error("Get nearby reports error:", error);

    return res.status(500).json({
      message: "Something went wrong while fetching nearby reports",
    });
  }
}