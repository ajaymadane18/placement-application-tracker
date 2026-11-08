package placement_tracker.backend.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import placement_tracker.backend.Model.Application;

public interface UserRepo extends JpaRepository<Application, String>{

}
