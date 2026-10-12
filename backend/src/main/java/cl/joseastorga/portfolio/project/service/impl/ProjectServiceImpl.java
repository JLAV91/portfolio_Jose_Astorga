package cl.joseastorga.portfolio.project.service.impl;

import cl.joseastorga.portfolio.project.dto.ProjectResponse;
import cl.joseastorga.portfolio.project.mapper.ProjectMapper;
import cl.joseastorga.portfolio.project.repository.ProjectRepository;
import cl.joseastorga.portfolio.project.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository projectRepository;
    private final ProjectMapper projectMapper;

    @Override
    public List<ProjectResponse> findAll() {
        return projectRepository.findAll()
                .stream()
                .map(projectMapper::toResponse)
                .toList();
    }

    @Override
    public Optional<ProjectResponse> findBySlug(String slug) {
        return projectRepository.findBySlug(slug)
                .map(projectMapper::toResponse);
    }
}