"use client";

import { useEffect } from "react";
import { trackEvent } from "@/utils/analytics";

interface ProjectDetailTrackerProps {
  projectId: number;
  projectTitle: string;
}

export default function ProjectDetailTracker({
  projectId,
  projectTitle,
}: ProjectDetailTrackerProps) {
  useEffect(() => {
    trackEvent("project_detail_view", {
      projectId,
      projectTitle,
    });
  }, [projectId, projectTitle]);

  return null;
}
