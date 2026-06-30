const API_BASE_URL = "http://localhost:5000";

function getAuthHeaders() {
  const token = localStorage.getItem("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function createReport(reportData) {
  const response = await fetch(`${API_BASE_URL}/api/reports`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(reportData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to create report");
  }

  return data;
}

export async function getMyReports() {
  const response = await fetch(`${API_BASE_URL}/api/reports/my`, {
    headers: getAuthHeaders(),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch reports");
  }

  return data;
}

export async function getReportById(id) {
  const response = await fetch(`${API_BASE_URL}/api/reports/${id}`, {
    headers: getAuthHeaders(),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch report details");
  }

  return data;
}

export async function getNearbyReports() {
  const response = await fetch(`${API_BASE_URL}/api/reports/nearby`, {
    headers: getAuthHeaders(),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch nearby reports");
  }

  return data;
}