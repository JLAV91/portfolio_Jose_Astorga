package cl.joseastorga.portfolio.project.service;

import cl.joseastorga.portfolio.project.dto.ProjectResponse;

import java.util.List;
import java.util.Optional;

public interface ProjectService {

    List<ProjectResponse> findAll();

    Optional<ProjectResponse> findBySlug(String slug);
}