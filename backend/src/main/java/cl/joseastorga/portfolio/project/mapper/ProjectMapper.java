package cl.joseastorga.portfolio.project.mapper;

import cl.joseastorga.portfolio.project.domain.Project;
import cl.joseastorga.portfolio.project.dto.ProjectResponse;
import org.springframework.stereotype.Component;

@Component
public class ProjectMapper {

    public ProjectResponse toResponse(Project project) {
        return new ProjectResponse(
                project.getId(),
                project.getTitle(),
                project.getSlug(),
                project.getShortDescription(),
                project.getDescription(),
                project.getImageUrl(),
                project.getGithubUrl(),
                project.getDemoUrl(),
                project.isFeatured(),
                project.getCreatedAt(),
                project.getUpdatedAt());
    }
}