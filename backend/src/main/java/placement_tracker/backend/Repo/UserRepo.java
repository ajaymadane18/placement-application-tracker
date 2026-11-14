package placement_tracker.backend.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import placement_tracker.backend.Model.Application;
import placement_tracker.backend.Model.Register;

public interface UserRepo extends JpaRepository<Application, Long>{
	List<Application> findByRegister(Register register);

	
}
