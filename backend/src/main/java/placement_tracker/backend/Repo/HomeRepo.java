package placement_tracker.backend.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import placement_tracker.backend.Model.Register;

public interface HomeRepo extends JpaRepository<Register, String> {
	Optional<Register> findByEmail(String email);

}
