package cl.joseastorga.portfolio.project.dto;

import java.time.OffsetDateTime;

public record ProjectResponse(
        Long id,
        String title,
        String slug,
        String shortDescription,
        String description,
        String imageUrl,
        String githubUrl,
        String demoUrl,
        boolean featured,
        OffsetDateTime createdAt,
        OffsetDateTime updatedAt) {

}
